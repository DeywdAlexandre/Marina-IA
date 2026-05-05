import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, ShieldCheck, Search, ArrowLeft, GraduationCap } from 'lucide-react';
import { clerkService } from '../../services/clerkService';

interface AdminPanelProps {
  onBack: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onBack }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    const data = await clerkService.getUsersList();
    setUsers(data);
    setLoading(false);
  };

  const filteredUsers = users.filter(u => 
    u.emailAddresses?.[0]?.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col bg-background">
      <header className="h-16 border-b border-border-dim flex items-center justify-between px-6 bg-surface/30">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-[#333537] rounded-full transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-primary" />
            <h2 className="font-bold">Painel Master</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#9aa0a6]">
          <Users size={14} />
          {users.length} usuários cadastrados
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#444746]" size={18} />
            <input 
              type="text" 
              placeholder="Buscar aluno por nome ou e-mail..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-surface border border-border-dim rounded-xl py-3 pl-10 pr-4 text-sm focus:border-primary outline-none transition-all"
            />
          </div>

          {/* Tabela de Usuários */}
          <div className="bg-surface border border-border-dim rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-background/50 text-[#9aa0a6] text-[10px] uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">Aluno</th>
                  <th className="px-6 py-4">E-mail</th>
                  <th className="px-6 py-4">Progresso Total</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dim">
                {loading ? (
                  <tr><td colSpan={4} className="px-6 py-10 text-center text-[#9aa0a6]">Carregando alunos...</td></tr>
                ) : filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-[#333537]/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={user.imageUrl} className="w-8 h-8 rounded-full border border-border-dim" />
                        <span className="font-medium text-white">{user.firstName || 'Sem nome'} {user.lastName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#9aa0a6]">{user.emailAddresses?.[0]?.emailAddress}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={14} className="text-primary" />
                        <span className="text-white">
                           {Array.isArray(user.publicMetadata?.progress) 
                             ? user.publicMetadata.progress.reduce((acc: number, p: any) => acc + (p.completedLessons?.length || 0), 0)
                             : 0} lições
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                       {user.publicMetadata?.role === 'admin' ? (
                         <span className="text-[10px] bg-primary/20 text-primary px-2 py-1 rounded-full font-bold uppercase">Master</span>
                       ) : (
                         <button 
                           onClick={() => {
                             if(confirm(`Promover ${user.firstName} a Master?`)) {
                               clerkService.makeMaster(user.id).then(() => loadUsers());
                             }
                           }}
                           className="text-[10px] text-[#9aa0a6] hover:text-white underline"
                         >
                           Promover
                         </button>
                       )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
