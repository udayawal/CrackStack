export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  featured?: boolean;
}

export type ToolCategory = 
  | 'cryptography'
  | 'steganography'
  | 'encoding'
  | 'hashing'
  | 'forensics'
  | 'networking';

export interface SearchFilters {
  query: string;
  category: ToolCategory | 'all';
}