'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageWithoutSpaces = formData.message.replace(/\s/g, '');
    if (messageWithoutSpaces.length < 10) {
      setModalMessage('Message must be at least 10 characters (excluding spaces)');
      setIsError(true);
      setShowModal(true);
      return;
    }
    setModalMessage('Thank you for contacting us! We will get back to you soon.');
    setIsError(false);
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-start">
              <Link href="/">
                <img src="/logo.png" alt="INFNOVA" className="h-6 w-auto sm:h-8 hover:opacity-80 transition-opacity" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors text-base lg:text-lg">Courses</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors text-base lg:text-lg">About</Link>
              <Link href="/contact" className="text-orange-500 font-semibold transition-colors text-base lg:text-lg">Contact</Link>
            </div>
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-4 lg:ml-16">
              <Link href="/signin" className="text-gray-700 hover:text-orange-500 transition-colors text-base lg:text-lg px-2 py-1">Sign In</Link>
              <Link href="/enroll" className="bg-orange-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg hover:bg-orange-600 transition-colors text-base lg:text-lg">
                Enroll Now
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-orange-500 transition-colors p-2">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link href="/" className="block text-gray-700 hover:text-orange-500 transition-colors py-2">Courses</Link>
              <Link href="/about" className="block text-gray-700 hover:text-orange-500 transition-colors py-2">About</Link>
              <Link href="/contact" className="block text-orange-500 font-semibold py-2">Contact</Link>
              <Link href="/signin" className="block text-gray-700 hover:text-orange-500 transition-colors py-2">Sign In</Link>
              <Link href="/enroll" className="block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-center">
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-orange-500 py-12 sm:py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">Bole, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+251 921 30 79 34</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">infnova19@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon–Fri: 9 AM – 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl">
            <div className="text-center">
              {isError ? (
                <svg className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{isError ? 'Error' : 'Success'}</h3>
              <p className="text-gray-700 mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">INFNOVA Academy</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Empowering learners with cutting-edge technology courses and expert instruction to advance their careers.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Courses</Link></li>
                <li><Link href="/instructors" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Instructors</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Help Center</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">© 2026 INFNOVA Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
