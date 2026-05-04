import React, { useState, useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Notifications from 'expo-notifications';
import * as SecureStore from 'expo-secure-store';
import * as Haptics from 'expo-haptics';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

// Configuração de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const TARGET_URL = 'https://ais-pre-lngglbm2tnxwhkvbnfttyw-22326498892.us-east1.run.app';

export default function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Pode ser alterado para false se quiser travar o app no início
  const webViewRef = useRef(null);

  useEffect(() => {
    // Solicitar permissões de notificação no início
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de notificação negada');
      }
    })();
  }, []);

  const handleReload = () => {
    setError(null);
    setLoading(true);
  };

  // Ponte Nativa (Bridge)
  const onMessage = async (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      
      switch (data.type) {
        case 'HAPTIC':
          if (data.style === 'light') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          else if (data.style === 'medium') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          else if (data.style === 'heavy') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          else if (data.style === 'selection') Haptics.selectionAsync();
          else if (data.style === 'warning') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          else if (data.style === 'error') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          else Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          break;

        case 'BIOMETRICS':
          const hasHardware = await LocalAuthentication.hasHardwareAsync();
          if (!hasHardware) {
            webViewRef.current.postMessage(JSON.stringify({ type: 'BIOMETRICS_RESULT', success: false, error: 'Sem hardware' }));
            return;
          }
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Desbloquear Marina IA',
            fallbackLabel: 'Usar senha',
          });
          webViewRef.current.postMessage(JSON.stringify({ type: 'BIOMETRICS_RESULT', success: result.success }));
          break;

        case 'NOTIFY':
          await Notifications.scheduleNotificationAsync({
            content: {
              title: data.title || "Marina IA",
              body: data.body,
              data: data.data || {},
            },
            trigger: null, // Imediato
          });
          break;

        case 'SCHEDULE_NOTIFY':
          const triggerDate = new Date(data.trigger);
          if (isNaN(triggerDate.getTime())) return;
          
          await Notifications.scheduleNotificationAsync({
            content: {
              title: data.title || "Lembrete da Marina",
              body: data.body,
              data: data.data || {},
              sound: true,
              priority: 'high'
            },
            trigger: triggerDate,
          });
          break;

        case 'SAVE_SECURE':
          await SecureStore.setItemAsync(data.key, data.value);
          break;

        case 'GET_SECURE':
          const val = await SecureStore.getItemAsync(data.key);
          webViewRef.current.postMessage(JSON.stringify({ type: 'SECURE_RESULT', key: data.key, value: val }));
          break;

        case 'CAMERA':
          const camPermission = await ImagePicker.requestCameraPermissionsAsync();
          if (!camPermission.granted) {
            webViewRef.current.postMessage(JSON.stringify({ type: 'CAMERA_RESULT', success: false, error: 'Permissão negada' }));
            return;
          }
          const camResult = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.7,
            base64: true,
          });
          if (!camResult.canceled) {
            webViewRef.current.postMessage(JSON.stringify({ 
              type: 'CAMERA_RESULT', 
              success: true, 
              image: `data:image/jpeg;base64,${camResult.assets[0].base64}` 
            }));
          }
          break;

        default:
          console.log('Mensagem desconhecida:', data.type);
      }
    } catch (e) {
      console.error('Erro na Bridge:', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#131314" />
      
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Ops! Algo deu errado.</Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.button} onPress={handleReload}>
            <Text style={styles.buttonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <WebView 
            ref={webViewRef}
            source={{ uri: TARGET_URL }} 
            style={{ flex: 1 }}
            onLoadEnd={() => setLoading(false)}
            onMessage={onMessage}
            onError={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              setError(nativeEvent.description || 'Falha ao carregar a interface.');
            }}
          />
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#8ab4f8" />
              <Text style={styles.loadingText}>Iniciando Marina IA...</Text>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131314',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    color: '#9aa0a6',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8ab4f8',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#131314',
    fontWeight: 'bold',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#131314',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#8ab4f8',
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
  }
});


