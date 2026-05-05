/**
 * Serviço de Integração com o Backend para funcionalidades do Clerk
 */

export const clerkService = {
  /**
   * Sincroniza o progresso do aluno com o publicMetadata do Clerk
   */
  async syncProgress(userId: string, progress: any) {
    try {
      const response = await fetch('/api/clerk/update-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, progress })
      });
      return await response.json();
    } catch (error) {
      console.error("Erro ao sincronizar progresso:", error);
      return { success: false, error };
    }
  },

  /**
   * Lista todos os usuários cadastrados (Apenas para Admin)
   */
  async getUsersList() {
    try {
      const response = await fetch('/api/clerk/users');
      const data = await response.json();
      return data.users || [];
    } catch (error) {
      console.error("Erro ao buscar lista de usuários:", error);
      return [];
    }
  },

  /**
   * Promove um usuário a MASTER (Admin)
   */
  async makeMaster(userId: string) {
    try {
      const response = await fetch('/api/clerk/make-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
      });
      return await response.json();
    } catch (error) {
      console.error("Erro ao promover usuário:", error);
      return { success: false, error };
    }
  }
};
