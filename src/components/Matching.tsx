import React, { useState, useEffect } from 'react';
import { MatchingQuestion } from '../types';
import { Feedback } from './Feedback';
import { Send } from 'lucide-react';

interface Props {
  question: MatchingQuestion;
  onComplete: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export function Matching({ question, onComplete, isAnswered }: Props) {
  // Randomize definitions for the dropdowns
  const [shuffledDefinitions, setShuffledDefinitions] = useState<string[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const defs = question.pairs.map(p => p.definition);
    // Fisher-Yates shuffle
    for (let i = defs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [defs[i], defs[j]] = [defs[j], defs[i]];
    }
    setShuffledDefinitions(defs);
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;

    // Check if all are answered
    if (Object.keys(selectedAnswers).length < question.pairs.length) {
      alert("Por favor, selecciona una definición para cada concepto.");
      return;
    }

    const allCorrect = question.pairs.every(
      (pair, index) => selectedAnswers[index] === pair.definition
    );

    setIsCorrect(allCorrect);
    onComplete(allCorrect);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {question.pairs.map((pair, index) => {
          let selectClass = "w-full p-3 rounded-xl border-2 outline-none transition-all duration-200 text-sm ";
          
          if (!isAnswered) {
            selectClass += "border-slate-200 focus:border-indigo-500 bg-white text-slate-800";
          } else {
            const isThisCorrect = selectedAnswers[index] === pair.definition;
            if (isThisCorrect) {
              selectClass += "border-green-500 bg-green-50 text-green-800";
            } else {
              selectClass += "border-red-500 bg-red-50 text-red-800";
            }
          }

          return (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="md:w-1/3 font-semibold text-slate-700">
                {pair.concept}
              </div>
              <div className="md:w-2/3 flex flex-col gap-1">
                <select
                  disabled={isAnswered}
                  value={selectedAnswers[index] || ""}
                  onChange={(e) => setSelectedAnswers(prev => ({ ...prev, [index]: e.target.value }))}
                  className={selectClass}
                >
                  <option value="" disabled>Selecciona la definición...</option>
                  {shuffledDefinitions.map((def, i) => (
                    <option key={i} value={def}>{def}</option>
                  ))}
                </select>
                {isAnswered && selectedAnswers[index] !== pair.definition && (
                  <p className="text-xs text-red-600 pl-1 mt-1">
                    Correcto: {pair.definition}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!isAnswered && (
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full p-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          <span>Revisar respuestas</span>
          <Send className="w-5 h-5" />
        </button>
      )}

      <Feedback 
        isCorrect={isCorrect} 
        explanation={question.explanation} 
      />
    </form>
  );
}
