"use client"
import { useState } from "react";
import dynamic from "next/dynamic";
const ITComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/it/page'), { loading: () => <p>Loading...</p> });
const SalesComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/sales/page'), { loading: () => <p>Loading...</p> });
const FinanceComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/finance/page'), { loading: () => <p>Loading...</p> });
const MarketingComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/marketing/page'), { loading: () => <p>Loading...</p> });
const TelesalesComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/telesales/page'), { loading: () => <p>Loading...</p> });
const HRComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/hr/page'), { loading: () => <p>Loading...</p> });
const OthersComponent = dynamic(() => import('@/app/(job-seeker)/jobs/domain/others/page'), { loading: () => <p>Loading...</p> });
enum JobCategory {
    IT = "IT",
    Sales = "Sales",
    Finance = "Finance",
    Marketing = "Marketing",
    Telesales = "Telesales",
    HR = "HR",
    Others = "Others",
}
export function DomaimComponet() {
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
        </>
    )
}