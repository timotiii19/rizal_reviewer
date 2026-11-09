import { useState, useEffect, useMemo } from 'react';
import MultipleChoice from './components/MultipleChoice';
import FlashcardDeck from './components/FlashcardDeck';
import Identification from './components/Identification';
import Enumeration from './components/Enumeration';
import MatchingType from './components/MatchingType';
import Recitation from './components/Recitation';
import { 
  multipleChoiceQuestions, 
  identificationQuestions, 
  flashcardQuestions, 
  matchingQuestions, 
  enumerationQuestions, 
  recitationQuestions, 
  Topic 
} from './data/questions';

type Tab = 'identification' | 'multiple-choice' | 'matching' | 'enumeration' | 'flashcards' | 'recitation';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('multiple-choice');
  const [activeTopic, setActiveTopic] = useState<Topic | "Lahat ng Paksa">('Lahat ng Paksa');
  const [shuffle, setShuffle] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const availableTopics = useMemo(() => {
    const topicsSet = new Set<string>();
    multipleChoiceQuestions.forEach(q => topicsSet.add(q.topic));
    return ["Lahat ng Paksa", ...Array.from(topicsSet)] as string[];
  }, []);

  const currentTotalQuestions = useMemo(() => {
    switch (activeTab) {
      case 'multiple-choice':
        return activeTopic === "Lahat ng Paksa" 
          ? multipleChoiceQuestions.length 
          : multipleChoiceQuestions.filter(q => q.topic === activeTopic).length;
      case 'identification':
        return identificationQuestions.length;
      case 'matching':
        return matchingQuestions.length;
      case 'enumeration':
        return enumerationQuestions.length;
      case 'flashcards':
        return flashcardQuestions.length;
      case 'recitation':
        return recitationQuestions.length;
      default:
        return 0;
    }
  }, [activeTab, activeTopic]);

  const scorePercentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setTotalAnswered(0);
  }, [activeTopic, activeTab, shuffle]);

  const handleAnswer = (isCorrect: boolean) => {
    setTotalAnswered(prev => prev + 1);
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleQuizComplete = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setTotalAnswered(0);
  };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'identification', label: 'Identification', icon: '✏️' },
    { id: 'multiple-choice', label: 'Multiple Choice', icon: '🔘' },
    { id: 'matching', label: 'Matching Type', icon: '🔗' },
    { id: 'enumeration', label: 'Enumeration', icon: '📋' },
    { id: 'flashcards', label: 'Flashcards', icon: '🃏' },
    { id: 'recitation', label: 'Recitation', icon: '🗣️' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'multiple-choice': 
        return (
          <MultipleChoice 
            activeTopic={activeTopic}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            onAnswer={handleAnswer}
            onComplete={handleQuizComplete}
            shuffle={shuffle}
          />
        );
      case 'identification': return <Identification shuffle={shuffle} />;
      case 'matching': return <MatchingType shuffle={shuffle} />;
      case 'enumeration': return <Enumeration shuffle={shuffle} />;
      case 'flashcards': return <FlashcardDeck shuffle={shuffle} />;
      case 'recitation': return <Recitation shuffle={shuffle} />;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 text-text bg-background font-sans">
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-surface p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        
        <div className="flex items-center gap-2">
          <label className="font-bold text-gray-600 dark:text-gray-300">Paksa / Yunit:</label>
          <select 
            value={activeTopic}
            onChange={(e) => setActiveTopic(e.target.value as Topic)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 outline-none focus:ring-2 focus:ring-primary max-w-xs truncate"
          >
            {availableTopics.map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4 font-medium">
          <button 
            onClick={() => setShuffle(enabled => !enabled)}
            aria-pressed={shuffle}
            className={`px-3 py-1 rounded-lg transition-colors ${shuffle ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'}`}
          >
            🔀 Shuffle Questions: {shuffle ? 'Bukas' : 'Sarado'}
          </button>
        </div>
      </div>

      <div className={`max-w-5xl mx-auto grid grid-cols-1 ${activeTab === 'enumeration' ? '' : 'md:grid-cols-3'} gap-4 mb-8`}>
        <div className="bg-surface p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex justify-center items-center text-lg font-bold">
          Tanong {currentTotalQuestions > 0 ? currentIndex + 1 : 0} ng {currentTotalQuestions}
        </div>
        {activeTab !== 'enumeration' && (
          <>
            <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 p-4 rounded-xl shadow-sm border border-orange-200 dark:border-orange-800 flex justify-center items-center text-lg font-bold transition-all">
              🔥 Streak: {streak}
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-800 flex justify-center items-center text-lg font-bold transition-all">
              Puntos: {score} / {totalAnswered} ({scorePercentage}%)
            </div>
          </>
        )}
      </div>

      <nav className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-white shadow-md scale-105'
                : 'bg-surface border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="pb-20">
        {renderContent()}
      </main>

    </div>
  );
}