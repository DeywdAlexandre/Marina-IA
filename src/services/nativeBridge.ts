/**
 * Service to communicate with the native side (Expo App.js)
 * via WebView postMessage.
 */

const isNative = typeof window !== 'undefined' && (window as any).ReactNativeWebView;

export const nativeBridge = {
  /**
   * Triggers haptic feedback
   * @param style 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error'
   */
  haptic(style: 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' | 'error' = 'success') {
    if (!isNative) return;
    (window as any).ReactNativeWebView.postMessage(JSON.stringify({
      type: 'HAPTIC',
      style
    }));
  },

  /**
   * Requests biometric authentication
   */
  async authenticate(): Promise<boolean> {
    if (!isNative) return true; // Always success on web for now
    
    return new Promise((resolve) => {
      const listener = (event: any) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'BIOMETRICS_RESULT') {
            window.removeEventListener('message', listener);
            resolve(data.success);
          }
        } catch (e) { /* ignore */ }
      };

      window.addEventListener('message', listener);
      (window as any).ReactNativeWebView.postMessage(JSON.stringify({
        type: 'BIOMETRICS',
      }));
    });
  },

  /**
   * Sends a native notification
   */
  notify(title: string, body: string, data: any = {}) {
    if (!isNative) {
      if (Notification.permission === 'granted') {
        new Notification(title, { body });
      }
      return;
    }

    (window as any).ReactNativeWebView.postMessage(JSON.stringify({
      type: 'NOTIFY',
      title,
      body,
      data
    }));
  },

  /**
   * Saves a value securely (Keystore/Keychain)
   */
  saveSecure(key: string, value: string) {
    if (!isNative) {
      localStorage.setItem(key, value);
      return;
    }
    (window as any).ReactNativeWebView.postMessage(JSON.stringify({
      type: 'SAVE_SECURE',
      key,
      value
    }));
  },

  /**
   * Retrieves a secure value
   */
  async getSecure(key: string): Promise<string | null> {
    if (!isNative) return localStorage.getItem(key);

    return new Promise((resolve) => {
      const listener = (event: any) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'SECURE_RESULT' && data.key === key) {
            window.removeEventListener('message', listener);
            resolve(data.value);
          }
        } catch (e) { /* ignore */ }
      };

      window.addEventListener('message', listener);
      (window as any).ReactNativeWebView.postMessage(JSON.stringify({
        type: 'GET_SECURE',
        key
      }));
    });
  },

  /**
   * Opens the native camera and returns base64 image
   */
  async openCamera(): Promise<string | null> {
    if (!isNative) return null;

    return new Promise((resolve) => {
      const listener = (event: any) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'CAMERA_RESULT') {
            window.removeEventListener('message', listener);
            resolve(data.success ? data.image : null);
          }
        } catch (e) { /* ignore */ }
      };

      window.addEventListener('message', listener);
      (window as any).ReactNativeWebView.postMessage(JSON.stringify({
        type: 'CAMERA'
      }));
    });
  }
};
