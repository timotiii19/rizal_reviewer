import { useEffect, useMemo, useState } from 'react';
import { matchingQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

export default function MatchingType({ shuffle }: { shuffle: boolean }) {
  const leftItems = useMemo(
    () => shuffle ? shuffleItems(matchingQuestions) : matchingQuestions,
    [shuffle],
  );
  
  const rightItems = useMemo(
    () => shuffle ? shuffleItems(matchingQuestions) : matchingQuestions,
    [shuffle],
  );

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);

  useEffect(() => {
    setSelectedLeft(null);
    setMatchedPairs({});
    setWrongPair(null);
  }, [shuffle]);

  const handleLeftClick = (id: string) => {
    if (matchedPairs[id]) return;
    if (selectedLeft === id) {
      setSelectedLeft(null);
    } else {
      setSelectedLeft(id);
      setWrongPair(null);
    }
  };
  
  const handleRightClick = (rightId: string) => {
    if (!selectedLeft) return;

    if (selectedLeft === rightId) {
      setMatchedPairs(prev => ({ ...prev, [selectedLeft]: rightId }));
      setSelectedLeft(null);
      setWrongPair(null);
    } else {
      setWrongPair({ left: selectedLeft, right: rightId });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 600);
    }
  };

  const isComplete = Object.keys(matchedPairs).length === matchingQuestions.length;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Match the Terms</h2>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Matched: {Object.keys(matchedPairs).length} / {matchingQuestions.length}
        </span>
      </div>

      {isComplete && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/40 border border-green-500 text-green-800 dark:text-green-300 rounded-lg text-center font-medium animate-fade-in">
          🎉 Magaling! Matagumpay mong naitugma ang lahat ng mga term at kahulugan!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Terms</h3>
          {leftItems.map(item => {
            const isMatched = !!matchedPairs[item.id];
            const isSelected = selectedLeft === item.id;
            const isWrong = wrongPair?.left === item.id;

            return (
              <button
                key={`l-${item.id}`}
                disabled={isMatched}
                onClick={() => handleLeftClick(item.id)}
                className={`p-4 text-left rounded-lg border transition-all font-medium ${
                  isMatched 
                    ? 'bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300 opacity-60 cursor-not-allowed' :
                  isWrong 
                    ? 'bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300 animate-bounce' :
                  isSelected 
                    ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-500 text-blue-800 dark:text-blue-300 shadow-sm' : 
                    'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200'
                }`}
              >
                {item.left}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Definitions / Answers</h3>
          {rightItems.map(item => {
            const isMatched = Object.values(matchedPairs).includes(item.id);
            const isWrong = wrongPair?.right === item.id;

            return (
              <button
                key={`r-${item.id}`}
                disabled={isMatched || !selectedLeft}
                onClick={() => handleRightClick(item.id)}
                className={`p-4 text-left rounded-lg border transition-all font-medium ${
                  isMatched 
                    ? 'bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300 opacity-60 cursor-not-allowed' :
                  isWrong 
                    ? 'bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300 animate-bounce' :
                  !selectedLeft
                    ? 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 cursor-pointer'
                }`}
              >
                {item.right}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}