import React from 'react';
import { Search } from 'lucide-react';
import { SearchFilters, ToolCategory } from '../types';

interface SearchBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export function SearchBar({ filters, onFiltersChange }: SearchBarProps) {
  const categories: Array<ToolCategory | 'all'> = [
    'all',
    'cryptography',
    'steganography',
    'encoding',
    'hashing',
    'forensics',
    'networking'
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search tools..."
          value={filters.query}
          onChange={(e) => onFiltersChange({ ...filters, query: e.target.value })}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 outline-none transition-shadow text-gray-900 dark:text-white"
        />
      </div>
      <select
        value={filters.category}
        onChange={(e) => onFiltersChange({ ...filters, category: e.target.value as ToolCategory | 'all' })}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 outline-none transition-shadow capitalize text-gray-900 dark:text-white"
      >
        {categories.map((category) => (
          <option key={category} value={category} className="capitalize">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}