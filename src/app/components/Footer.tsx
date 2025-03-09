export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Privacy Notice */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
            <h3 className="font-semibold text-green-800 mb-2">Privacy & Security</h3>
            <p className="text-green-700">
              We do not collect or store any personal information. This website is for informational purposes only, 
              and none of your data or responses will be shared with any authorities or third parties. You can use 
              this site safely and anonymously.
            </p>
          </div>
        </div>

        {/* Existing footer content */}
        <div className="text-center text-gray-600 text-sm">
          <p>This website is for informational purposes only and does not constitute legal advice.</p>
          <p className="mt-2">© {new Date().getFullYear()} Immigration Plain Language Guide</p>
        </div>
      </div>
    </footer>
  );
} 