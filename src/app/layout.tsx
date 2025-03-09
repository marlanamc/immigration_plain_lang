import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immigration Plain Language Guide",
  description: "Simple explanations of immigration processes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-black">About Us</h3>
                <p className="text-gray-800">
                  Making U.S. immigration information accessible and understandable for everyone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-black">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/quiz" className="text-gray-800 hover:text-blue-600">
                      Immigration Quiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/forms" className="text-gray-800 hover:text-blue-600">
                      Form Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-gray-800 hover:text-blue-600">
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4 text-black">Contact</h3>
                <p className="text-gray-800">
                  Questions? Reach out to us at support@immigrationguide.org
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Immigration Guide. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <footer className="bg-white border-t">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600 text-sm">
              This website is for informational purposes only and does not constitute legal advice.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
