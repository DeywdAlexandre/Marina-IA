
export const DEFAULT_MODELS = [
  { id: 'google/gemma-2-9b-it:free', name: 'Gemma 2 9B (Free)', isFree: true },
  { id: 'mistralai/mistral-nemo', name: 'Mistral Nemo (Value)', isFree: false },
  { id: 'perplexity/llama-3.1-sonar-small-128k-online', name: 'Marina Search (Online)', isFree: false },
  { id: 'openai/gpt-4o-mini', name: 'GPT 5 Nano (Experimental)', isFree: false }
];

export async function chatWithOpenRouter(
  apiKey: string,
  model: string,
  messages: any[],
  onStream?: (chunk: string) => void
) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "Marina IA",
      },
      body: JSON.stringify({
        "model": model,
        "messages": messages,
        "stream": true
      })
    });

    if (!response.ok) throw new Error("Falha na chamada ao OpenRouter");

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let fullText = "";
    let buffer = "";

    if (!reader) return;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      
      // Mantém a última linha no buffer caso esteja incompleta
      buffer = lines.pop() || "";
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        
        const data = trimmed.slice(6);
        if (data === "[DONE]") break;
        
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices[0]?.delta?.content || "";
          fullText += content;
          if (onStream) onStream(content);
        } catch (e) {
          // Fragmento possivelmente incompleto, ignorar e esperar próximo chunk
        }
      }
    }
    return fullText;
  } catch (error) {
    console.error("Erro no Chat:", error);
    throw error;
  }
}
