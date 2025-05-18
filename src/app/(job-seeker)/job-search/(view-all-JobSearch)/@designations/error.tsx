
'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { ArrowPathIcon, HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { LinkButton } from '@/components/CommonComponents'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter()

    useEffect(() => {
        // Log to error monitoring service (Sentry/LogRocket/etc)
        console.error('ErrorBoundary caught:', error)
        const windowData = window as any
        if (windowData.analytics as any) {
            windowData.analytics.track('Error Occurred', {
                message: error.message,
                stack: error.stack,
            })
        }
    }, [error])

    const handleReset = () => {
        reset()
        // Fallback to full reload if reset doesn't work
        setTimeout(() => document.hasFocus() && window.location.reload(), 1000)
    }

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            {/* Skeleton Header */}


            {/* Skeleton Company Grid */}
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/30">
                    <ExclamationTriangleIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>

                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    Oops! Something went wrong
                </h2>

                <p className="text-gray-600 dark:text-gray-300">
                    {error.message || 'An unexpected error occurred'}
                </p>

                {error.digest && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Error reference: <code>{error.digest}</code>
                    </p>
                )}

                <div className="flex space-x-3 pt-4">
                    <LinkButton
                        type='button'
                        onClick={handleReset}
                        className="rounded-lg bg-blue-600 px-5 py-3 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        <ArrowPathIcon className="mr-1 h-4 w-4 inline" />
                        Try Again
                    </LinkButton>

                    <LinkButton
                        type='button'
                        onClick={() => router.push('/')}
                        className="rounded-lg border border-gray-300 px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                        <HomeIcon className="mr-1 h-4 w-4 inline" />
                        Go Home
                    </LinkButton>
                </div>
            </div>

            {process.env.NODE_ENV === 'development' && (
                <details className="mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                    <summary className="cursor-pointer font-mono text-sm text-gray-700 dark:text-gray-300">
                        Stack Trace
                    </summary>
                    <pre className="mt-2 overflow-x-auto whitespace-pre-wrap font-mono text-xs text-gray-800 dark:text-gray-200">
                        {error.stack}
                    </pre>
                </details>
            )}
        </div>
    )
}