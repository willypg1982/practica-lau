import React, { useState } from 'react';
import { ShortAnswerQuestion } from '../types';
import { Feedback } from './Feedback';
import { cn } from '../lib/utils';
import { Send } from 'lucide-react';

interface Props {
  question: ShortAnswerQuestion;
  onComplete: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export function ShortAnswer({ question, onComplete, isAnswered }: Props) {
  const [answers, setAnswers] = useState<string[]>(Array(question.inputs.length).fill(''));
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;

    const allCorrect = answers.every((answer, index) => {
      const normalizedAnswer = answer.trim().toLowerCase();
      const validAnswers = question.inputs[index].correctAnswers.map(a => a.toLowerCase());
      return validAnswers.includes(normalizedAnswer);
    });

    setIsCorrect(allCorrect);
    onComplete(allCorrect);
  };

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {question.description && (
        <p className="text-slate-600 text-sm mb-2">{question.description}</p>
      )}
      
      <div className="flex flex-col gap-4">
        {question.inputs.map((input, index) => {
          let inputClass = "w-full p-4 rounded-xl border-2 outline-none transition-all duration-200 text-lg ";
          
          if (!isAnswered) {
            inputClass += "border-slate-200 focus:border-indigo-500 bg-white text-slate-800";
          } else {
            const isThisCorrect = input.correctAnswers.map(a => a.toLowerCase()).includes(answers[index].trim().toLowerCase());
            if (isThisCorrect) {
              inputClass += "border-green-500 bg-green-50 text-green-800";
            } else {
              inputClass += "border-red-500 bg-red-50 text-red-800";
            }
          }

          return (
            <div key={index} className="flex flex-col gap-1">
              {input.label && (
                <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider pl-1">
                  {input.label}
                </label>
              )}
              <input
                type="text"
                disabled={isAnswered}
                value={answers[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder="Escribe tu respuesta..."
                className={inputClass}
              />
              {isAnswered && !input.correctAnswers.map(a => a.toLowerCase()).includes(answers[index].trim().toLowerCase()) && (
                <p className="text-sm text-red-600 pl-1">
                  Respuesta esperada: {input.correctAnswers[0]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {!isAnswered && (
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full p-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          <span>Revisar respuesta</span>
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
