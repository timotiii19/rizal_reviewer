import { useEffect, useMemo, useState } from 'react';
import { identificationQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

export default function Identification({ shuffle }: { shuffle: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const questions = useMemo(
    () => shuffle ? shuffleItems(identificationQuestions) : identificationQuestions,
    [shuffle],
  );

  useEffect(() => {
    setCurrentIndex(0);
    setInput("");
    setIsSubmitted(false);
  }, [shuffle]);

  const question = questions[currentIndex % questions.length];
  if (!question) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70 text-gray-700 dark:text-gray-300">Wala pang mga tanong para sa Identification.</p>
      </div>
    );
  }

  const isCorrect = input.toLowerCase().trim() === question.answer.toLowerCase().trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setInput("");
    setIsSubmitted(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Tanong {currentIndex + 1} ng {questions.length}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSubmitted}
          placeholder="I-type ang iyong sagot dito..."
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {!isSubmitted ? (
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow transition-colors"
          >
            I-submit ang Sagot
          </button>
        ) : (
          <div className={`p-4 rounded-lg font-medium border ${isCorrect ? 'bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300'}`}>
            {isCorrect ? "✓ Tama! Magaling!" : `✕ Mali. Ang tamang sagot ay: ${question.answer}`}
          </div>
        )}
      </form>

      {isSubmitted && (
        <button 
          onClick={handleNext} 
          className="mt-6 px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg float-right transition-colors"
        >
          Sunod na Tanong →
        </button>
      )}
    </div>
  );
}