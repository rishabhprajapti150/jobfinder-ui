"use client"

import JobSeachByLocationComponent, { IJobSearchLists } from "@/components/Job-Search/page";
import specificJobDetails from "@/utils/mock-json";

// import { LinkButton } from "@/components/CommonComponents"
// import { Job } from "@/types/types"
// import specificJobDetails from "@/utils/mock-json"
// import Link from "next/link"
// import React, { useRef, useState } from "react"
// import './style.css'


// export default function JobsINDelhi() {
//     const [selectedJob, setselectedJob] = React.useState<any>(specificJobDetails[0])
//     console.log("selectedJob", selectedJob)
//     const jobsInDelhi: any[] = [
//         {
//             "id": 1,
//             "type": "Full-time",
//             "posted": "2 days ago",
//             "title": "Frontend Developer",
//             "company": "TechSolutions Inc.",
//             "location": "Delhi, India",
//             "experience": "2-5 years",
//             "positions": "5 openings",
//             "salary": "₹8-12 LPA"
//         },
//         {
//             "id": 2,
//             "type": "Part-time",
//             "posted": "1 week ago",
//             "title": "UX Designer",
//             "company": "CreativeMinds LLC",
//             "location": "New Delhi, India",
//             "experience": "3+ years",
//             "positions": "2 openings",
//             "salary": "₹6-9 LPA"
//         },
//         {
//             "id": 3,
//             "type": "Contract",
//             "posted": "3 days ago",
//             "title": "Backend Engineer",
//             "company": "DataSystems Corp",
//             "location": "Delhi NCR, India",
//             "experience": "5+ years",
//             "positions": "1 opening",
//             "salary": "₹15-20 LPA"
//         },
//         {
//             "id": 4,
//             "type": "Full-time",
//             "posted": "Just now",
//             "title": "Product Manager",
//             "company": "InnovateTech",
//             "location": "South Delhi, India",
//             "experience": "7+ years",
//             "positions": "1 opening",
//             "salary": "₹18-25 LPA"
//         },
//         {
//             "id": 5,
//             "type": "Internship",
//             "posted": "1 day ago",
//             "title": "Marketing Intern",
//             "company": "GrowthHackers",
//             "location": "Gurgaon, Delhi NCR",
//             "experience": "Fresher",
//             "positions": "10 openings",
//             "salary": "₹10-15k/month"
//         },
//         {
//             "id": 6,
//             "type": "Full-time",
//             "posted": "5 days ago",
//             "title": "DevOps Engineer",
//             "company": "CloudNative Solutions",
//             "location": "Delhi, India",
//             "experience": "4+ years",
//             "positions": "3 openings",
//             "salary": "₹12-18 LPA"
//         },
//         {
//             "id": 7,
//             "type": "Full-time",
//             "posted": "1 day ago",
//             "title": "Data Scientist",
//             "company": "AI Innovations",
//             "location": "Noida, Delhi NCR",
//             "experience": "3+ years",
//             "positions": "4 openings",
//             "salary": "₹10-15 LPA"
//         },
//         {
//             "id": 8,
//             "type": "Freelance",
//             "posted": "2 weeks ago",
//             "title": "Content Writer",
//             "company": "Digital Marketing Pros",
//             "location": "Remote (Delhi)",
//             "experience": "1+ years",
//             "positions": "Multiple",
//             "salary": "₹20-30k/month"
//         }
//     ]
//     const jobDetailRef = useRef<HTMLDivElement | null>(null);
//     const keySkillsRef = useRef<HTMLDivElement | null>(null);
//     const recruiterDetailsRef = useRef<HTMLDivElement | null>(null);
//     const companyDetailsRef = useRef<HTMLDivElement | null>(null);
//     const [activeTab, setActiveTab] = useState("Job Detail"); // Default active tab
//     const [currentWindowStart, setCurrentWindowStart] = useState(0);
//     const jobsPerPage = 3;
//     // Mapping tabs to corresponding refs
//     // Mapping tabs to corresponding refs
//     const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
//         "Job Detail": jobDetailRef,
//         "Key Skills": keySkillsRef,
//         "Recruiter Details": recruiterDetailsRef,
//         "Company Details": companyDetailsRef,
//     };

//     const handleTabClick = (tab: string) => {
//         setActiveTab(tab);
//         sectionRefs[tab].current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     };
//     const tabs = ["Job Detail", "Key Skills", "Recruiter Details", "Company Details"];
//     function handleApply(data: any) {
//         alert(data)
//     }
//     const currentJobs = specificJobDetails.slice(currentWindowStart, currentWindowStart + jobsPerPage);
//     return (
//         <>

//             <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full">
//                 {/* Job Details */}
//                 <div className="flex flex-col m-5 w-1/3 h-[calc(2*220px)]">
//                     <div className=" overflow-y-auto scrollbar-custom">
//                         {currentJobs.map((job) => (
//                             <div
//                                 key={job.id}
//                                 className="bg-white shadow-xl py-6 px-5 mb-10 cursor-pointer"
//                                 onClick={() => setselectedJob(job)}
//                                 style={{
//                                     boxShadow:
//                                         'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                                 }}
//                             >
//                                 <div className="flex items-center justify-between py-2">
//                                     <p className="bg-[#d3d3d38c] px-2 py-1">{job.type}</p>
//                                     <p className="text-sm text-black">{job.posted}</p>
//                                 </div>
//                                 <h3 className="font-bold text-lg py-1">{job.title}</h3>
//                                 <h3 className="text-sm py-1">{job.company}</h3>
//                                 <div className="flex items-center gap-1 py-2">
//                                     <svg
//                                         className="w-4 h-4"
//                                         data-slot="icon"
//                                         fill="none"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         aria-hidden="true"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                                         ></path>
//                                     </svg>
//                                     <p className="text-sm text-black">{job.location}</p>
//                                 </div>
//                                 <div className="flex flex-row gap-4 py-1">
//                                     <div className="flex items-center gap-1">
//                                         <svg
//                                             className="w-4 h-4"
//                                             data-slot="icon"
//                                             fill="none"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
//                                             ></path>
//                                         </svg>
//                                         <p className="text-sm text-black">{job.experience}</p>
//                                     </div>
//                                     <div className="flex items-center gap-1">
//                                         <svg
//                                             className="w-4 h-4"
//                                             data-slot="icon"
//                                             fill="none"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             viewBox="0 0 24 24"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                                             ></path>
//                                         </svg>
//                                         <p className="text-sm text-black">{job.positions}</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-sm text-black py-2">Be an Early Applicant</p>
//                                 <p className="text-sm font-bold text-[#145af3] py-2 cursor-pointer text-right" onClick={() => handleApply(job)}>Apply</p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="w-full flex flex-row justify-between mt-4">
//                         <div
//                             className=" bg-white shadow-lg rounded-full p-3 w-1/6"
//                             onClick={() => {
//                                 if (currentWindowStart - jobsPerPage >= 0) {
//                                     setCurrentWindowStart(currentWindowStart - jobsPerPage);
//                                 }
//                             }}
//                             // style={{ visibility: currentWindowStart === 0 ? 'hidden' : 'visible' }}
//                         >
//                             <svg
//                                 className="w-6 h-6 font-bold text-blue-700"
//                                 data-slot="icon"
//                                 fill="none"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M15.75 19.5 8.25 12l7.5-7.5"
//                                 ></path>
//                             </svg>
//                         </div>
//                         {/* Next Button */}
//                         <div
//                             className=" bg-white shadow-md rounded-full p-3 cursor-pointer w-1/6 "
//                             id="next-remote-job"
//                             onClick={() => {
//                                 if (currentWindowStart + jobsPerPage < specificJobDetails.length) {
//                                     setCurrentWindowStart(currentWindowStart + jobsPerPage);
//                                 }
//                             }}
//                             // style={{
//                             //     visibility:
//                             //         currentWindowStart + jobsPerPage >= specificJobDetails.length ? 'hidden' : 'visible',
//                             // }}
//                         >
//                             <svg
//                                 className="w-6 h-6 font-bold text-blue-700"
//                                 data-slot="icon"
//                                 fill="none"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="m8.25 4.5 7.5 7.5-7.5 7.5"
//                                 ></path>
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 {/* current job listing */}
//                 <div className="w-full m-5">
//                     {/* job detaiks */}
//                     <div className="bg-white p-6 rounded w-full"
//                         style={{
//                             boxShadow:
//                                 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                         }}>
//                         <div className="">
//                             <p className="text-lg font-bold">{selectedJob.title}</p>
//                             <div className="flex flex-wrap lg:flex-row lg:items-center gap-2 py-2">
//                                 <p className="text-sm">{selectedJob.company}</p>
//                                 <div className="flex items-center gap-1">
//                                     <svg className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24">
//                                         <path d="M12 2l2.834 7.652H22l-6 4.917 2.5 7.915L12 17l-6.5 5.484L8 14.57 2 9.652h7.166z" />
//                                     </svg>

//                                     <p className="text-sm">{selectedJob.rating}</p>
//                                 </div>
//                                 <p className="text-sm">{`${selectedJob.reviews} Reviews`}</p>
//                             </div>

//                             <div className="flex flex-wrap lg:flex-row gap-2 py-2">
//                                 <div className="flex items-center">
//                                     <svg className="w-4 h-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
//                                     </svg>
//                                     <p className="text-sm">{selectedJob.experience}</p>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <svg className="w-4 h-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
//                                     </svg>
//                                     <p className="text-sm">{selectedJob.salary}</p>
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap justify-between items-center gap-2 border-b-2 py-2">
//                                 <div className="flex items-center gap-1">
//                                     <svg className="w-4 h-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
//                                     </svg>
//                                     <p className="text-sm">{selectedJob.location}</p>
//                                 </div>
//                                 <div>
//                                     <Link href={""} className="text-sm text-[#145af3] hover:underline hover:text-[#145af3]">
//                                         Send me jobs like this</Link>
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap items-center justify-between py-2">
//                                 <div className="flex flex-wrap items-center gap-2">
//                                     <p className="text-sm border-r-2">Posted:<span className="font-bold">{selectedJob.posted}</span> </p>
//                                     <p className="text-sm border-r-2">Openings:<span className="font-bold">{selectedJob.positions}</span> </p>
//                                     <p className="text-sm border-r-2">Applicants:<span className="font-bold">{selectedJob.applicants}</span> </p>
//                                 </div>

//                                 <div className="flex mt-2 flex-wrap lg:flex-row gap-2 lg:mt-0">
//                                     <LinkButton type="button" className="text-white font-serif py-2 px-7 bg-[#145af3] rounded">Apply</LinkButton>
//                                     <LinkButton type="button" className="text-white font-serif py-2 px-7 bg-[#145af3] rounded flex items-center gap-3">
//                                         <svg className="w-5 h-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path>
//                                         </svg>
//                                         Share</LinkButton>
//                                 </div>
//                             </div>



//                         </div>

//                     </div>
//                     <div className="bg-white p-4 rounded mt-4 w-full"
//                         style={{
//                             boxShadow:
//                                 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                         }}>
//                         {/* job detils button */}
//                         <div className="flex flex-row flex-wrap items-center justify-start gap-10">
//                             {tabs.map((tab) => (
//                                 <button
//                                     key={tab}
//                                     id="job-Detail-btn-hover"
//                                     className={`text-black font-serif rounded capitalize ${activeTab === tab ? "active" : ""
//                                         }`}
//                                     onClick={() => handleTabClick(tab)}
//                                 >
//                                     {tab}
//                                 </button>
//                             ))}
//                         </div>
//                         {/* close job detail button */}

//                         <div ref={jobDetailRef} className="">

//                             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Job Description:</h3>
//                             <p className="text-lg text-gray-600">{selectedJob.jobDescription}</p>
//                             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Qualifications:</h3>
//                             <ul className="list-disc pl-6">
//                                 {selectedJob.qualifications.map((qual: string, index: number) => (
//                                     <li key={index} className="text-lg text-gray-600 mb-2">{qual}</li>
//                                 ))}
//                             </ul>

//                             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Skills:</h3>
//                             <ul className="list-disc pl-6">
//                                 {selectedJob.skills.map((skill: string, index: number) => (
//                                     <li key={index} className="text-lg text-gray-600 mb-2">{skill}</li>
//                                 ))}
//                             </ul>

//                             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Responsibilities:</h3>
//                             <ul className="list-disc pl-6">
//                                 {selectedJob.responsibilities.map((resp: string, index: number) => (
//                                     <li key={index} className="text-lg text-gray-600 mb-2">{resp}</li>
//                                 ))}
//                             </ul>

//                             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Requirements:</h3>
//                             <ul className="list-disc pl-6">
//                                 {selectedJob.requirements.map((req: string, index: number) => (
//                                     <li key={index} className="text-lg text-gray-600 mb-2">{req}</li>
//                                 ))}
//                             </ul>
//                             <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Benefits:</h3>
//                             <ul className="list-disc pl-6">
//                                 {selectedJob.benefits.map((benefit: string, index: number) => (
//                                     <li key={index} className="text-lg text-gray-600 mb-2">{benefit}</li>
//                                 ))}
//                             </ul>



//                         </div>
//                     </div>
//                     <div ref={keySkillsRef} className="bg-white p-4 rounded w-full mt-4"
//                         style={{
//                             boxShadow:
//                                 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                         }}>
//                         <h3 className="text-lg font-bold my-4">Key Skills</h3>
//                         <div className="flex flex-row flex-wrap gap-4">

//                             {
//                                 selectedJob.skills.map((skill: string) => (
//                                     <LinkButton type="button" key={skill}
//                                         className="bg-[#fff] text-sm border-2 border-[#ececec] shadow-md hover:border-white hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]"

//                                     >{skill}</LinkButton>
//                                 ))
//                             }

//                         </div>
//                     </div>
//                     <div ref={recruiterDetailsRef} className="bg-white p-4 rounded w-full mt-4"
//                         style={{
//                             boxShadow:
//                                 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                         }}>
//                         <h3 className="text-lg font-bold">Recruiter Details</h3>
//                         <p>{selectedJob.recruiterDetails.name}</p>
//                         <p>{selectedJob.recruiterDetails.location}</p>
//                         <p>{selectedJob.recruiterDetails.email}</p>
//                         <p>{selectedJob.recruiterDetails.phone}</p>

//                     </div>
//                     <div ref={companyDetailsRef} className="bg-white p-4 rounded w-full mt-4 mb-5"
//                         style={{
//                             boxShadow:
//                                 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
//                         }}>
//                         <h3 className="text-lg font-bold">Company Details</h3>
//                         <p>{selectedJob.company}</p>


//                     </div>
//                 </div>
//                 {/* close current job listing */}
//             </div>

//             {/* close job detsil */}
//         </>
//     )
// }

// Example usage

export default function JobsInDelhi() {
   
  console.log("delhi")
    return (
      <JobSeachByLocationComponent 
        jobs={specificJobDetails as unknown as IJobSearchLists[]} 
        specificJobDetails={specificJobDetails as unknown as IJobSearchLists[]} 
        title="Jobs in Delhi"
        showPagination = {true}
        jobsPerPage = {3}
        handleApply={(jobDetails)=>alert(`Applying for: ${jobDetails.title} at ${jobDetails.company}`)}
      />
    );
  }