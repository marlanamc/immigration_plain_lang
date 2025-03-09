'use client';
import { useState } from 'react';

export default function RightsQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Do you have to open your door if law enforcement knocks?",
      options: [
        "Yes, you must always open the door",
        "No, not unless they have a valid warrant signed by a judge",
        "Only if they say it's important",
        "Only during business hours"
      ],
      correct: 1
    },
    {
      question: "What should you do if an officer asks about your immigration status?",
      options: [
        "Always answer truthfully",
        "Make up a story",
        "You have the right to remain silent",
        "Run away"
      ],
      correct: 2
    },
    {
      question: "Can you record law enforcement in public?",
      options: [
        "Yes, it's your constitutional right",
        "No, it's illegal",
        "Only with their permission",
        "Only inside buildings"
      ],
      correct: 0
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Know Your Rights Quiz</h1>
        
        {!showResults ? (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="mb-6">
              <p className="text-sm text-blue-600 mb-2">Question {currentQuestion + 1} of {questions.length}</p>
              <h2 className="text-xl font-semibold mb-4 text-black">{questions[currentQuestion].question}</h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-3 rounded border text-black hover:bg-blue-50 hover:border-blue-500 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">Quiz Complete!</h2>
            <p className="text-xl mb-6 text-black">Your score: {score} out of {questions.length}</p>
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 