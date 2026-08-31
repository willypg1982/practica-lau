export type QuestionType = 'multiple-choice' | 'true-false' | 'matching' | 'short-answer';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  explanation: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: { concept: string; definition: string }[];
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
  description?: string;
  inputs: {
    label?: string;
    correctAnswers: string[]; // List of acceptable strings (lowercase for comparison)
  }[];
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | MatchingQuestion | ShortAnswerQuestion;
