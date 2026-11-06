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
      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70 text-gray-700 dark:text-gray-300">Wala pang mga tanong para sa Enumeration.</p>
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

  // Grade user inputs against expected answers (case-insensitive fuzzy/exact match check)
  const normalizedAnswers = question.answers.map(a => a.toLowerCase().trim());
  const correctCount = inputs.filter(val => {
    const cleanVal = val.toLowerCase().trim();
    return cleanVal.length > 0 && normalizedAnswers.includes(cleanVal);
  }).length;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
          Magbigay ng {question.requiredCount} sagot
        </span>
      </div>

      <h2 className="text-xl font-bold mb-6">{question.question}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          {inputs.map((val, idx) => {
            const cleanVal = val.toLowerCase().trim();
            const isItemCorrect = isSubmitted && cleanVal.length > 0 && normalizedAnswers.includes(cleanVal);
            
            return (
              <div key={idx} className="relative flex items-center">
                <span className="absolute left-3 text-sm font-semibold text-gray-400">{idx + 1}.</span>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => {
                    const newInputs = [...inputs];
                    newInputs[idx] = e.target.value;
                    setInputs(newInputs);
                  }}
                  disabled={isSubmitted}
                  className={`w-full p-3 pl-8 rounded-lg border bg-transparent transition-colors ${
                    isSubmitted
                      ? isItemCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-200'
                        : 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-200'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
                  }`}
                  placeholder={`Ilagay ang sagot bilang ${idx + 1}...`}
                />
              </div>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button 
            type="submit" 
            className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow"
          >
            Check Answers
          </button>
        ) : (
          <div className="mt-6 p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <p className="font-bold text-base">
                Result: <span className={correctCount === question.requiredCount ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}>{correctCount} / {question.requiredCount} Tama</span>
              </p>
            </div>
            
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">Mga Wastong Sagot:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-200">
              {question.answers.map((ans, i) => <li key={i}>{ans}</li>)}
            </ul>

            <button 
              type="button" 
              onClick={handleNext} 
              className="mt-5 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Sunod na Tanong →
            </button>
          </div>
        )}
      </form>
    </div>
  );
}