import React from 'react';
import { getInstructions } from './getInstructions';

export default function Instructions({ emailClient }) {
  const data = getInstructions(emailClient);
  
  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-foreground)] p-4 rounded-xl shadow-sm border border-[var(--color-border)] text-sm leading-relaxed">
      <h3 className="font-semibold mb-3 text-[var(--color-foreground)] text-center">
        {data.title}
      </h3>
      <ul className="space-y-3 text-[var(--color-muted)] text-sm">
        {data.steps.map((step, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[var(--color-accent)] flex-shrink-0">✔</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}