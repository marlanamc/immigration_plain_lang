import Link from 'next/link';

type TimelineItem = {
  title: string;
  duration: string;
  description: string;
  requirements: string[];
};

type PathwayTimeline = {
  title: string;
  description: string;
  steps: TimelineItem[];
};

const pathways: PathwayTimeline[] = [
  {
    title: 'Family-Based Green Card',
    description: 'For immediate relatives of U.S. citizens (spouse, parent, or unmarried child under 21)',
    steps: [
      {
        title: 'File I-130 Petition',
        duration: '6-12 months',
        description: 'Your U.S. citizen family member files a petition to establish your relationship.',
        requirements: [
          'Proof of U.S. citizenship',
          'Evidence of family relationship',
          'Filing fee of $535',
        ],
      },
      {
        title: 'File I-485 Adjustment of Status',
        duration: '8-14 months',
        description: 'Apply to become a permanent resident if you\'re already in the U.S.',
        requirements: [
          'Medical examination',
          'Affidavit of support',
          'Filing fee of $1,225',
        ],
      },
      {
        title: 'Biometrics and Interview',
        duration: '2-4 months',
        description: 'Attend biometrics appointment and green card interview.',
        requirements: [
          'Valid government ID',
          'Original documents',
          'Interview preparation',
        ],
      },
    ],
  },
  {
    title: 'Naturalization to U.S. Citizenship',
    description: 'For green card holders who meet residency and other requirements',
    steps: [
      {
        title: 'Meet Eligibility Requirements',
        duration: '3-5 years',
        description: 'Maintain continuous residence as a green card holder.',
        requirements: [
          '5 years with green card (3 years if married to U.S. citizen)',
          'Physical presence for half of that time',
          'Good moral character',
        ],
      },
      {
        title: 'File N-400 Application',
        duration: '12-18 months',
        description: 'Submit naturalization application and required documents.',
        requirements: [
          'Complete application form',
          'Tax returns for last 5 years',
          'Filing fee of $725',
        ],
      },
      {
        title: 'Citizenship Test and Interview',
        duration: '1-2 months',
        description: 'Pass English and civics tests, complete naturalization interview.',
        requirements: [
          'Study 100 civics questions',
          'English language proficiency',
          'Interview preparation',
        ],
      },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Immigration Roadmap
          </h1>
          <p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
            Understand the timeline and requirements for different immigration pathways.
            Select a pathway below to see detailed steps and estimated processing times.
          </p>

          <div className="space-y-12">
            {pathways.map((pathway, pathwayIndex) => (
              <div key={pathwayIndex} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-2 text-black">{pathway.title}</h2>
                <p className="text-gray-800 mb-6">{pathway.description}</p>

                <div className="space-y-8">
                  {pathway.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="relative pl-8">
                      {/* Timeline connector */}
                      {stepIndex < pathway.steps.length - 1 && (
                        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-blue-200"></div>
                      )}
                      
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 w-6 h-6 bg-blue-500 rounded-full"></div>

                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-black">
                          {step.title}
                          <span className="text-blue-600 text-base font-normal ml-2">
                            ({step.duration})
                          </span>
                        </h3>
                        <p className="text-gray-800 mb-4">{step.description}</p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-black">Requirements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {step.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="text-gray-800">{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/quiz" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Your Path
            </Link>
          </div>

          <p className="text-sm text-gray-700 text-center mt-8">
            Note: Processing times are estimates and may vary based on your specific case and USCIS workload.
            For the most current processing times, visit the USCIS website.
          </p>
        </div>
      </div>
    </div>
  );
} 