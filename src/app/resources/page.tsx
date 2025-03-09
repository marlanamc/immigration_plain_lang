type Resource = {
  title: string;
  description: string;
  link: string;
  category: 'Legal Help' | 'Community Organizations' | 'Government Resources' | 'Educational Resources';
};

const resources: Resource[] = [
  {
    title: 'USCIS - Find Legal Help',
    description: 'Official USCIS page to find authorized immigration attorneys and accredited representatives.',
    link: 'https://www.uscis.gov/avoid-scams/find-legal-services',
    category: 'Legal Help',
  },
  {
    title: 'American Immigration Lawyers Association (AILA)',
    description: 'Find qualified immigration attorneys near you.',
    link: 'https://www.ailalawyer.com/',
    category: 'Legal Help',
  },
  {
    title: 'Immigration Advocates Network',
    description: 'National directory of free or low-cost immigration legal services providers.',
    link: 'https://www.immigrationadvocates.org/nonprofit/legaldirectory/',
    category: 'Legal Help',
  },
  {
    title: 'Catholic Charities Immigration Services',
    description: 'Provides low-cost immigration legal services and support across the U.S.',
    link: 'https://www.catholiccharitiesusa.org/our-ministry/immigration-refugee-services/',
    category: 'Community Organizations',
  },
  {
    title: 'National Immigration Forum',
    description: 'Advocacy organization providing resources and information for immigrants.',
    link: 'https://immigrationforum.org/article/resources-for-immigrants/',
    category: 'Community Organizations',
  },
  {
    title: 'USCIS Processing Times',
    description: 'Check current processing times for your immigration applications.',
    link: 'https://egov.uscis.gov/processing-times/',
    category: 'Government Resources',
  },
  {
    title: 'USCIS Case Status Online',
    description: 'Check the status of your pending immigration case.',
    link: 'https://egov.uscis.gov/casestatus/landing.do',
    category: 'Government Resources',
  },
  {
    title: 'USA.gov Immigration and Citizenship',
    description: 'Official government information about immigration and citizenship.',
    link: 'https://www.usa.gov/immigration-and-citizenship',
    category: 'Government Resources',
  },
  {
    title: 'Immigrant Learning Center',
    description: 'Free educational resources and English classes for immigrants.',
    link: 'https://www.ilctr.org/',
    category: 'Educational Resources',
  },
  {
    title: 'U.S. Citizenship Test Study Materials',
    description: 'Official study materials for the naturalization test.',
    link: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources',
    category: 'Educational Resources',
  },
];

export default function ResourcesPage() {
  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as { [key: string]: Resource[] });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Immigration Resources
          </h1>
          <p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
            Find trusted organizations, legal help, and educational resources to support your immigration journey.
          </p>

          <div className="space-y-8">
            {Object.entries(groupedResources).map(([category, categoryResources]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6 text-black">{category}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {categoryResources.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-blue-600">
                        {resource.title}
                      </h3>
                      <p className="text-gray-800">
                        {resource.description}
                      </p>
                      <div className="mt-4 flex items-center text-blue-600">
                        <span className="text-sm">Learn more</span>
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
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Need Immediate Assistance?</h2>
            <p className="text-gray-800 mb-4">
              If you need immediate immigration legal help, contact these trusted organizations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>USCIS Contact Center: 1-800-375-5283</li>
              <li>Immigration Court Helpdesk: 1-800-898-7180</li>
              <li>Department of Justice Recognition & Accreditation Program: 
                <a 
                  href="https://www.justice.gov/eoir/recognition-and-accreditation-program" 
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Accredited Representatives
                </a>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 text-center mt-8">
            Note: This list is not exhaustive. Resources and contact information may change over time.
            Always verify the credentials of any organization or individual offering immigration assistance.
          </p>
        </div>
      </div>
    </div>
  );
} 