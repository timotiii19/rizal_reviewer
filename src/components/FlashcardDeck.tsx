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
      <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70">Wala pang mga Flashcards.</p>
      </div>
    );
  }

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
      <div 
        className="w-full h-64 bg-surface rounded-xl shadow-lg flex items-center justify-center p-6 cursor-pointer text-center transition-all border border-gray-200 dark:border-gray-700"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <p className="text-xl font-medium">
          {isFlipped ? question.back : question.front}
        </p>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setIsFlipped(!isFlipped)} className="px-6 py-2 bg-primary text-white rounded-lg">Flip Card</button>
        <button onClick={handleNext} className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">Next Card</button>
      </div>
    </div>
  );
}