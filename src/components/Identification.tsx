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
      <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70">Wala pang mga tanong para sa Identification.</p>
      </div>
    );
  }

  const isCorrect = input.toLowerCase().trim() === question.answer.toLowerCase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setInput("");
    setIsSubmitted(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSubmitted}
          placeholder="Type your answer here..."
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
        />
        {!isSubmitted ? (
          <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-medium">Submit Answer</button>
        ) : (
          <div className={`p-4 rounded-lg font-medium ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${question.answer}`}
          </div>
        )}
      </form>
      {isSubmitted && (
        <button onClick={handleNext} className="mt-6 px-6 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg float-right">Next Question</button>
      )}
    </div>
  );
}