"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import JobSlider from "@/components/JobSlider/page";

export default function ITComponent() {
    const router = useRouter();
    const itJobs: Job[] = [
        {
            id: 101,
            type: "Regular",
            posted: "Today",
            title: "Software Engineer",
            company: "Tech Solutions Ltd",
            location: "Bangalore",
            experience: "2 to 5 Yrs",
            positions: "5 Positions",
        },
        {
            id: 102,
            type: "Regular",
            posted: "1 Day Ago",
            title: "Full Stack Developer",
            company: "Innovate IT",
            location: "Remote",
            experience: "3 to 7 Yrs",
            positions: "3 Positions",
        },
        {
            id: 103,
            type: "Regular",
            posted: "2 Days Ago",
            title: "Frontend Developer",
            company: "Creative Web Solutions",
            location: "Hyderabad",
            experience: "2 to 6 Yrs",
            positions: "4 Positions",
        },
        {
            id: 104,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Backend Developer",
            company: "CodeCrafters Inc",
            location: "Pune",
            experience: "3 to 8 Yrs",
            positions: "2 Positions",
        },
        {
            id: 105,
            type: "Regular",
            posted: "4 Days Ago",
            title: "DevOps Engineer",
            company: "CloudTech",
            location: "Chennai",
            experience: "4 to 10 Yrs",
            positions: "1 Position",
        },
        {
            id: 106,
            type: "Regular",
            posted: "5 Days Ago",
            title: "Data Scientist",
            company: "AI Innovations",
            location: "Mumbai",
            experience: "3 to 7 Yrs",
            positions: "2 Positions",
        },
        {
            id: 107,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Cyber Security Analyst",
            company: "SecureTech",
            location: "Delhi",
            experience: "5 to 10 Yrs",
            positions: "3 Positions",
        },
        {
            id: 108,
            type: "Regular",
            posted: "7 Days Ago",
            title: "Machine Learning Engineer",
            company: "Data Wizards",
            location: "Remote",
            experience: "4 to 9 Yrs",
            positions: "2 Positions",
        },
        {
            id: 109,
            type: "Regular",
            posted: "8 Days Ago",
            title: "Cloud Solutions Architect",
            company: "Cloud Masters",
            location: "Gurgaon",
            experience: "6 to 12 Yrs",
            positions: "1 Position",
        },
    ];






    return (
        <>
            <JobSlider
                jobs={itJobs}
                title="IT Jobs"
                viewMoreText="View All IT Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/it`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/it/${job.id}`)} // Custom action for "Apply"
                containerId="domain-it-job-container"
            />
        </>
    )
}