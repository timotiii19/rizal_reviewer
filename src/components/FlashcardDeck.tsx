import { useEffect, useMemo, useState } from 'react';
import { flashcardQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

export default function FlashcardDeck({ shuffle }: { shuffle: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const questions = useMemo(
    () => shuffle ? shuffleItems(flashcardQuestions) : flashcardQuestions,
    [shuffle],
  );
  const question = questions[currentIndex % questions.length];

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [shuffle]);

  if (!question) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70 text-gray-700 dark:text-gray-300">Wala pang mga Flashcards.</p>
      </div>
    );
  }

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      <div className="w-full flex justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 px-1">
        <span>Card {currentIndex + 1} of {questions.length}</span>
        <span>{isFlipped ? "Likod (Sagot)" : "Harap (Tanong)"}</span>
      </div>

      <div 
        className="w-full h-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-6 cursor-pointer text-center transition-all border border-gray-200 dark:border-gray-700 hover:shadow-xl"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <p className="text-xl font-medium text-gray-900 dark:text-white leading-relaxed">
          {isFlipped ? question.back : question.front}
        </p>
      </div>
      
      <div className="flex gap-4 w-full">
        <button 
          onClick={() => setIsFlipped(!isFlipped)} 
          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors"
        >
          {isFlipped ? "Ibalik sa Harap" : "I-flip ang Card"}
        </button>
        <button 
          onClick={handleNext} 
          className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors"
        >
          Sunod →
        </button>
      </div>
    </div>
  );
}