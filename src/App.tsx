import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { ToolCard } from './components/ToolCard';
import { CaesarCipher } from './pages/CaesarCipher';
import { tools } from './data/tools';
import { SearchFilters } from './types';

function App() {
  const [filters, setFilters] = React.useState<SearchFilters>({
    query: '',
    category: 'all'
  });

  const filteredTools = React.useMemo(() => {
    return tools.filter(tool => {
      const matchesQuery = tool.name.toLowerCase().includes(filters.query.toLowerCase()) ||
                         tool.description.toLowerCase().includes(filters.query.toLowerCase());
      const matchesCategory = filters.category === 'all' || tool.category === filters.category;
      return matchesQuery && matchesCategory;
    });
  }, [filters]);

  const featuredTools = tools.filter(tool => tool.featured);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navbar />
        
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <>
                <div className="flex flex-col items-center text-center mb-12">
                  <h1 className="text-4xl font-bold mb-4 text-orange-600 dark:text-orange-500">
                    Your Ultimate CTF Toolkit
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                    Fast, secure, and powerful tools for cryptography, steganography, 
                    forensics, and more — all in one place.
                  </p>
                </div>

                <div className="flex justify-center mb-12">
                  <SearchBar filters={filters} onFiltersChange={setFilters} />
                </div>

                {filters.query === '' && filters.category === 'all' && (
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-orange-500">Featured Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {featuredTools.map(tool => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h2 className="text-2xl font-bold mb-6 text-orange-600 dark:text-orange-500">
                    {filters.query || filters.category !== 'all' ? 'Search Results' : 'All Tools'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTools.map(tool => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                </section>
              </>
            } />
            <Route path="/tools/caesar" element={<CaesarCipher />} />
            <Route path="/tools/:id" element={<div>Tool page coming soon...</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;