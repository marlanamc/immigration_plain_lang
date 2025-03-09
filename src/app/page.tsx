import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16">
            <Image
              src="/images/us-flag.png"
              alt="American Flag"
              width={80}
              height={42}
              className="animate-wave shadow-sm"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            U.S. Immigration in Plain Language
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Understanding your immigration options shouldn&apos;t be complicated. 
            We break down the process into simple, clear steps.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/quiz"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Find Your Immigration Path
            </Link>
            <Link 
              href="/resources"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 !text-black">How We Can Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Existing Quiz Card */}
          <Link href="/quiz" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4 text-center">🎯</div>
            <h3 className="text-xl font-semibold mb-3 !text-black">Interactive Immigration Quiz</h3>
            <p className="text-gray-800">
              Answer simple questions to find the best immigration path for your situation.
            </p>
          </Link>

          {/* Existing Roadmap Card */}
          <Link href="/roadmap" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4 text-center">🗺️</div>
            <h3 className="text-xl font-semibold mb-3 !text-black">Visual Immigration Roadmap</h3>
            <p className="text-gray-800">
              See exactly how long each process takes and what steps you need to take.
            </p>
          </Link>

          {/* Existing Forms Card */}
          <Link href="/forms" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4 text-center">📝</div>
            <h3 className="text-xl font-semibold mb-3 !text-black">Form Guides</h3>
            <p className="text-gray-800">
              Step-by-step instructions for filling out immigration forms correctly.
            </p>
          </Link>

          {/* New Know Your Rights Card */}
          <Link href="/rights" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-4 text-center">⚖️</div>
            <h3 className="text-xl font-semibold mb-3 !text-black">Know Your Rights</h3>
            <p className="text-gray-800">
              Learn about your rights and how to protect yourself in different situations.
            </p>
          </Link>
        </div>
      </section>

     
      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take our interactive quiz to find the best immigration path for you.
          </p>
          <Link 
            href="/quiz"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Now
          </Link>
        </div>
      </section>
    </main>
  );
}
