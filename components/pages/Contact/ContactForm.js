'use client';

import React, { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    subject: '',
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || 'Erreur serveur');

    setSubmitMessage('✅ Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.');
    setForm({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    setSubmitMessage(`❌ Erreur : ${error.message}`);
  } finally {
    setIsSubmitting(false);
  }
};


  const subjectOptions = [
    "Question générale",
    "Problème technique / Bug",
    "Demande de fonctionnalité",
    "Problème d'installation signature",
    "Question sur la version Pro",
    "Partenariat / Collaboration",
    "Autre"
  ];

  return (
    <div className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
              Nom complet *
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jean Dupont"
              className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
              Adresse email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jean@exemple.com"
              className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
            Sujet de votre demande *
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all bg-[var(--color-surface)]"
            required
          >
            <option value="">Sélectionnez un sujet...</option>
            {subjectOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
            Votre message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Décrivez votre question ou problème en détail. Plus vous serez précis, plus nous pourrons vous aider efficacement !"
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-all resize-none"
            required
          />
          <div className="text-right text-xs text-[var(--color-muted)] mt-1">
            {form.message.length}/500 caractères
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] px-6 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Envoi en cours...
            </span>
          ) : (
            'Envoyer le message'
          )}
        </button>
      </form>

      {submitMessage && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">{submitMessage}</p>
        </div>
      )}
    </div>
  );
}