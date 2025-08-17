"use client"
import { useState } from "react";
import dynamic from "next/dynamic";
import { JobCategory } from "@/types/types";
import { MagnifyingGlassIcon, BriefcaseIcon, UserGroupIcon, BellIcon } from '@heroicons/react/24/outline';
import { CButton } from "@/components/Button/CButton";
const ITComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/it/page'), { loading: () => <p>Loading...</p> });
const SalesComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/sales/page'), { loading: () => <p>Loading...</p> });
const FinanceComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/finance/page'), { loading: () => <p>Loading...</p> });
const MarketingComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/marketing/page'), { loading: () => <p>Loading...</p> });
const TelesalesComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/telesales/page'), { loading: () => <p>Loading...</p> });
const HRComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/hr/page'), { loading: () => <p>Loading...</p> });
const OthersComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/others/page'), { loading: () => <p>Loading...</p> });

function DomaimComponet() {
    const [activeTab, setActiveTab] = useState<string>(JobCategory.IT); // Default active tab
    const jobCategories: string[] = [...Object.values(JobCategory)];
    // Function to render component based on category
    const renderComponent = () => {
        console.log(activeTab);

        switch (activeTab) {
            case JobCategory.IT:
                return <ITComponent />;
            case JobCategory.Sales:
                return <SalesComponent />;
            case JobCategory.Finance:
                return <FinanceComponent />;
            case JobCategory.Marketing:
                return <MarketingComponent />;
            case JobCategory.Telesales:
                return <TelesalesComponent />;
            case JobCategory.HR:
                return <HRComponent />;
            case JobCategory.Others:
                return <OthersComponent />;
            default:
                return <div>Select a category</div>;
        }
    };
    return (
        <>
            <div className="bg-white mt-7 mb-6 p-4">
                <div className="flex flex-wrap items-center justify-center gap-5">
                    {jobCategories.map((jobCategorie) => (
                        <button
                            key={jobCategorie}
                            id="job-Detail-btn-hover"
                            className={`text-black font-serif rounded capitalize ${activeTab === jobCategorie ? "active" : ""
                                }`}
                            onClick={() => setActiveTab(jobCategorie)}
                        >
                            {jobCategorie}
                        </button>
                    ))}

                </div>
                {renderComponent()}
            </div>
            {/* How It Works Section */}

            <section className="section-padding bg-gray-50 mb-24 mt-6">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Simple steps to find your dream job or ideal candidate
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                <MagnifyingGlassIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Search Jobs</h3>
                            <p className="text-gray-600">
                                Browse through thousands of job listings or use our advanced search features to find the perfect match.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply with Ease</h3>
                            <p className="text-gray-600">
                                Create your profile once and apply to multiple jobs with just a few clicks, no repetitive forms.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                <BellIcon className="h-8 w-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Job Alerts</h3>
                            <p className="text-gray-600">
                                Set up personalized job alerts and receive notifications when new relevant positions are posted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-blue-600 text-white mt-5 py-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to take the next step in your career?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Join thousands of job seekers who've found their dream jobs through our platform.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <CButton
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-gray-100"
                        >
                            Create an Account
                        </CButton>
                        <CButton
                            variant="outline"
                            size="lg"
                            className="border-white text-blue-500 hover:bg-blue-700"
                        >
                            Learn More
                        </CButton>
                    </div>
                </div>
            </section>


        </>
    )
}
export default DomaimComponet as any