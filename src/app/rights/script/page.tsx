'use client';
import { useState } from 'react';

export default function ScriptGeneratorPage() {
  const [selectedScenario, setSelectedScenario] = useState('');
  const [language, setLanguage] = useState('english');

  const scenarios = {
    door: {
      english: {
        title: "At Your Door",
        phrases: [
          "I do not consent to entry without a warrant.",
          "Please slip the warrant under the door.",
          "I am exercising my right to remain silent.",
          "I wish to speak with my attorney."
        ]
      },
      spanish: {
        title: "En Su Puerta",
        phrases: [
          "No doy consentimiento para entrar sin una orden judicial.",
          "Por favor, pase la orden judicial por debajo de la puerta.",
          "Estoy ejerciendo mi derecho a guardar silencio.",
          "Deseo hablar con mi abogado."
        ]
      }
    },
    street: {
      english: {
        title: "Street Encounter",
        phrases: [
          "Am I free to go?",
          "I am exercising my right to remain silent.",
          "I do not consent to any searches.",
          "I wish to speak with my attorney."
        ]
      },
      spanish: {
        title: "Encuentro en la Calle",
        phrases: [
          "¿Estoy libre para irme?",
          "Estoy ejerciendo mi derecho a guardar silencio.",
          "No doy consentimiento para ningún registro.",
          "Deseo hablar con mi abogado."
        ]
      }
    },
    workplace: {
      english: {
        title: "Workplace",
        phrases: [
          "I wish to remain silent.",
          "I need to speak with my attorney.",
          "I do not consent to any searches of my belongings.",
          "I wish to make a phone call."
        ]
      },
      spanish: {
        title: "Lugar de Trabajo",
        phrases: [
          "Deseo guardar silencio.",
          "Necesito hablar con mi abogado.",
          "No doy consentimiento para registrar mis pertenencias.",
          "Deseo hacer una llamada telefónica."
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Rights Script Generator</h1>
      
      <div className="max-w-2xl mx-auto">
        {/* Language Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="english">English</option>
            <option value="spanish">Español</option>
          </select>
        </div>

        {/* Scenario Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Scenario</label>
          <select
            value={selectedScenario}
            onChange={(e) => setSelectedScenario(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Choose a scenario...</option>
            <option value="door">At Your Door</option>
            <option value="street">Street Encounter</option>
            <option value="workplace">Workplace</option>
          </select>
        </div>

        {/* Phrases Display */}
        {selectedScenario && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {scenarios[selectedScenario][language].title}
            </h2>
            <div className="space-y-4">
              {scenarios[selectedScenario][language].phrases.map((phrase, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-md">
                  <p>{phrase}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 