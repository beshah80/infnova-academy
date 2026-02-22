import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">This page is coming soon.</p>
        <Link href="/" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
