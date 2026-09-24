import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12 bg-brand-darker text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="TRANSMISSION CHANNEL"
          title="START A CONVERSATION"
          subtitle="Whether you have an enterprise backend requirement, an innovative AI agent idea, or want to discuss engineering opportunities."
          theme="dark"
        />

        <ContactForm />
      </div>
    </div>
  );
}
