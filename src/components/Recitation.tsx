import { useEffect, useMemo, useState } from 'react';
import { recitationQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

export default function Recitation({ shuffle }: { shuffle: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const questions = useMemo(
    () => shuffle ? shuffleItems(recitationQuestions) : recitationQuestions,
    [shuffle],
  );
  const question = questions[currentIndex % questions.length];

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [shuffle]);

  if (!question) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70 text-gray-700 dark:text-gray-300">Wala pang mga tanong para sa Recitation.</p>
      </div>
    );
  }

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Recitation Prompt {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-8 leading-snug">{question.question}</h2>
      
      {!showAnswer ? (
        <button 
          onClick={() => setShowAnswer(true)} 
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow transition-colors"
        >
          I-reveal ang mga Key Points
        </button>
      ) : (
        <div className="text-left bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
          <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">Gabay na Key Points:</h3>
          <ul className="list-disc pl-6 flex flex-col gap-2.5 text-gray-700 dark:text-gray-300">
            {question.keyPoints.map((point, idx) => (
              <li key={idx} className="leading-relaxed">{point}</li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <button 
              onClick={handleNext} 
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors"
            >
              Sunod na Prompt →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}