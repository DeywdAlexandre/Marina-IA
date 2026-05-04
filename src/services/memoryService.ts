import { Fact } from '../types/expo';

const STORAGE_KEY = 'marina_selective_memory';

export const memoryService = {
  /**
   * Loads all stored facts
   */
  loadFacts(): Fact[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  /**
   * Saves all facts
   */
  saveFacts(facts: Fact[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(facts));
  },

  /**
   * Adds a new fact
   */
  addFact(content: string, category?: string): Fact {
    const facts = this.loadFacts();
    const newFact: Fact = {
      id: Date.now().toString(),
      content,
      category,
      timestamp: Date.now(),
    };
    this.saveFacts([newFact, ...facts]);
    return newFact;
  },

  /**
   * Deletes a fact by ID
   */
  deleteFact(id: string): void {
    const facts = this.loadFacts();
    this.saveFacts(facts.filter(f => f.id !== id));
  },

  /**
   * Searches for facts relevant to a query
   * For now, uses simple keyword matching. 
   * In the future, this can be upgraded to Vector/Semantic search.
   */
  searchRelevantFacts(query: string): Fact[] {
    const facts = this.loadFacts();
    const keywords = query.toLowerCase().split(/\s+/).filter(k => k.length > 3);
    
    if (keywords.length === 0) return [];

    return facts.filter(f => {
      const content = f.content.toLowerCase();
      return keywords.some(k => content.includes(k));
    }).slice(0, 5); // Return top 5 relevant facts
  },

  /**
   * Clears all memory
   */
  clearMemory(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
};
