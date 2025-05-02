
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { LinkButton } from '../CommonComponents';
import { MapPinIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';
// import '@/styles/style.css'

// Types
export type IJobSearchLists = {
  id: number;
  type: string;
  posted: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  positions: string;
  salary: string;
  rating?: string;
  reviews?: string;
  applicants?: string;
  jobDescription?: string;
  qualifications?: string[];
  skills?: string[];
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  recruiterDetails?: {
    name: string;
    location: string;
    email: string;
    phone: string;
  };
};

type JobsComponentProps = {
  jobs: IJobSearchLists[];
  specificJobDetails: IJobSearchLists[];
  title?: string;
  showPagination?: boolean;
  jobsPerPage?: number;
  handleApply:(data:IJobSearchLists)=>void
};

type JobCardProps = {
  job: IJobSearchLists;
  onClick: () => void;
  onApply: (job: IJobSearchLists) => void;
};

type JobDetailTabsProps = {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
};

type JobDetailSectionProps = {
  selectedJob: IJobSearchLists;
//   activeTab: string;
//   jobDetailRef: React.RefObject<HTMLDivElement>;
//   keySkillsRef: React.RefObject<HTMLDivElement>;
//   recruiterDetailsRef: React.RefObject<HTMLDivElement>;
//   companyDetailsRef: React.RefObject<HTMLDivElement>;
//   handleTabClick: (tab: string) => void
};

type PaginationControlsProps = {
  currentStart: number;
  itemsPerPage: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
};

// Sub-components
const JobCard: React.FC<JobCardProps> = ({ job, onClick, onApply }) => (
  <div
    className="bg-white rounded-xl border-2 border-blue-600 hover:shadow-2xl transition cursor-pointer p-6 mb-8"
    onClick={onClick}
    style={{
      boxShadow:
        'rgba(50, 50, 93, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.05) 0px 2px 6px',
    }}
  >
    {/* Top Bar */}
    <div className="flex items-center justify-between mb-2">
      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{job.type}</span>
      <span className="text-xs text-gray-500">{job.posted}</span>
    </div>

    {/* Title & Company */}
    <h3 className="text-xl font-bold text-blue-600 mb-1">{job.title}</h3>
    <p className="text-sm text-gray-700 mb-3">{job.company}</p>

    {/* Location */}
    <div className="flex items-center text-sm text-gray-600 mb-2">
      <MapPinIcon className="w-4 h-4 mr-1 text-blue-500" />
      {job.location}
    </div>

    {/* Experience & Positions */}
    <div className="flex gap-6 text-sm text-gray-600 mb-3">
      <div className="flex items-center">
        <BriefcaseIcon className="w-4 h-4 mr-1 text-blue-500" />
        {job.experience}
      </div>
      <div className="flex items-center">
        <UsersIcon className="w-4 h-4 mr-1 text-blue-500" />
        {job.positions}
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between mt-4">
      <p className="text-sm text-gray-400 italic">Be an early applicant</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onApply(job);
        }}
        className="text-blue-600 font-semibold hover:text-blue-800 transition text-sm"
      >
        Apply →
      </button>
    </div>
  </div>
);

const JobDetailTabs: React.FC<JobDetailTabsProps> = ({ tabs, activeTab, onTabClick }) => (
  <div className="flex flex-row flex-wrap items-center justify-start gap-10">
    {tabs.map((tab) => (
      <button
        key={tab}
        id="job-Detail-btn-hover"
        className={`text-black font-serif rounded capitalize ${activeTab === tab ? "active" : ""}`}
        onClick={() => onTabClick(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

const JobDetailSection: React.FC<JobDetailSectionProps> = ({
  selectedJob,
//   activeTab,
//   jobDetailRef,
//   keySkillsRef,
//   recruiterDetailsRef,
//   companyDetailsRef,
//   handleTabClick
}) => {
    const [activeTab, setActiveTab] = useState("Job Detail");
    const jobDetailRef = useRef<HTMLDivElement | null>(null);
  const keySkillsRef = useRef<HTMLDivElement | null>(null);
  const recruiterDetailsRef = useRef<HTMLDivElement | null>(null);
  const companyDetailsRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    "Job Detail": jobDetailRef as any,
    "Key Skills": keySkillsRef  as any,
    "Recruiter Details": recruiterDetailsRef  as any,
    "Company Details": companyDetailsRef  as any,
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    sectionRefs[tab].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const tabs = ["Job Detail", "Key Skills", "Recruiter Details", "Company Details"];
  
  return (
    <div className="bg-white p-4 rounded w-full mt-4"
      style={{
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
      }}>
      <JobDetailTabs tabs={tabs} activeTab={activeTab} onTabClick={(tab) => handleTabClick(tab)} />
      
      <div ref={jobDetailRef}>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Job Description:</h3>
        <p className="text-lg text-gray-600">{selectedJob.jobDescription}</p>
        
        {selectedJob.qualifications && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Qualifications:</h3>
            <ul className="list-disc pl-6">
              {selectedJob.qualifications.map((qual, index) => (
                <li key={index} className="text-lg text-gray-600 mb-2">{qual}</li>
              ))}
            </ul>
          </>
        )}

        {selectedJob.skills && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Skills:</h3>
            <ul className="list-disc pl-6">
              {selectedJob.skills.map((skill, index) => (
                <li key={index} className="text-lg text-gray-600 mb-2">{skill}</li>
              ))}
            </ul>
          </>
        )}

        {selectedJob.responsibilities && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Responsibilities:</h3>
            <ul className="list-disc pl-6">
              {selectedJob.responsibilities.map((resp, index) => (
                <li key={index} className="text-lg text-gray-600 mb-2">{resp}</li>
              ))}
            </ul>
          </>
        )}

        {selectedJob.requirements && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Requirements:</h3>
            <ul className="list-disc pl-6">
              {selectedJob.requirements.map((req, index) => (
                <li key={index} className="text-lg text-gray-600 mb-2">{req}</li>
              ))}
            </ul>
          </>
        )}

        {selectedJob.benefits && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Benefits:</h3>
            <ul className="list-disc pl-6">
              {selectedJob.benefits.map((benefit, index) => (
                <li key={index} className="text-lg text-gray-600 mb-2">{benefit}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div ref={keySkillsRef}>
        <h3 className="text-lg font-bold my-4">Key Skills</h3>
        <div className="flex flex-row flex-wrap gap-4">
          {selectedJob.skills?.map((skill) => (
            <LinkButton 
              key={skill}
              type="button"
              className="bg-[#fff] text-sm border-2 border-[#ececec] shadow-md hover:border-white hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              {skill}
            </LinkButton>
          ))}
        </div>
      </div>

      <div ref={recruiterDetailsRef}>
        <h3 className="text-lg font-bold">Recruiter Details</h3>
        {selectedJob.recruiterDetails && (
          <>
            <p>{selectedJob.recruiterDetails.name}</p>
            <p>{selectedJob.recruiterDetails.location}</p>
            <p>{selectedJob.recruiterDetails.email}</p>
            <p>{selectedJob.recruiterDetails.phone}</p>
          </>
        )}
      </div>

      <div ref={companyDetailsRef}>
        <h3 className="text-lg font-bold">Company Details</h3>
        <p>{selectedJob.company}</p>
      </div>
    </div>
  );
};

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentStart,
  itemsPerPage,
  totalItems,
  onPrevious,
  onNext,
}) => (
  <div className="w-full flex flex-row justify-between mt-4">
    <div
      className="bg-white shadow-lg rounded-full p-3 w-1/6 cursor-pointer"
      onClick={onPrevious}
      style={{ visibility: currentStart === 0 ? 'hidden' : 'visible' }}
    >
      <PreviousIcon />
    </div>
    <div
      className="bg-white shadow-md rounded-full p-3 cursor-pointer w-1/6"
      onClick={onNext}
      style={{
        visibility: currentStart + itemsPerPage >= totalItems ? 'hidden' : 'visible',
      }}
    >
      <NextIcon />
    </div>
  </div>
);

// Icon components for better reusability
const LocationIcon = () => (
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
);

const ExperienceIcon = () => (
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
);

const PositionsIcon = () => (
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
);

const PreviousIcon = () => (
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
);

const NextIcon = () => (
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
);



// Main component
const JobSeachByLocationComponent: React.FC<JobsComponentProps> = ({
  jobs,
  specificJobDetails,
  title = "Jobs in Delhi",
  showPagination = true,
  jobsPerPage = 3,
  handleApply
}) => {
  const [selectedJob, setSelectedJob] = useState<IJobSearchLists>(specificJobDetails[0]);
  const [currentWindowStart, setCurrentWindowStart] = useState(0);
  
  

//   const handleApply = (job: IJobSearchLists) => {
//     alert(`Applying for: ${job.title} at ${job.company}`);
//   };

  const handlePrevious = () => {
    if (currentWindowStart - jobsPerPage >= 0) {
      setCurrentWindowStart(currentWindowStart - jobsPerPage);
    }
  };

  const handleNext = () => {
    if (currentWindowStart + jobsPerPage < specificJobDetails.length) {
      setCurrentWindowStart(currentWindowStart + jobsPerPage);
    }
  };

  const currentJobs = specificJobDetails.slice(currentWindowStart, currentWindowStart + jobsPerPage);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-full">
      {/* Job Listings */}
      <div className="flex flex-col m-5 w-1/3 h-[calc(2*220px)]">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="overflow-y-auto scrollbar-custom">
          {currentJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onClick={() => setSelectedJob(job)}
              onApply={(singleJobs)=>handleApply(singleJobs)}
            />
          ))}
        </div>
        
        {showPagination && (
          <PaginationControls
            currentStart={currentWindowStart}
            itemsPerPage={jobsPerPage}
            totalItems={specificJobDetails.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}
      </div>

      {/* Selected Job Details */}
      <div className="w-full m-5">
        <div 
          className="bg-white p-6 rounded w-full"
          style={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
          }}
        >
          <div>
            <p className="text-lg font-bold">{selectedJob.title}</p>
            <div className="flex flex-wrap lg:flex-row lg:items-center gap-2 py-2">
              <p className="text-sm">{selectedJob.company}</p>
              {selectedJob.rating && (
                <>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l2.834 7.652H22l-6 4.917 2.5 7.915L12 17l-6.5 5.484L8 14.57 2 9.652h7.166z" />
                    </svg>
                    <p className="text-sm">{selectedJob.rating}</p>
                  </div>
                  {selectedJob.reviews && <p className="text-sm">{`${selectedJob.reviews} Reviews`}</p>}
                </>
              )}
            </div>

            <div className="flex flex-wrap lg:flex-row gap-2 py-2">
              <div className="flex items-center">
                <ExperienceIcon />
                <p className="text-sm">{selectedJob.experience}</p>
              </div>
              <div className="flex items-center">
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
                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
                <p className="text-sm">{selectedJob.salary}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center gap-2 border-b-2 py-2">
              <div className="flex items-center gap-1">
                <LocationIcon />
                <p className="text-sm">{selectedJob.location}</p>
              </div>
              <div>
                <Link 
                  href={""} 
                  className="text-sm text-[#145af3] hover:underline hover:text-[#145af3]"
                >
                  Send me jobs like this
                </Link>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between py-2">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm border-r-2 pr-2">Posted:<span className="font-bold"> {selectedJob.posted}</span> </p>
                <p className="text-sm border-r-2 pr-2">Openings:<span className="font-bold"> {selectedJob.positions}</span> </p>
                {selectedJob.applicants && (
                  <p className="text-sm border-r-2 pr-2">Applicants:<span className="font-bold"> {selectedJob.applicants}</span> </p>
                )}
              </div>

              <div className="flex mt-2 flex-wrap lg:flex-row gap-2 lg:mt-0">
                <LinkButton 
                  type="button" 
                  className="text-white font-serif py-2 px-7 bg-[#145af3] rounded"
                  onClick={() => handleApply(selectedJob)}
                >
                  Apply
                </LinkButton>
                <LinkButton 
                  type="button" 
                  className="text-white font-serif py-2 px-7 bg-[#145af3] rounded flex items-center gap-3"
                >
                  <svg 
                    className="w-5 h-5" 
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
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    ></path>
                  </svg>
                  Share
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        <JobDetailSection
          selectedJob={selectedJob}
        //   activeTab={activeTab}
        //   handleTabClick={handleTabClick}
        //   jobDetailRef={jobDetailRef as any}
        //   keySkillsRef={keySkillsRef as any}
        //   recruiterDetailsRef={recruiterDetailsRef as any}
        //   companyDetailsRef={companyDetailsRef as any}
        />
      </div>
    </div>
  );
};

export default JobSeachByLocationComponent