import React from 'react';
import { cn } from '../lib/utils';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeedbackProps {
  isCorrect: boolean | null;
  explanation: string;
}

export function Feedback({ isCorrect, explanation }: FeedbackProps) {
  if (isCorrect === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "mt-6 p-4 rounded-xl flex items-start gap-3",
          isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
        )}
      >
        {isCorrect ? (
          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
        ) : (
          <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
        )}
        <div>
          <h4 className={cn("font-semibold text-lg", isCorrect ? "text-green-800" : "text-red-800")}>
            {isCorrect ? "¡Excelente!" : "Casi lo logras"}
          </h4>
          <p className={cn("mt-1", isCorrect ? "text-green-700" : "text-red-700")}>
            {explanation}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
