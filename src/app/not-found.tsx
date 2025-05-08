// app/not-found.tsx
import Link from 'next/link'
import { ArrowRightIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Illustration Header */}
        <div className="bg-indigo-600 p-6 text-center">
          <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-4 mb-4">
            <RocketLaunchIcon className="h-10 w-10 text-white animate-bounce" />
          </div>
          <h1 className="text-2xl font-bold text-white">Lost in Space</h1>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <span className="text-8xl font-bold text-indigo-600 block mb-4">404</span>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Oops! The page you're looking for has been lost in the digital cosmos.
            Let's get you back to safety.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Go Home <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Report Issue
            </Link>
          </div>

          {/* Fun Facts Section */}
          <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
            <p className="text-sm text-indigo-800">
              <span className="font-semibold">Did you know?</span> The 404 error originated at CERN,
              the birthplace of the World Wide Web.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs text-gray-500">
            Need help? <Link href="/support" className="text-indigo-600 hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  )
}