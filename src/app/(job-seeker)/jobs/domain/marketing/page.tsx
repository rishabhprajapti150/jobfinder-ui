"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import JobSlider from "@/components/JobSlider/page";

export default function MarketingComponent() {
    const router = useRouter();
    const marketingJobs: Job[] = [
        {
            id: 201,
            type: "Regular",
            posted: "Today",
            title: "Digital Marketing Manager",
            company: "Marketing Solutions Ltd",
            location: "Mumbai",
            experience: "4 to 8 Yrs",
            positions: "3 Positions",
        },
        {
            id: 202,
            type: "Regular",
            posted: "1 Day Ago",
            title: "SEO Specialist",
            company: "SEO Wizards",
            location: "Bangalore",
            experience: "2 to 5 Yrs",
            positions: "2 Positions",
        },
        {
            id: 203,
            type: "Regular",
            posted: "2 Days Ago",
            title: "Content Marketing Strategist",
            company: "Innovate Marketing",
            location: "Hyderabad",
            experience: "3 to 7 Yrs",
            positions: "2 Positions",
        },
        {
            id: 204,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Social Media Manager",
            company: "Creative Minds",
            location: "Delhi",
            experience: "3 to 6 Yrs",
            positions: "4 Positions",
        },
        {
            id: 205,
            type: "Regular",
            posted: "4 Days Ago",
            title: "Brand Manager",
            company: "Brand Builders Inc",
            location: "Pune",
            experience: "5 to 10 Yrs",
            positions: "1 Position",
        },
        {
            id: 206,
            type: "Regular",
            posted: "5 Days Ago",
            title: "Marketing Analyst",
            company: "Data-Driven Marketing",
            location: "Chennai",
            experience: "3 to 6 Yrs",
            positions: "3 Positions",
        },
        {
            id: 207,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Advertising Executive",
            company: "AdWorks Agency",
            location: "Kolkata",
            experience: "2 to 5 Yrs",
            positions: "2 Positions",
        },
        {
            id: 208,
            type: "Regular",
            posted: "7 Days Ago",
            title: "Public Relations Specialist",
            company: "PR Connect",
            location: "Gurgaon",
            experience: "4 to 8 Yrs",
            positions: "1 Position",
        },
        {
            id: 209,
            type: "Regular",
            posted: "8 Days Ago",
            title: "Email Marketing Manager",
            company: "EmailPros",
            location: "Noida",
            experience: "3 to 7 Yrs",
            positions: "2 Positions",
        },
    ];







    return (
        <>
            <JobSlider
                jobs={marketingJobs}
                title="Marketing Jobs"
                viewMoreText="View All Marketing Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/marketing`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/marketing/${job.id}`)} // Custom action for "Apply"
                containerId="domain-marketing-job-container"
            />
        </>
    )
}