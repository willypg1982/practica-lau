import React, { useState } from 'react';
import { questions } from './data';
import { MultipleChoice } from './components/MultipleChoice';
import { TrueFalse } from './components/TrueFalse';
import { ShortAnswer } from './components/ShortAnswer';
import { Matching } from './components/Matching';
import { Award, ChevronRight, Play, RotateCcw, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { MultipleChoiceQuestion, TrueFalseQuestion, ShortAnswerQuestion, MatchingQuestion } from './types';

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentIndex];

  const handleComplete = (isCorrect: boolean) => {
    setIsAnswered(true);
    if (isCorrect) {
      setScore(s => s + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#10b981', '#f59e0b']
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6']
      });
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoice 
            question={question as MultipleChoiceQuestion} 
            onComplete={handleComplete} 
            isAnswered={isAnswered} 
          />
        );
      case 'true-false':
        return (
          <TrueFalse 
            question={question as TrueFalseQuestion} 
            onComplete={handleComplete} 
            isAnswered={isAnswered} 
          />
        );
      case 'short-answer':
        return (
          <ShortAnswer 
            question={question as ShortAnswerQuestion} 
            onComplete={handleComplete} 
            isAnswered={isAnswered} 
          />
        );
      case 'matching':
        return (
          <Matching 
            question={question as MatchingQuestion} 
            onComplete={handleComplete} 
            isAnswered={isAnswered} 
          />
        );
      default:
        return null;
    }
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-8 text-center border border-slate-100">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Repaso Estudios Sociales</h1>
          <p className="text-slate-600 mb-8 text-lg">
            Tema: Relieve, regiones e historia regional de Costa Rica (Zona de Los Santos).
          </p>
          <button
            onClick={() => setStarted(true)}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
          >
            <span>Comenzar Repaso</span>
            <Play className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-8 text-center border border-slate-100">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-12 h-12 text-amber-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">¡Completado!</h1>
          <p className="text-slate-500 mb-8">Has terminado el repaso interactivo.</p>
          
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
            <div className="text-5xl font-black text-indigo-600 mb-2">
              {score} <span className="text-2xl text-slate-400">/ {questions.length}</span>
            </div>
            <div className="text-slate-600 font-medium">Puntos obtenidos</div>
          </div>

          <button
            onClick={handleRestart}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white p-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Volver a intentar</span>
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 md:py-12">
      <div className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-indigo-700">{currentIndex + 1}</span>
            </div>
            <div className="text-sm font-semibold text-slate-500">
              de {questions.length} preguntas
            </div>
          </div>
          <div className="flex items-center gap-2 font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-xl">
            <Award className="w-5 h-5" />
            <span>{score} pts</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-200 rounded-full mb-8 overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-500"
            initial={{ width: `${((currentIndex - 1) / questions.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-tight">
              {question.question}
            </h2>

            {renderQuestionContent()}

            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 flex justify-end"
              >
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <span>{currentIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente pregunta'}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
