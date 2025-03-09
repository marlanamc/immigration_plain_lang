import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Privacy Notice Banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">🔒</span>
              <p className="text-green-700 text-sm">
                This site does not collect or share any personal information. You can use it safely and anonymously.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-blue-600">
              Immigration Guide
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/quiz" className="text-gray-800 hover:text-blue-600">
                Find Your Path
              </Link>
              <Link href="/roadmap" className="text-gray-800 hover:text-blue-600">
                Immigration Roadmap
              </Link>
              <Link href="/forms" className="text-gray-800 hover:text-blue-600">
                Form Guides
              </Link>
              <Link href="/rights" className="text-gray-800 hover:text-blue-600">
                Know Your Rights
              </Link>
              <Link href="/resources" className="text-gray-800 hover:text-blue-600">
                Resources
              </Link>
            </div>
            <button className="md:hidden p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
} 