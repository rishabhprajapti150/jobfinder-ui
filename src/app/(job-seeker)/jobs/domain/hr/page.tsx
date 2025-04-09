"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";

import JobSlider from "@/components/JobSlider/page";

export default function HRComponent() {
    const router = useRouter();
    const hrJobs: Job[] = [
        {
            id: 19,
            type: "Regular",
            posted: "Today",
            title: "HR Manager",
            company: "ABC HR SOLUTIONS",
            location: "Mumbai",
            experience: "5 to 10 Yrs",
            positions: "2 Positions",
        },
        {
            id: 20,
            type: "Remote",
            posted: "1 Day Ago",
            title: "Recruitment Specialist",
            company: "XYZ TALENT HUB",
            location: "Bangalore",
            experience: "3 to 6 Yrs",
            positions: "3 Positions",
        },
        {
            id: 21,
            type: "Walk-in",
            posted: "2 Days Ago",
            title: "HR Executive",
            company: "INNOVATE HR",
            location: "Delhi",
            experience: "2 to 5 Yrs",
            positions: "4 Positions",
        },
        {
            id: 22,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Talent Acquisition Specialist",
            company: "CLOUD RECRUITERS",
            location: "Hyderabad",
            experience: "3 to 7 Yrs",
            positions: "2 Positions",
        },
        {
            id: 23,
            type: "Remote",
            posted: "4 Days Ago",
            title: "HR Business Partner",
            company: "HR STRATEGY INC",
            location: "Pune",
            experience: "5 to 8 Yrs",
            positions: "1 Position",
        },
        {
            id: 24,
            type: "Walk-in",
            posted: "5 Days Ago",
            title: "Payroll Specialist",
            company: "PAYROLL EXPERTS",
            location: "Chennai",
            experience: "2 to 5 Yrs",
            positions: "2 Positions",
        },
        {
            id: 25,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Employee Relations Manager",
            company: "EMPLOYEE CARE LTD",
            location: "Kolkata",
            experience: "4 to 8 Yrs",
            positions: "3 Positions",
        },
        {
            id: 26,
            type: "Remote",
            posted: "7 Days Ago",
            title: "HR Generalist",
            company: "HR CONNECT",
            location: "Gurgaon",
            experience: "3 to 6 Yrs",
            positions: "2 Positions",
        },
        {
            id: 27,
            type: "Walk-in",
            posted: "8 Days Ago",
            title: "Training & Development Manager",
            company: "TRAINING HUB",
            location: "Noida",
            experience: "5 to 9 Yrs",
            positions: "1 Position",
        },
    ];





    return (
        <>
            <JobSlider
                jobs={hrJobs}
                title="HR Jobs"
                viewMoreText="View All HR Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/hr`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/hr/${job.id}`)} // Custom action for "Apply"
                containerId="domain-hr-job-container"
            />
        </>
    )
}