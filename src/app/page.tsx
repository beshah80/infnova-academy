'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  thumbnail: string;
  rating: number;
  enrolled: number;
  category: string;
}

export default function HomePage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://infnova-course-api.vercel.app/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors text-base lg:text-lg">Contact</Link>
            </div>
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-4 lg:ml-16">
              <Link href="/signin" className="text-gray-700 hover:text-orange-500 transition-colors text-base lg:text-lg px-2 py-1">Sign In</Link>
              <Link href="/enroll" className="bg-orange-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg hover:bg-orange-600 transition-colors text-base lg:text-lg">
                Enroll Now
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-orange-500 transition-colors p-2">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link href="/" className="block text-gray-700 hover:text-orange-500 transition-colors py-2">Courses</Link>
              <Link href="/about" className="block text-gray-700 hover:text-orange-500 transition-colors py-2">About</Link>
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
      <div className="bg-orange-500 py-8 sm:py-12 lg:py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Explore Our Courses</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 lg:mb-12 max-w-none">
            Master new skills with expert-led courses designed for modern learner. Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-gray-50 py-6 sm:py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="hidden sm:flex gap-2">
              <input
                type="text"
                placeholder=""
                className="w-24 sm:w-32 px-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
              <div className="w-px h-6 bg-gray-300"></div>
              <input
                type="text"
                placeholder=""
                className="w-24 sm:w-32 px-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-4 sm:mb-6">
          <p className="text-base sm:text-lg text-gray-600">Showing {filteredCourses.length} of {courses.length} courses</p>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            <p className="mt-4 text-gray-600">Loading courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {filteredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 overflow-hidden">
                  <div className="relative">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover"
                    />
                    <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wide">
                        {course.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base lg:text-lg line-clamp-2">{course.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3"><span className="font-bold">Instructor:</span> {course.instructor}</p>
                    <hr className="border-gray-300 mb-3" />
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <span>{course.enrolled.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
