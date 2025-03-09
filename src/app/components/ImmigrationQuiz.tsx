import { useState } from 'react';

type Question = {
  id: string;
  text: string;
  options: {
    text: string;
    nextQuestion: string | null;
    pathwayResult?: string;
  }[];
};

type Pathway = {
  title: string;
  description: string;
  nextSteps: string[];
  relevantForms: string[];
};

const questions: { [key: string]: Question } = {
  start: {
    id: 'start',
    text: 'Are you currently in the United States?',
    options: [
      { text: 'Yes', nextQuestion: 'status' },
      { text: 'No', nextQuestion: 'outside_us' },
    ],
  },
  status: {
    id: 'status',
    text: 'What is your current immigration status?',
    options: [
      { text: 'Undocumented', nextQuestion: 'undocumented_time' },
      { text: 'Student Visa', nextQuestion: 'student' },
      { text: 'Work Visa', nextQuestion: 'work' },
      { text: 'Tourist/Visitor Visa', nextQuestion: 'visitor' },
      { text: 'Green Card Holder', nextQuestion: 'gc_time' },
    ],
  },
  outside_us: {
    id: 'outside_us',
    text: 'What is your connection to the United States?',
    options: [
      { text: 'I have immediate family who are U.S. citizens', nextQuestion: null, pathwayResult: 'family_based' },
      { text: 'I want to study in the U.S.', nextQuestion: null, pathwayResult: 'student_visa' },
      { text: 'I have a job offer in the U.S.', nextQuestion: null, pathwayResult: 'work_visa' },
      { text: 'I want to visit as a tourist', nextQuestion: null, pathwayResult: 'tourist_visa' },
    ],
  },
  undocumented_time: {
    id: 'undocumented_time',
    text: 'How long have you been in the United States?',
    options: [
      { text: 'Less than 2 years', nextQuestion: null, pathwayResult: 'consult_lawyer' },
      { text: 'More than 2 years', nextQuestion: 'family_us' },
    ],
  },
  family_us: {
    id: 'family_us',
    text: 'Do you have immediate family members who are U.S. citizens?',
    options: [
      { text: 'Yes - Spouse, Parent, or Child over 21', nextQuestion: null, pathwayResult: 'family_based' },
      { text: 'No', nextQuestion: 'asylum_eligible' },
    ],
  },
  asylum_eligible: {
    id: 'asylum_eligible',
    text: 'Are you fleeing persecution in your home country?',
    options: [
      { text: 'Yes', nextQuestion: null, pathwayResult: 'asylum' },
      { text: 'No', nextQuestion: null, pathwayResult: 'consult_lawyer' },
    ],
  },
  student: {
    id: 'student',
    text: 'Are you currently enrolled in a U.S. school?',
    options: [
      { text: 'Yes', nextQuestion: null, pathwayResult: 'maintain_status' },
      { text: 'No, my status has expired', nextQuestion: null, pathwayResult: 'consult_lawyer' },
    ],
  },
  work: {
    id: 'work',
    text: 'Are you currently employed with a valid work visa?',
    options: [
      { text: 'Yes', nextQuestion: null, pathwayResult: 'maintain_status' },
      { text: 'No, my status has expired', nextQuestion: null, pathwayResult: 'consult_lawyer' },
    ],
  },
  visitor: {
    id: 'visitor',
    text: 'Is your visitor visa still valid?',
    options: [
      { text: 'Yes', nextQuestion: null, pathwayResult: 'maintain_status' },
      { text: 'No', nextQuestion: null, pathwayResult: 'consult_lawyer' },
    ],
  },
  gc_time: {
    id: 'gc_time',
    text: 'How long have you had your Green Card?',
    options: [
      { text: 'Less than 3 years, but I\'m married to a U.S. citizen', nextQuestion: null, pathwayResult: 'citizenship_marriage' },
      { text: '5 years or more', nextQuestion: null, pathwayResult: 'citizenship_five' },
      { text: 'Less than required time', nextQuestion: null, pathwayResult: 'maintain_status' },
    ],
  },
};

const pathways: { [key: string]: Pathway } = {
  family_based: {
    title: 'Family-Based Immigration',
    description: 'You may be eligible for a green card through your U.S. citizen family member.',
    nextSteps: [
      'Confirm your relative can sponsor you',
      'File Form I-130 (Petition for Alien Relative)',
      'When approved, file Form I-485 (Adjustment of Status)',
    ],
    relevantForms: ['I-130', 'I-485', 'I-864'],
  },
  asylum: {
    title: 'Asylum',
    description: 'You may be eligible to apply for asylum if you fear persecution in your home country.',
    nextSteps: [
      'File Form I-589 (Application for Asylum)',
      'Gather evidence of persecution',
      'Prepare for asylum interview',
    ],
    relevantForms: ['I-589'],
  },
  consult_lawyer: {
    title: 'Consult an Immigration Lawyer',
    description: 'Your situation may be complex and require professional legal advice.',
    nextSteps: [
      'Find an accredited immigration lawyer',
      'Gather your immigration documents',
      'Schedule a consultation',
    ],
    relevantForms: [],
  },
  maintain_status: {
    title: 'Maintain Your Current Status',
    description: 'Focus on maintaining your current immigration status while exploring long-term options.',
    nextSteps: [
      'Keep your documents up to date',
      'Follow all visa requirements',
      'Plan ahead for renewals',
    ],
    relevantForms: [],
  },
  student_visa: {
    title: 'Student Visa (F-1)',
    description: 'You may be eligible for a student visa to study in the United States.',
    nextSteps: [
      'Get accepted to a U.S. school',
      'Obtain Form I-20 from school',
      'Apply for F-1 visa',
    ],
    relevantForms: ['I-20', 'DS-160'],
  },
  work_visa: {
    title: 'Work Visa',
    description: 'You may be eligible for a work visa based on your job offer.',
    nextSteps: [
      'Employer files petition',
      'Wait for approval',
      'Apply for visa',
    ],
    relevantForms: ['I-129', 'DS-160'],
  },
  tourist_visa: {
    title: 'Tourist Visa (B-1/B-2)',
    description: 'You may be eligible for a tourist visa to visit the United States.',
    nextSteps: [
      'Gather required documents',
      'Complete DS-160 form',
      'Schedule visa interview',
    ],
    relevantForms: ['DS-160'],
  },
  citizenship_marriage: {
    title: 'Citizenship Through Marriage',
    description: 'You may be eligible to apply for citizenship after 3 years as a permanent resident married to a U.S. citizen.',
    nextSteps: [
      'Confirm eligibility requirements',
      'File Form N-400',
      'Prepare for citizenship test',
    ],
    relevantForms: ['N-400'],
  },
  citizenship_five: {
    title: 'Citizenship After 5 Years',
    description: 'You may be eligible to apply for citizenship after 5 years as a permanent resident.',
    nextSteps: [
      'Confirm eligibility requirements',
      'File Form N-400',
      'Prepare for citizenship test',
    ],
    relevantForms: ['N-400'],
  },
};

export default function ImmigrationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState<string>('start');
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (nextQuestion: string | null, pathwayResult?: string) => {
    if (pathwayResult) {
      setResult(pathwayResult);
    } else if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion('start');
    setResult(null);
  };

  if (result) {
    const pathway = pathways[result];
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-black">{pathway.title}</h2>
        <p className="text-gray-800 mb-6">{pathway.description}</p>
        
        <h3 className="font-semibold mb-3 text-black">Next Steps:</h3>
        <ul className="list-disc pl-6 mb-6">
          {pathway.nextSteps.map((step, index) => (
            <li key={index} className="mb-2 text-gray-800">{step}</li>
          ))}
        </ul>

        {pathway.relevantForms.length > 0 && (
          <>
            <h3 className="font-semibold mb-3 text-black">Relevant Forms:</h3>
            <ul className="list-disc pl-6 mb-6">
              {pathway.relevantForms.map((form, index) => (
                <li key={index} className="mb-2 text-gray-800">Form {form}</li>
              ))}
            </ul>
          </>
        )}

        <button
          onClick={resetQuiz}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  
  // Handle case where question is not found
  if (!question) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6 text-black">Error</h2>
        <p className="text-gray-800 mb-6">Sorry, something went wrong. Please try again.</p>
        <button
          onClick={resetQuiz}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-black">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.nextQuestion, option.pathwayResult)}
            className="w-full text-left p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-gray-900"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
} 