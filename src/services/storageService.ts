
export const storageService = {
  saveSessions(sessions: any[]) {
    localStorage.setItem('chat_sessions', JSON.stringify(sessions));
  },

  loadSessions() {
    const data = localStorage.getItem('chat_sessions');
    return data ? JSON.parse(data) : [];
  },

  saveApiKey(key: string) {
    localStorage.setItem('openrouter_api_key', key);
  },

  loadApiKey() {
    return localStorage.getItem('openrouter_api_key') || '';
  },

  saveFolders(folders: any[]) {
    localStorage.setItem('chat_folders', JSON.stringify(folders));
  },

  loadFolders() {
    const data = localStorage.getItem('chat_folders');
    return data ? JSON.parse(data) : [];
  },

  saveCustomModels(models: any[]) {
    localStorage.setItem('custom_models', JSON.stringify(models));
  },

  loadCustomModels() {
    const data = localStorage.getItem('custom_models');
    return data ? JSON.parse(data) : [];
  }
};
