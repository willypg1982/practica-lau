import React, { useState } from 'react';
import { MultipleChoiceQuestion } from '../types';
import { Feedback } from './Feedback';
import { cn } from '../lib/utils';

interface Props {
  question: MultipleChoiceQuestion;
  onComplete: (isCorrect: boolean) => void;
  isAnswered: boolean;
}

export function MultipleChoice({ question, onComplete, isAnswered }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    const isCorrect = option === question.correctAnswer;
    onComplete(isCorrect);
  };

  return (
    <div className="flex flex-col gap-3">
      {question.options.map((option, index) => {
        const isSelected = selectedOption === option;
        const isCorrect = option === question.correctAnswer;
        
        let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ";
        
        if (!isAnswered) {
          buttonClass += "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 bg-white text-slate-700";
        } else {
          if (isCorrect) {
            buttonClass += "border-green-500 bg-green-50 text-green-800 font-medium";
          } else if (isSelected) {
            buttonClass += "border-red-500 bg-red-50 text-red-800 font-medium";
          } else {
            buttonClass += "border-slate-200 bg-white text-slate-400 opacity-50";
          }
        }

        return (
          <button
            key={index}
            disabled={isAnswered}
            onClick={() => handleSelect(option)}
            className={buttonClass}
          >
            {option}
          </button>
        );
      })}

      <Feedback 
        isCorrect={isAnswered ? selectedOption === question.correctAnswer : null} 
        explanation={question.explanation} 
      />
    </div>
  );
}
