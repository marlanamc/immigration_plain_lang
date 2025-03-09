import Link from 'next/link';

export default function RightsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Know Your Rights</h1>
        
        {/* Important Notice Box */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
            <p className="text-blue-700">
              Everyone in the United States has certain basic rights, regardless of immigration status. 
              Understanding these rights helps protect you and your family.
            </p>
          </div>
        </div>

        {/* Key Rights Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">Key Rights to Remember</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-4 text-center">🤐</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-black">Right to Remain Silent</h3>
              <p className="text-gray-800 text-center">
                You have the right to remain silent and are not required to discuss your immigration status.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-4 text-center">📝</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-black">Right to See a Warrant</h3>
              <p className="text-gray-800 text-center">
                You don't have to open your door unless officers have a valid search warrant signed by a judge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-2xl mb-4 text-center">👨‍⚖️</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-black">Right to an Attorney</h3>
              <p className="text-gray-800 text-center">
                You have the right to speak with a lawyer if you are detained.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 text-black">Interactive Tools</h2>
        
        {/* Interactive Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Link href="/rights/quiz" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4 text-center">📋</div>
            <h3 className="text-xl font-semibold mb-3 text-center text-black">Rights Quiz</h3>
            <p className="text-gray-800 text-center">
              Test your knowledge about your constitutional rights.
            </p>
          </Link>

          <Link href="/rights/script" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4 text-center">💬</div>
            <h3 className="text-xl font-semibold mb-3 text-center text-black">Response Scripts</h3>
            <p className="text-gray-800 text-center">
              Get ready-to-use phrases for different situations.
            </p>
          </Link>
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Reminder</h3>
            <p className="text-yellow-700">
              Keep a copy of your important documents in a safe place and share their location with someone you trust.
              Memorize important phone numbers in case you don't have access to your phone.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 