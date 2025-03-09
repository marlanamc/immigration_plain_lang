import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Immigration Guide
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/quiz" className="text-gray-700 hover:text-gray-900">
              Quiz
            </Link>
            <Link href="/roadmap" className="text-gray-700 hover:text-gray-900">
              Roadmap
            </Link>
            <Link href="/forms" className="text-gray-700 hover:text-gray-900">
              Forms
            </Link>
            <Link href="/rights" className="text-gray-700 hover:text-gray-900">
              Know Your Rights
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 