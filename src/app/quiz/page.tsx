'use client';

import ImmigrationQuiz from '../components/ImmigrationQuiz';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Immigration Quiz</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-800 text-center mb-8 max-w-2xl mx-auto">
            Answer a few simple questions to discover your potential immigration options. 
            This tool will guide you to the most relevant information for your situation.
          </p>
          <div className="bg-white rounded-lg shadow-sm">
            <ImmigrationQuiz />
          </div>
          <p className="text-sm text-gray-700 text-center mt-8">
            Note: This quiz is for informational purposes only and does not constitute legal advice. 
            Please consult with a qualified immigration attorney for legal guidance.
          </p>
        </div>
      </div>
    </main>
  );
} 