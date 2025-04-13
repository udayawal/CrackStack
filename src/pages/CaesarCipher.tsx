import React from 'react';
import { ArrowRight, Copy, RotateCcw, Lock, Unlock } from 'lucide-react';

export function CaesarCipher() {
  const [input, setInput] = React.useState('');
  const [shift, setShift] = React.useState(3);
  const [mode, setMode] = React.useState<'encrypt' | 'decrypt'>('encrypt');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const processText = (text: string, shift: number, isEncrypt: boolean): string => {
    const actualShift = isEncrypt ? shift : (26 - shift);
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const isUpperCase = code >= 65 && code <= 90;
          const base = isUpperCase ? 65 : 97;
          return String.fromCharCode(
            ((code - base + actualShift) % 26) + base
          );
        }
        return char;
      })
      .join('');
  };

  const output = React.useMemo(() => {
    return processText(input, shift, mode === 'encrypt');
  }, [input, shift, mode]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-600 dark:bg-orange-700 p-6">
          <h1 className="text-2xl font-bold text-white mb-2">Caesar Cipher</h1>
          <p className="text-orange-100">
            A simple substitution cipher that shifts letters in the alphabet by a fixed number of positions.
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Input Text
            </label>
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-32 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter text to encrypt or decrypt..."
              />
              <button
                onClick={() => setInput('')}
                className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Shift Amount
              </label>
              <input
                type="number"
                min="0"
                max="25"
                value={shift}
                onChange={(e) => setShift(parseInt(e.target.value) % 26)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mode
              </label>
              <div className="flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                <button
                  onClick={() => setMode('encrypt')}
                  className={`flex-1 px-4 py-2 flex items-center justify-center space-x-2 ${
                    mode === 'encrypt'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  <span>Encrypt</span>
                </button>
                <button
                  onClick={() => setMode('decrypt')}
                  className={`flex-1 px-4 py-2 flex items-center justify-center space-x-2 ${
                    mode === 'decrypt'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Unlock className="w-4 h-4" />
                  <span>Decrypt</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Output
            </label>
            <div className="relative">
              <div className="w-full min-h-[8rem] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
                {output || <span className="text-gray-400">Output will appear here...</span>}
              </div>
              <button
                onClick={() => handleCopy(output)}
                className="absolute right-2 top-2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            How it works
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The Caesar cipher is one of the simplest and most widely known encryption techniques. 
            It works by shifting each letter in the plaintext by a fixed number of positions down the alphabet. 
            For example, with a shift of 3, 'A' would become 'D', 'B' would become 'E', and so on.
          </p>
        </div>
      </div>
    </div>
  );
}