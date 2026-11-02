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

  useEffect(() => {
    setSelectedLeft(null);
    setMatchedPairs({});
  }, [shuffle]);
  
  const handleRightClick = (rightId: string) => {
    if (!selectedLeft) return;
    if (selectedLeft === rightId) {
      setMatchedPairs(prev => ({ ...prev, [selectedLeft]: rightId }));
    }
    setSelectedLeft(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">Match the Terms</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          {leftItems.map(item => (
            <button
              key={`l-${item.id}`}
              disabled={!!matchedPairs[item.id]}
              onClick={() => setSelectedLeft(item.id)}
              className={`p-4 text-left rounded-lg border transition-all ${
                matchedPairs[item.id] ? 'bg-green-100 border-green-500 opacity-50 text-black' :
                selectedLeft === item.id ? 'bg-blue-100 border-blue-500 text-black' : 'border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.left}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {rightItems.map(item => (
            <button
              key={`r-${item.id}`}
              disabled={Object.values(matchedPairs).includes(item.id)}
              onClick={() => handleRightClick(item.id)}
              className={`p-4 text-left rounded-lg border transition-all ${
                Object.values(matchedPairs).includes(item.id) ? 'bg-green-100 border-green-500 opacity-50 text-black' : 'border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.right}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}