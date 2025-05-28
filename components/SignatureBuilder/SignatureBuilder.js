'use client';
import React, { useState, useEffect } from 'react';
import SignatureForm from './SignatureForm';
import SignaturePreview from './SignaturePreview';
import CopyButton from './CopyButton';
import Instructions from './Instructions';
import { generateSignatureHTML } from './generateSignatureHTML';

export default function SignatureBuilder() {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    photoUrl: '',
    primaryColor: '#1F2B45',
    iconStyle: 'emoji',
    fontSize: '14',
    emailClient: 'gmail',
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: '',
    template: 'modern'
  });
  
  const [signatureHtml, setSignatureHtml] = useState('');
  
  useEffect(() => {
    setSignatureHtml(generateSignatureHTML(formData));
  }, [formData]);
  
  return (
    <div 
      className="min-h-screen bg-[var(--color-background)] p-6"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-2">
            🎯 Générateur de signature email
          </h1>
          <p className="text-[var(--color-muted)]">
            Créez une signature professionnelle en quelques clics
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SignatureForm formData={formData} setFormData={setFormData} />
          <div className="space-y-4">
            <SignaturePreview signatureHtml={signatureHtml} />
            <Instructions emailClient={formData.emailClient} />
          </div>
        </div>
      </div>
    </div>
  );
}