// types.ts
export interface Job {
    id: number;
    type: string;
    posted: string;
    title: string;
    company: string;
    location: string;
    experience: string;
    positions: string;
}
// types.ts
export interface JobListProps {
    jobs: Job[];
    currentWindowStart: number;
    jobsPerPage: number;
    handlePrevious: () => void;
    handleNext: () => void;
    handleApply: (value: Job) => void
    containerId: string
}

export interface ViewJobDetail {
    company: string;
    location: string;
    position: string;
    experience: string;
    salary: string;
    employmentType: string;
    contractDuration: string;
    joining: string;
    jobDescription: string;
    qualifications: string[];
    skills: string[];
    responsibilities: string[];
    requirements: string[];
    recruiterDetails: {
        name: string;
        email: string;
        phone: string;
        location: string;
    };
    benefits: string[];
}

export enum JobCategory {
    IT = "IT",
    Sales = "Sales",
    Finance = "Finance",
    Marketing = "Marketing",
    Telesales = "Telesales",
    HR = "HR",
    Others = "Others",
}