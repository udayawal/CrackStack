import React from 'react';
import { Tool } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      to={`/tools/${tool.id}`}
      className="group p-6 bg-white dark:bg-black rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
            {tool.name}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {tool.description}
          </p>
          <span className="inline-block mt-3 text-sm font-medium text-orange-600 dark:text-orange-500 group-hover:translate-x-1 transition-transform">
            Use tool <ArrowRight className="inline w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}