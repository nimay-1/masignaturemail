import React, { useState } from 'react';

function ChevronIcon({ isOpen, className }) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function FAQItem({ question, answer, isOpen = false }) {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex justify-between items-center group focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50 rounded-lg"
        aria-expanded={expanded}
      >
        <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors pr-4">
          {question}
        </h3>
        <ChevronIcon 
          isOpen={expanded}
          className={`w-5 h-5 flex-shrink-0 transition-colors ${
            expanded ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)] group-hover:text-[var(--color-accent)]'
          }`}
        />
      </button>
      {expanded && (
        <div className="px-6 pb-6 pt-0">
          <div className="text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}