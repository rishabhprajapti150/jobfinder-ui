"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import JobSlider from "@/components/JobSlider/page";

export default function OthersComponent() {
    const router = useRouter();
    const otherJobs: Job[] = [
        {
            id: 401,
            type: "Regular",
            posted: "Today",
            title: "Software Engineer",
            company: "Tech Innovators",
            location: "Bangalore",
            experience: "2 to 6 Yrs",
            positions: "5 Positions",
        },
        {
            id: 402,
            type: "Regular",
            posted: "1 Day Ago",
            title: "Data Scientist",
            company: "AI Solutions",
            location: "Hyderabad",
            experience: "3 to 7 Yrs",
            positions: "3 Positions",
        },
        {
            id: 403,
            type: "Regular",
            posted: "2 Days Ago",
            title: "HR Manager",
            company: "People First Pvt Ltd",
            location: "Delhi",
            experience: "5 to 10 Yrs",
            positions: "2 Positions",
        },
        {
            id: 404,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Graphic Designer",
            company: "Creative Studios",
            location: "Mumbai",
            experience: "2 to 6 Yrs",
            positions: "4 Positions",
        },
        {
            id: 405,
            type: "Regular",
            posted: "4 Days Ago",
            title: "Accountant",
            company: "Finance Experts",
            location: "Chennai",
            experience: "3 to 8 Yrs",
            positions: "3 Positions",
        },
        {
            id: 406,
            type: "Regular",
            posted: "5 Days Ago",
            title: "Cybersecurity Analyst",
            company: "SecureTech",
            location: "Pune",
            experience: "4 to 9 Yrs",
            positions: "2 Positions",
        },
        {
            id: 407,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Customer Support Executive",
            company: "Client Care Solutions",
            location: "Kolkata",
            experience: "1 to 5 Yrs",
            positions: "6 Positions",
        },
        {
            id: 408,
            type: "Regular",
            posted: "7 Days Ago",
            title: "Operations Manager",
            company: "Business Solutions Pvt Ltd",
            location: "Gurgaon",
            experience: "5 to 12 Yrs",
            positions: "2 Positions",
        },
        {
            id: 409,
            type: "Regular",
            posted: "8 Days Ago",
            title: "Mechanical Engineer",
            company: "Manufacturing Corp",
            location: "Noida",
            experience: "3 to 7 Yrs",
            positions: "3 Positions",
        },
    ];


    return (
        <>
            <JobSlider
                jobs={otherJobs}
                title="Others Jobs"
                viewMoreText="View All Others Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/others`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/others/${job.id}`)} // Custom action for "Apply"
                containerId="domain-others-job-container"
            />
        </>
    )
}