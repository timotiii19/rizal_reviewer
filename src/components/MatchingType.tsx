import { useEffect, useMemo, useState } from 'react';
import { matchingQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

export default function MatchingType({ shuffle }: { shuffle: boolean }) {
  const topics = useMemo(
    () => Array.from(new Set(matchingQuestions.map(question => question.topic))),
    [],
  );
  const [activeTopic, setActiveTopic] = useState(topics[0] ?? "");
  const [batchIndex, setBatchIndex] = useState(0);
  const topicQuestions = useMemo(() => {
    const questions = matchingQuestions.filter(question => question.topic === activeTopic);
    return shuffle ? shuffleItems(questions) : questions;
  }, [activeTopic, shuffle]);
  const batchSize = 10;
  const batchQuestions = useMemo(
    () => topicQuestions.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize),
    [batchIndex, topicQuestions],
  );
  const leftItems = batchQuestions;
  const rightItems = useMemo(() => shuffleItems(batchQuestions), [batchQuestions]);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);

  useEffect(() => {
    setBatchIndex(0);
    setSelectedLeft(null);
    setMatchedPairs({});
    setWrongPair(null);
  }, [activeTopic, shuffle]);

  const handleBatchChange = (nextBatchIndex: number) => {
    setBatchIndex(nextBatchIndex);
    setSelectedLeft(null);
    setMatchedPairs({});
    setWrongPair(null);
  };

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

  const isComplete = Object.keys(matchedPairs).length === batchQuestions.length;
  const batchCount = Math.ceil(topicQuestions.length / batchSize);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Match the Terms</h2>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Matched: {Object.keys(matchedPairs).length} / {batchQuestions.length}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
          Paksa / Yunit:
          <select
            value={activeTopic}
            onChange={event => setActiveTopic(event.target.value as typeof activeTopic)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
          >
            {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
          </select>
        </label>
        {batchCount > 1 && (
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => handleBatchChange(batchIndex - 1)}
              disabled={batchIndex === 0}
              className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            >
              Naunang set
            </button>
            <span className="pb-2 text-sm text-gray-600 dark:text-gray-300">
              Set {batchIndex + 1} ng {batchCount}
            </span>
            <button
              type="button"
              onClick={() => handleBatchChange(batchIndex + 1)}
              disabled={batchIndex >= batchCount - 1}
              className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
            >
              Susunod na set
            </button>
          </div>
        )}
      </div>

      {isComplete && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/40 border border-green-500 text-green-800 dark:text-green-300 rounded-lg text-center font-medium animate-fade-in">
          🎉 Magaling! Matagumpay mong naitugma ang lahat ng mga term at kahulugan!
        </div>
      )}

      {batchQuestions.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Walang matching questions para sa paksang ito.</p>
      ) : <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>}
    </div>
  );
}