import * as pdfjsLib from 'pdfjs-dist';

// Configuração do Worker (usando CDN para compatibilidade máxima no WebView)
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const fileService = {
  /**
   * Extrai texto de um arquivo (PDF, TXT ou JSON)
   */
  async extractText(file: File): Promise<string> {
    const extension = file.name.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'pdf':
        return this.extractFromPDF(file);
      case 'txt':
      case 'json':
        return this.extractFromText(file);
      default:
        throw new Error('Formato de arquivo não suportado');
    }
  },

  /**
   * Lê arquivos de texto simples
   */
  async extractFromText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  },

  /**
   * Lê e extrai texto de todas as páginas de um PDF
   */
  async extractFromPDF(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += `\n--- Página ${i} ---\n${pageText}\n`;
    }
    
    return fullText;
  },

  /**
   * Divide um texto longo em "chunks" (pedaços) para o RAG
   */
  chunkText(text: string, chunkSize: number = 1000, overlap: number = 200): string[] {
    const chunks: string[] = [];
    let i = 0;

    while (i < text.length) {
      chunks.push(text.slice(i, i + chunkSize));
      i += (chunkSize - overlap);
    }

    return chunks;
  }
};
