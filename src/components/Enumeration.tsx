import { useEffect, useMemo, useState } from 'react';
import { enumerationQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

export default function Enumeration({ shuffle }: { shuffle: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = useMemo(
    () => shuffle ? shuffleItems(enumerationQuestions) : enumerationQuestions,
    [shuffle],
  );
  const question = questions[currentIndex % questions.length];
  const [inputs, setInputs] = useState<string[]>(Array(question?.requiredCount ?? 0).fill(""));
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setInputs(Array(questions[0]?.requiredCount ?? 0).fill(""));
    setIsSubmitted(false);
  }, [shuffle, questions]);

  if (!question) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70">Wala pang mga tanong para sa Enumeration.</p>
      </div>
    );
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % questions.length;
    setCurrentIndex(nextIndex);
    setIsSubmitted(false);
    setInputs(Array(questions[nextIndex].requiredCount).fill(""));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6">{question.question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          {inputs.map((val, idx) => (
            <input
              key={idx}
              type="text"
              value={val}
              onChange={(e) => {
                const newInputs = [...inputs];
                newInputs[idx] = e.target.value;
                setInputs(newInputs);
              }}
              disabled={isSubmitted}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              placeholder={`${idx + 1}.`}
            />
          ))}
        </div>

        {!isSubmitted ? (
          <button type="submit" className="mt-6 w-full py-3 bg-primary text-white rounded-lg">Check Answers</button>
        ) : (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="font-bold mb-2">Accepted Answers:</p>
            <ul className="list-disc pl-5">
              {question.answers.map((ans, i) => <li key={i}>{ans}</li>)}
            </ul>
            <button type="button" onClick={handleNext} className="mt-4 px-6 py-2 bg-primary text-white rounded-lg">Next Question</button>
          </div>
        )}
      </form>
    </div>
  );
}