import React from 'react';
import { JobListProps } from '@/types/types';

const JobList: React.FC<JobListProps> = ({
    jobs,
    currentWindowStart,
    jobsPerPage,
    handlePrevious,
    handleNext,
    handleApply,
    containerId
}) => {

    const currentJobs = jobs.slice(currentWindowStart, currentWindowStart + jobsPerPage);

    return (
        <div className="flex items-baseline mb-4 gap-4">
            {/* Previous Button */}
            <div
                className="bg-white shadow-lg rounded-full p-3 mx-3 translate-y-24 cursor-pointer"
                onClick={handlePrevious}
                style={{ visibility: currentWindowStart === 0 ? 'hidden' : 'visible' }}
            >
                <svg
                    className="w-6 h-6 font-bold text-blue-700"
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    ></path>
                </svg>
            </div>

            {/* Job Details */}
            <div id={containerId} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                {currentJobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white shadow-xl py-6 px-5 mb-10"
                        style={{
                            boxShadow:
                                'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                        }}
                    >
                        <div className="flex items-center justify-between py-2">
                            <p className="bg-[#d3d3d38c] px-2 py-1">{job.type}</p>
                            <p className="text-sm text-black">{job.posted}</p>
                        </div>
                        <h3 className="font-bold text-lg py-1">{job.title}</h3>
                        <h3 className="text-sm py-1">{job.company}</h3>
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                className="w-4 h-4"
                                data-slot="icon"
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                ></path>
                            </svg>
                            <p className="text-sm text-black">{job.location}</p>
                        </div>
                        <div className="flex flex-row gap-4 py-1">
                            <div className="flex items-center gap-1">
                                <svg
                                    className="w-4 h-4"
                                    data-slot="icon"
                                    fill="none"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-black">{job.experience}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    className="w-4 h-4"
                                    data-slot="icon"
                                    fill="none"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-black">{job.positions}</p>
                            </div>
                        </div>
                        <p className="text-sm text-black py-2">Be an Early Applicant</p>
                        <p className="text-sm font-bold text-[#145af3] py-2 cursor-pointer" onClick={() => handleApply(job)}>Apply</p>
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <div
                className="bg-white shadow-lg rounded-full p-3 mx-3 translate-y-24 cursor-pointer"
                id="next-remote-job"
                onClick={handleNext}
                style={{
                    visibility:
                        currentWindowStart + jobsPerPage >= jobs.length ? 'hidden' : 'visible',
                }}
            >
                <svg
                    className="w-6 h-6 font-bold text-blue-700"
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default JobList;