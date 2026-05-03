import { ExpoBuild, ExpoUpdate } from '../types/expo';

/**
 * Service to interact with Expo EAS API.
 * Note: Requires EXPO_TOKEN to be set in environment variables.
 */
export const expoService = {
  async getBuilds(projectId: string): Promise<ExpoBuild[]> {
    try {
      const response = await fetch(`/api/expo/builds?projectId=${projectId}`);
      const data = await response.json();
      return data.builds || [];
    } catch (error) {
      console.error('Error fetching builds:', error);
      return [];
    }
  },

  async createUpdate(projectId: string, message: string): Promise<ExpoUpdate | null> {
    try {
      const response = await fetch('/api/expo/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, message })
      });
      return await response.json();
    } catch (error) {
      console.error('Error triggering update:', error);
      return null;
    }
  }
};
