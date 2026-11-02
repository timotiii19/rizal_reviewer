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
      <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70">Wala pang mga tanong para sa Recitation.</p>
      </div>
    );
  }

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
      <h2 className="text-2xl font-bold mb-8">{question.question}</h2>
      
      {!showAnswer ? (
        <button onClick={() => setShowAnswer(true)} className="px-8 py-4 bg-primary text-white rounded-lg font-bold">
          Reveal Key Points
        </button>
      ) : (
        <div className="text-left bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-bold mb-4">Key Points:</h3>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            {question.keyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <button onClick={handleNext} className="px-6 py-2 bg-primary text-white rounded-lg">Next Prompt</button>
          </div>
        </div>
      )}
    </div>
  );
}