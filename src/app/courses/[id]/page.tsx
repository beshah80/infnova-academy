'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: string;
  duration: string;
  thumbnail: string;
  skills: string[];
  enrolled: number;
  rating: number;
  category: string;
}

export default function CourseDetailPage() {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetchCourse(params.id as string);
    }
  }, [params.id]);

  const fetchCourse = async (id: string) => {
    try {
      const response = await fetch(`https://infnova-course-api.vercel.app/api/courses/${id}`);
      if (!response.ok) {
        throw new Error('Course not found');
      }
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error('Error fetching course:', error);
      setError('Failed to load course. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The course you are looking for does not exist.'}</p>
          <Link href="/" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

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

      {/* White Gap with Back to Courses */}
      <div className="bg-white py-4 sm:py-6">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
            <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="bg-orange-500 py-8 sm:py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <div className="flex-1">
              <p className="text-white text-sm font-semibold mb-2">{course.category.toUpperCase()}</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-white mb-4 text-sm sm:text-base lg:text-lg">{course.description}</p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                <div className="flex items-center text-white text-sm">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {course.instructor}
                </div>
                <div className="flex items-center text-white text-sm">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </div>
                <div className="flex items-center text-white text-sm">
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {course.enrolled.toLocaleString()} enrolled
                </div>
                <div className="flex items-center text-white text-sm">
                  <svg className="h-4 w-4 mr-2 text-yellow-300 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {course.rating} rating
                </div>
              </div>
              
              <span className={`inline-block px-3 py-2 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                {course.level} Level
              </span>
            </div>
            
            <div className="w-full lg:w-auto flex justify-center">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="rounded-lg shadow-lg max-w-full h-auto w-full lg:w-96"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Left Column - Main Content */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {course.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Description */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Course Description</h2>
              <div className="prose prose-sm sm:prose lg:prose-lg text-gray-700">
                <p className="text-sm sm:text-base">{course.description}</p>
                <p className="mt-4 text-sm sm:text-base">
                  This comprehensive course is designed to provide you with hands-on experience and practical knowledge 
                  in {course.category.toLowerCase()}. You'll work on real-world projects and learn from industry experts 
                  who have years of experience in the field.
                </p>
                <p className="mt-4 text-sm sm:text-base">
                  By the end of this course, you'll have the skills and confidence to tackle complex challenges and 
                  create impressive solutions that showcase your expertise to potential employers.
                </p>
              </div>
            </section>

            {/* Your Instructor */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Your Instructor</h2>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{course.instructor}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">
                    {course.instructor} is an experienced professional in {course.category.toLowerCase()} with 
                    years of industry experience. They have helped thousands of students master the skills needed 
                    to succeed in their careers and are passionate about sharing their knowledge with the next 
                    generation of professionals.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Enrollment Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 sticky top-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Enroll Today</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Join {course.enrolled.toLocaleString()} students already enrolled</p>
              
              <div className="space-y-3 sm:space-y-4">
                <Link href="/enroll" className="block w-full bg-orange-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm sm:text-base text-center">
                  Enroll Now
                </Link>
                <button className="w-full bg-white text-orange-500 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg border-2 border-orange-500 hover:bg-orange-50 transition-colors font-semibold text-sm sm:text-base">
                  Add to Wishlist
                </button>
              </div>
              
              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">This course includes:</h4>
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {course.duration} of content
                </div>
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lifetime access
                </div>
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificate of completion
                </div>
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access on mobile and desktop
                </div>
                <div className="flex items-center text-gray-700 text-sm sm:text-base">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Downloadable Resources
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full">
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
