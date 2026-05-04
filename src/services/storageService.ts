import { nativeBridge } from './nativeBridge';

export const storageService = {
  saveSessions(sessions: any[]) {
    localStorage.setItem('chat_sessions', JSON.stringify(sessions));
  },

  loadSessions() {
    const data = localStorage.getItem('chat_sessions');
    return data ? JSON.parse(data) : [];
  },

  async saveApiKey(key: string) {
    localStorage.setItem('openrouter_api_key', key);
    await nativeBridge.saveSecure('openrouter_api_key', key);
  },

  async loadApiKey() {
    const secureKey = await nativeBridge.getSecure('openrouter_api_key');
    if (secureKey) {
      localStorage.setItem('openrouter_api_key', secureKey);
      return secureKey;
    }
    return localStorage.getItem('openrouter_api_key') || '';
  },

  saveFolders(folders: any[]) {
    localStorage.setItem('chat_folders', JSON.stringify(folders));
  },

  loadFolders() {
    const data = localStorage.getItem('chat_folders');
    return data ? JSON.parse(data) : [];
  },

  savePersonas(personas: any[]) {
    localStorage.setItem('chat_personas', JSON.stringify(personas));
  },

  loadPersonas() {
    const data = localStorage.getItem('chat_personas');
    return data ? JSON.parse(data) : [];
  },

  saveCustomModels(models: any[]) {
    localStorage.setItem('custom_models', JSON.stringify(models));
  },

  loadCustomModels() {
    const data = localStorage.getItem('custom_models');
    return data ? JSON.parse(data) : [];
  },

  saveTemplates(templates: any[]) {
    localStorage.setItem('prompt_templates', JSON.stringify(templates));
  },

  loadTemplates() {
    const data = localStorage.getItem('prompt_templates');
    return data ? JSON.parse(data) : [];
  },

  // --- Marina Academy ---
  saveAcademyProgress(progress: any[]) {
    localStorage.setItem('marina_academy_progress', JSON.stringify(progress));
  },

  loadAcademyProgress(): any[] {
    const data = localStorage.getItem('marina_academy_progress');
    return data ? JSON.parse(data) : [];
  },

  saveTutorHistory(history: any[]) {
    localStorage.setItem('marina_tutor_history', JSON.stringify(history));
  },

  loadTutorHistory(): any[] {
    const data = localStorage.getItem('marina_tutor_history');
    return data ? JSON.parse(data) : [];
  }
};
