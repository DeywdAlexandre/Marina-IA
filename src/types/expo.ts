export interface ExpoBuild {
  id: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'FINISHED' | 'ERRORED';
  platform: 'android' | 'ios';
  buildProfile: string;
  artifactUrl?: string;
  createdAt: string;
}

export interface ExpoUpdate {
  id: string;
  group: string;
  message: string;
  runtimeVersion: string;
  platform: 'android' | 'ios' | 'all';
  createdAt: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  image?: string;
  modelName?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  modelId: string;
  folderId?: string;
}

export interface Folder {
  id: string;
  name: string;
  isExpanded?: boolean;
}

export interface Persona {
  id: string;
  name: string;
  systemPrompt: string;
  icon?: string;
}

export interface OpenRouterModel {
  id: string;
  name: string;
  pricing: {
    prompt: string;
    completion: string;
  };
}
