import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { tools } from '../data/tools';
import { ToolCategory } from '../types';

export function Navbar() {
  const categories = Array.from(new Set(tools.map(tool => tool.category)));
  
  const toolsByCategory = categories.reduce((acc, category) => {
    acc[category] = tools.filter(tool => tool.category === category);
    return acc;
  }, {} as Record<ToolCategory, typeof tools>);

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Terminal className="w-8 h-8 text-orange-600 dark:text-orange-500" />
              <span className="text-xl font-bold text-orange-600 dark:text-orange-500">CrackStack</span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  >
                    <span>Tools</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1" role="menu">
                      {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
                        <div key={category} className="px-4 py-2">
                          <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-500 capitalize">{category}</h3>
                          <div className="mt-2 space-y-1">
                            {categoryTools.map(tool => (
                              <Link
                                key={tool.id}
                                to={`/tools/${tool.id}`}
                                className="block px-2 py-1 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-md"
                              >
                                {tool.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}