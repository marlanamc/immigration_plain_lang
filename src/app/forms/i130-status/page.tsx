'use client';
import { useState } from 'react';
import Link from 'next/link';

type StatusGuide = {
  condition: string;
  action: string;
  link?: string;
  linkText?: string;
};

const statusGuides: StatusGuide[] = [
  {
    condition: "Your Form I-130 is still pending with USCIS",
    action: "Contact the USCIS office listed on your receipt notice or the USCIS Contact Center, or submit a statement of this change along with your relative's updated address to your myUSCIS online account.",
    link: "https://www.uscis.gov/contactcenter",
    linkText: "Contact USCIS"
  },
  {
    condition: "Form I-130 is approved, but your relative needs consular processing",
    action: "File Form I-824, Application for Action on an Approved Application or Petition, to ask USCIS to send your petition to the Department of State (DOS) National Visa Center (NVC) for consular processing.",
    link: "https://www.uscis.gov/i-824",
    linkText: "Form I-824 Information"
  },
  {
    condition: "Form I-130 was approved and forwarded to DOS, but DOS hasn't contacted your relative who is now in the US",
    action: "Contact the USCIS Contact Center. USCIS will request your Form I-130 from DOS.",
    link: "https://www.uscis.gov/contactcenter",
    linkText: "Contact USCIS"
  },
  {
    condition: "Form I-130 was approved, DOS has contacted with a visa case/CEAC shows case at NVC, but relative is now in the US",
    action: "Your relative should contact the NVC via their Public Inquiry Form.",
    link: "https://nvc.state.gov/inquiry",
    linkText: "NVC Contact Form"
  },
  {
    condition: "Form I-130 was approved, DOS scheduled interview/CEAC shows case at embassy, but relative is now in the US",
    action: "Your relative should contact the U.S. embassy or consulate.",
    link: "https://www.usembassy.gov/",
    linkText: "Find US Embassy"
  }
];

export default function I130StatusChecker() {
  const [selectedStatus, setSelectedStatus] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4 text-black">
            Form I-130 Status Checker
          </h1>
          <p className="text-gray-800 text-center mb-8">
            Select the option that best matches your current situation to get guidance on next steps.
          </p>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              {statusGuides.map((guide, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStatus(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedStatus === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <p className="text-black font-medium">{guide.condition}</p>
                </button>
              ))}
            </div>

            {selectedStatus !== null && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h2 className="text-xl font-semibold mb-4 text-black">What You Should Do:</h2>
                <p className="text-gray-800 mb-4">
                  {statusGuides[selectedStatus].action}
                </p>
                {statusGuides[selectedStatus].link && (
                  <a
                    href={statusGuides[selectedStatus].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <span>{statusGuides[selectedStatus].linkText}</span>
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t">
              <Link 
                href="/forms"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                <svg 
                  className="w-4 h-4 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                Back to Form Guides
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Note: This guide is for informational purposes only. Always verify current procedures with USCIS.
          </p>
        </div>
      </div>
    </div>
  );
} 