import Link from 'next/link';

type FormGuide = {
  id: string;
  name: string;
  purpose: string;
  fee: string;
  processingTime: string;
  requirements: string[];
  commonMistakes: string[];
  tips: string[];
  uscisLink: string;
};

const formGuides: FormGuide[] = [
  {
    id: 'i-130',
    name: 'Form I-130',
    purpose: 'Petition for Alien Relative',
    fee: '$535',
    processingTime: '6-12 months',
    requirements: [
      'Proof of U.S. citizenship or permanent residence',
      'Evidence of family relationship (birth/marriage certificates)',
      'Passport-style photos',
      'Proof of any legal name changes',
    ],
    commonMistakes: [
      'Forgetting to sign the form',
      'Missing supporting documents',
      'Incorrect filing fee',
      'Not making copies before sending',
    ],
    tips: [
      'Use black ink only',
      'Answer all questions (write "N/A" if not applicable)',
      'Include certified translations for non-English documents',
      'Keep a copy of everything you send',
    ],
    uscisLink: 'https://www.uscis.gov/i-130'
  },
  {
    id: 'i-485',
    name: 'Form I-485',
    purpose: 'Application to Register Permanent Residence',
    fee: '$1,225 (includes biometrics)',
    processingTime: '8-14 months',
    requirements: [
      'Valid passport',
      'Birth certificate',
      'Medical examination (Form I-693)',
      'Affidavit of Support (Form I-864)',
      'Employment authorization documents (if applicable)',
    ],
    commonMistakes: [
      'Filing too early before visa number is available',
      'Incomplete medical exam',
      'Missing signatures',
      'Incorrect fee amount',
    ],
    tips: [
      'Check visa bulletin before filing',
      'Use most recent form version from USCIS website',
      'Include all required supporting documents',
      'Follow photo specifications exactly',
    ],
    uscisLink: 'https://www.uscis.gov/i-485'
  },
];

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Immigration Form Guides
          </h1>
          <p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
            Step-by-step guides to help you complete common immigration forms correctly.
            Each guide includes requirements, common mistakes to avoid, and helpful tips.
          </p>

          <div className="space-y-8">
            {formGuides.map((form) => (
              <div key={form.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-2xl font-bold mb-2 text-black">{form.name}</h2>
                  <p className="text-gray-800">{form.purpose}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Fee: {form.fee}
                    </div>
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      Processing: {form.processingTime}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-black">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {form.requirements.map((req, index) => (
                        <li key={index} className="text-gray-800">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-black">Common Mistakes to Avoid</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {form.commonMistakes.map((mistake, index) => (
                        <li key={index} className="text-gray-800">{mistake}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3 text-black">Helpful Tips</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {form.tips.map((tip, index) => (
                      <li key={index} className="text-gray-800">{tip}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t flex justify-between items-center">
                  <div className="space-x-6">
                    <a 
                      href={form.uscisLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span>Download official form from USCIS</span>
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
                    {form.id === 'i-130' && (
                      <Link
                        href="/forms/i130-status"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <span>Check I-130 Status</span>
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
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">Always use the latest version from USCIS</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Note: Always download the latest version of forms directly from the USCIS website.
            Form fees and requirements may change over time.
          </p>
        </div>
      </div>
    </div>
  );
} 