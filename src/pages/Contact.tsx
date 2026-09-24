import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="w-full pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="TRANSMISSION CHANNEL"
          title="START A CONVERSATION"
          subtitle="Whether you have an enterprise backend requirement, an innovative AI agent idea, or want to discuss engineering opportunities."
        />

        <ContactForm />
      </div>
    </div>
  );
}
