# INFNOVA Academy - Frontend Internship Challenge

> A modern, responsive course platform built with Next.js and TypeScript

**Developer**: Beshah Ashenafi  
**Development Time**: ~20 hours (4 days × 5 hours/day)  
**Live Demo**: https://infnova-academy-psi.vercel.app/  
**GitHub**: https://github.com/beshah80/infnova-academy

## 📋 Project Overview

This project is a complete implementation of the INFNOVA Academy course platform, featuring a clean and modern UI with full responsiveness across all devices. Built as part of the INFNOVA Frontend Internship challenge.

## ✨ Features

### Core Features
- 🎓 **Course Listing**: Browse all available courses with search functionality
- 📖 **Course Details**: Detailed course information with instructor profiles
- 📱 **Fully Responsive**: Mobile-first design with hamburger menu navigation
- 🔍 **Search & Filter**: Real-time course search by title, instructor, or category
- 🎨 **Level Badges**: Visual indicators for Beginner, Intermediate, and Advanced courses

### Pages Implemented
- **Home/Courses Page**: Main course listing with search
- **Course Detail Page**: Individual course information and enrollment
- **About Us Page**: Company information and mission
- **Contact Page**: Contact form with validation and modal feedback
- **Sign In Page**: Authentication with email and social login options
- **Enrollment Page**: Registration with multiple sign-up methods

### Bonus Features ✅
- ✅ **API Integration**: Connected to INFNOVA Course API
- ✅ **Next.js Framework**: Built with Next.js 16 and App Router
- ✅ **Loading States**: Spinner animations during data fetching
- ✅ **Error Handling**: Graceful error messages and fallbacks
- ✅ **Form Validation**: Client-side validation with user feedback
- ✅ **Social Authentication**: Google and LinkedIn login integration

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: INFNOVA Course API
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/beshah80/infnova-academy.git
cd infnova-academy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main courses listing page
│   ├── courses/
│   │   └── [id]/
│   │       └── page.tsx      # Course detail page
│   ├── about/
│   │   └── page.tsx          # About us page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── enroll/
│   │   └── page.tsx          # Registration page
│   ├── signin/
│   │   └── page.tsx          # Sign in page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
└── components/               # Reusable components (if any)
```

## 🎯 Key Implementation Details

### Responsive Design
- Mobile-first approach with Tailwind CSS breakpoints
- Hamburger menu for mobile navigation
- Adaptive layouts for all screen sizes

### API Integration
- Fetches course data from `https://infnova-course-api.vercel.app/`
- Dynamic routing for individual course pages
- Loading states during API calls
- Error handling for failed requests

### Form Validation
- Contact form with required fields
- Email format validation
- Message length validation (minimum 10 characters)
- Modal feedback for success/error states

### UX Enhancements
- Smooth transitions and hover effects
- Visual feedback on interactive elements
- Consistent color scheme (Orange primary, Gray neutrals)
- Accessible navigation and forms

## 🎨 Design Implementation

- Followed INFNOVA design guidelines
- Maintained consistent spacing and typography
- Implemented color-coded level badges
- Added visual hierarchy with proper font weights and sizes

## 📝 Notes

### Approach
1. Started with core page structure and navigation
2. Integrated API for dynamic course data
3. Implemented responsive design with mobile menu
4. Added form validation and user feedback
5. Polished UI with transitions and hover states
6. Tested across different screen sizes

### Challenges Overcome
- Implementing a fully functional mobile hamburger menu
- Creating reusable modal components for form feedback
- Ensuring consistent styling across all pages
- Handling API loading and error states gracefully

## 🚀 Deployment

This project is deployed on Vercel: https://infnova-academy-psi.vercel.app/

---

*Built with ❤️ for INFNOVA Technologies*
