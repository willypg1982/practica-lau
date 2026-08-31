import React, { useState } from 'react';
import { TrueFalseQuestion } from '../types';
import { Feedback } from './Feedback';
import { cn } from '../lib/utils';

interface Props {
  question: TrueFalseQuestion;
  onComplete: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export function TrueFalse({ question, onComplete, isAnswered }: Props) {
  const [selectedValue, setSelectedValue] = useState<boolean | null>(null);

  const handleSelect = (value: boolean) => {
    if (isAnswered) return;
    setSelectedValue(value);
    const isCorrect = value === question.correctAnswer;
    onComplete(isCorrect);
  };

  const options = [
    { label: 'Verdadero', value: true },
    { label: 'Falso', value: false }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          const isCorrect = option.value === question.correctAnswer;
          
          let buttonClass = "w-full text-center p-6 rounded-xl border-2 transition-all duration-200 text-lg font-medium ";
          
          if (!isAnswered) {
            buttonClass += "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 bg-white text-slate-700";
          } else {
            if (isCorrect) {
              buttonClass += "border-green-500 bg-green-50 text-green-800";
            } else if (isSelected) {
              buttonClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass += "border-slate-200 bg-white text-slate-400 opacity-50";
            }
          }

          return (
            <button
              key={option.label}
              disabled={isAnswered}
              onClick={() => handleSelect(option.value)}
              className={buttonClass}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <Feedback 
        isCorrect={isAnswered ? selectedValue === question.correctAnswer : null} 
        explanation={question.explanation} 
      />
    </div>
  );
}
