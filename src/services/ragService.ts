import { fileService } from './fileService';

export interface IndexedDocument {
  id: string;
  name: string;
  fullText: string;
  chunks: string[];
}

class RAGService {
  private indexedDocs: IndexedDocument[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const saved = localStorage.getItem('marina_indexed_docs');
      if (saved) {
        this.indexedDocs = JSON.parse(saved);
      }
    } catch (e) {
      console.error("Erro ao carregar documentos indexados:", e);
      this.indexedDocs = [];
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem('marina_indexed_docs', JSON.stringify(this.indexedDocs));
    } catch (e) {
      console.error("Erro ao salvar documentos indexados:", e);
    }
  }

  /**
   * Adiciona um documento à biblioteca de conhecimento local
   */
  async indexFile(file: File): Promise<IndexedDocument> {
    const text = await fileService.extractText(file);
    const chunks = fileService.chunkText(text);
    
    const doc: IndexedDocument = {
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      fullText: text,
      chunks: chunks
    };
    
    this.indexedDocs.push(doc);
    this.saveToStorage();
    return doc;
  }

  /**
   * Busca os trechos mais relevantes entre todos os documentos indexados
   */
  searchRelevantChunks(query: string, limit: number = 5): string {
    if (this.indexedDocs.length === 0) return '';

    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const scoredChunks: { text: string; score: number; docName: string }[] = [];

    this.indexedDocs.forEach(doc => {
      doc.chunks.forEach(chunk => {
        let score = 0;
        const chunkLower = chunk.toLowerCase();
        
        queryWords.forEach(word => {
          if (chunkLower.includes(word)) {
            score += 1;
            // Bônus por ocorrências repetidas
            const count = chunkLower.split(word).length - 1;
            score += (count * 0.2);
          }
        });

        if (score > 0) {
          scoredChunks.push({ text: chunk, score, docName: doc.name });
        }
      });
    });

    // Ordena por relevância e pega os melhores
    const topChunks = scoredChunks
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    if (topChunks.length === 0) return '';

    return topChunks
      .map(c => `[Documento: ${c.docName}]\n${c.text}`)
      .join('\n\n---\n\n');
  }

  clearIndex() {
    this.indexedDocs = [];
    this.saveToStorage();
  }

  getDocs() {
    return this.indexedDocs;
  }

  removeDoc(id: string) {
    this.indexedDocs = this.indexedDocs.filter(d => d.id !== id);
    this.saveToStorage();
  }
}

export const ragService = new RAGService();
