import { useEffect, useMemo, useState } from 'react';
import { multipleChoiceQuestions } from '../data/questions';
import { shuffleItems } from '../utils';

interface MultipleChoiceProps {
  activeTopic: string;
  shuffle: boolean;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  onAnswer: (isCorrect: boolean) => void;
}

export default function MultipleChoice({ activeTopic, shuffle, currentIndex, setCurrentIndex, onAnswer }: MultipleChoiceProps) {
  const filteredQuestions = useMemo(() => {
    const questions = activeTopic === "Lahat ng Paksa"
      ? multipleChoiceQuestions
      : multipleChoiceQuestions.filter(q => q.topic === activeTopic);

    return shuffle
      ? shuffleItems(questions).map(question => ({
          ...question,
          options: shuffleItems(question.options),
        }))
      : questions;
  }, [activeTopic, shuffle]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [activeTopic, shuffle]);

  if (filteredQuestions.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-surface p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <p className="text-xl opacity-70">Walang nakitang katanungan para sa paksang "{activeTopic}".</p>
      </div>
    );
  }

  const question = filteredQuestions[currentIndex % filteredQuestions.length];

  const handleSelect = (option: string) => {
    if (selectedAnswer) return; // Prevent multiple clicks
    setSelectedAnswer(option);
    
    const isCorrect = option === question.answer;
    onAnswer(isCorrect); // I-update ang Score at Streak sa App.tsx
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface p-5 md:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{question.question}</h2>
      
      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === question.answer;
          let btnClass = "p-3 text-left rounded-lg border transition-colors ";
          
          if (!selectedAnswer) {
            btnClass += "hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600";
          } else if (isCorrect) {
            btnClass += "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300";
          } else if (isSelected && !isCorrect) {
            btnClass += "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300";
          } else {
            btnClass += "opacity-50 border-gray-300 dark:border-gray-600";
          }

          return (
            <button 
              key={option} 
              disabled={!!selectedAnswer} 
              onClick={() => handleSelect(option)} 
              className={btnClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <div className={`mt-4 p-4 rounded-lg border ${selectedAnswer === question.answer ? 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200' : 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'}`}>
          <p className="font-bold text-lg mb-2">
            {selectedAnswer === question.answer ? "🎉 TAMA!" : `❌ MALI. Ang tamang sagot ay: ${question.answer}`}
          </p>
          {question.explanation && (
            <p className="opacity-90">{question.explanation}</p>
          )}
        </div>
      )}

      {selectedAnswer && (
        <div className="mt-4 flex justify-end">
          <button onClick={handleNext} className="px-6 py-2 bg-primary text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}