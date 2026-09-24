import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { personalConfig } from '../data/config';
import { Mail, Github, Linkedin, MapPin, Clock, ShieldCheck } from 'lucide-react';

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
