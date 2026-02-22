'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
              <Link href="/about" className="text-orange-500 font-semibold transition-colors text-base lg:text-lg">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors text-base lg:text-lg">Contact</Link>
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
              <Link href="/about" className="block text-orange-500 font-semibold py-2">About</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-orange-500 transition-colors py-2">Contact</Link>
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">About INFNOVA Academy</h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            Empowering learners worldwide with cutting-edge technology education
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700">
              At INFNOVA Academy, we believe that quality education should be accessible to everyone. Our mission is to provide 
              world-class technology courses that empower individuals to achieve their career goals and transform their lives 
              through learning.
            </p>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-700">Learn from industry professionals with years of real-world experience.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-On Projects</h3>
                <p className="text-gray-700">Build your portfolio with practical, real-world projects.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Learning</h3>
                <p className="text-gray-700">Study at your own pace with lifetime access to course materials.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Support</h3>
                <p className="text-gray-700">Get guidance and resources to advance your professional journey.</p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-orange-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">10K+</div>
                <div className="text-gray-700">Students</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-700">Courses</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">20+</div>
                <div className="text-gray-700">Instructors</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">95%</div>
                <div className="text-gray-700">Satisfaction</div>
              </div>
            </div>
          </section>
        </div>
      </div>

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
