import { LinkButton } from "@/components/CommonComponents";
import Link from "next/link";
import "@/styles/style.css"
import { useRef, useState } from "react";
import { ViewJobDetail } from "@/types/types";

interface JobDetailsProps {
    jobDetails: ViewJobDetail;

}

export default function ViewJobDetails({ jobDetails }: JobDetailsProps) {

    const [activeTab, setActiveTab] = useState("Job Detail"); // Default active tab


    // Create refs for each section
    const jobDetailRef = useRef<HTMLDivElement | null>(null);
    const keySkillsRef = useRef<HTMLDivElement | null>(null);
    const recruiterDetailsRef = useRef<HTMLDivElement | null>(null);
    const companyDetailsRef = useRef<HTMLDivElement | null>(null);



    // Mapping tabs to corresponding refs
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "Job Detail": jobDetailRef,
        "Key Skills": keySkillsRef,
        "Recruiter Details": recruiterDetailsRef,
        "Company Details": companyDetailsRef,
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        sectionRefs[tab].current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const tabs = ["Job Detail", "Key Skills", "Recruiter Details", "Company Details"];

    return (
        <>
            <div className="bg-white p-6 rounded w-full md:w-[60%] lg:w-[60%] md:m-10 lg:m-10 md:translate-x-16 lg:translate-x-20"
                style={{
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                }}>
                <div className="">
                    <p className="text-lg font-bold">{jobDetails.position}</p>
                    <div className="flex flex-wrap lg:flex-row lg:items-center gap-2 py-2">
                        <p className="text-sm">{jobDetails.company}</p>
                        <div className="flex items-center gap-1">
                            <svg className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24">
                                <path d="M12 2l2.834 7.652H22l-6 4.917 2.5 7.915L12 17l-6.5 5.484L8 14.57 2 9.652h7.166z" />
                            </svg>
                            <p className="text-sm">3.9</p>
                        </div>
                        <p className="text-sm">3644 Reviews</p>
                    </div>

                    <div className="flex flex-wrap lg:flex-row gap-2 py-2">
                        <div className="flex items-center">
                            <svg className="w-4 h-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
                            </svg>
                            <p className="text-sm">{jobDetails.experience}</p>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                            <p className="text-sm">{jobDetails.salary}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center gap-2 border-b-2 py-2">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                            </svg>
                            <p className="text-sm">{jobDetails.location}</p>
                        </div>
                        <div>
                            <Link href={""} className="text-sm text-[#145af3] hover:underline hover:text-[#145af3]">
                                Send me jobs like this</Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between py-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm border-r-2">Posted:<span className="font-bold">1 day ago</span> </p>
                            <p className="text-sm border-r-2">Openings:<span className="font-bold">1</span> </p>
                            <p className="text-sm border-r-2">Applicants:<span className="font-bold">92</span> </p>
                        </div>

                        <div className="flex mt-2 flex-wrap lg:flex-row gap-2 lg:mt-0">
                            <LinkButton type="button" className="text-white font-serif py-2 px-7 bg-[#145af3] rounded">Apply</LinkButton>
                            <LinkButton type="button" className="text-white font-serif py-2 px-7 bg-[#145af3] rounded flex items-center gap-3">
                                <svg className="w-5 h-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path>
                                </svg>
                                Share</LinkButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded mt-4 w-full md:w-[60%] lg:w-[60%] md:mt-[-20px] md:ml-[105px] lg:mt-[-20px] lg:ml-[120px]"
                style={{
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                }}>
                {/* job details button */}
                <div className="flex flex-row flex-wrap items-center justify-start gap-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            id="job-Detail-btn-hover"
                            className={`text-black font-serif rounded capitalize ${activeTab === tab ? "active" : ""
                                }`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* close job detail button */}

                <div ref={jobDetailRef} className="">
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Job Description:</h3>
                    <p className="text-lg text-gray-600">{jobDetails.jobDescription}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Qualifications:</h3>
                    <ul className="list-disc pl-6">
                        {jobDetails.qualifications.map((qual, index) => (
                            <li key={index} className="text-lg text-gray-600 mb-2">{qual}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Skills:</h3>
                    <ul className="list-disc pl-6">
                        {jobDetails.skills.map((skill, index) => (
                            <li key={index} className="text-lg text-gray-600 mb-2">{skill}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Responsibilities:</h3>
                    <ul className="list-disc pl-6">
                        {jobDetails.responsibilities.map((resp, index) => (
                            <li key={index} className="text-lg text-gray-600 mb-2">{resp}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Requirements:</h3>
                    <ul className="list-disc pl-6">
                        {jobDetails.requirements.map((req, index) => (
                            <li key={index} className="text-lg text-gray-600 mb-2">{req}</li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Benefits:</h3>
                    <ul className="list-disc pl-6">
                        {jobDetails.benefits.map((benefit, index) => (
                            <li key={index} className="text-lg text-gray-600 mb-2">{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div ref={keySkillsRef} className="bg-white p-4 rounded w-full md:w-[60%] lg:w-[60%] mt-4 md:ml-[105px] lg:ml-[120px]"
                style={{
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                }}>
                <h3 className="text-lg font-bold my-4">Key Skills</h3>
                <div className="flex flex-row flex-wrap gap-4">
                    {jobDetails.skills.map((skill) => (
                        <LinkButton type="button" key={skill}
                            className="bg-[#fff] text-sm border-2 border-[#ececec] shadow-md hover:border-white hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                        >{skill}</LinkButton>
                    ))}
                </div>
            </div>
            <div ref={recruiterDetailsRef} className="bg-white p-4 rounded w-full md:w-[60%] lg:w-[60%] mt-4 md:ml-[105px] lg:ml-[120px]"
                style={{
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                }}>
                <h3 className="text-lg font-bold">Recruiter Details</h3>
                <p>{jobDetails.recruiterDetails.name}</p>
                <p>{jobDetails.recruiterDetails.location}</p>
                <p>{jobDetails.recruiterDetails.email}</p>
                <p>{jobDetails.recruiterDetails.phone}</p>
            </div>
            <div ref={companyDetailsRef} className="bg-white p-4 rounded w-full md:w-[60%] lg:w-[60%] mt-4 md:ml-[105px] lg:ml-[120px] mb-5"
                style={{
                    boxShadow:
                        'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                }}>
                <h3 className="text-lg font-bold">Company Details</h3>
                <p>{jobDetails.company}</p>
            </div>
        </>
    );
}