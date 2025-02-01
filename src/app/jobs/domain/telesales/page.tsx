"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import JobSlider from "@/components/JobSlider/page";

export default function TeleSalesComponent() {
    const router = useRouter();
    const teleSalesJobs: Job[] = [
        {
            id: 401,
            type: "Regular",
            posted: "Today",
            title: "TeleSales Executive",
            company: "CallConnect Solutions",
            location: "Mumbai",
            experience: "1 to 4 Yrs",
            positions: "5 Positions",
        },
        {
            id: 402,
            type: "Regular",
            posted: "1 Day Ago",
            title: "Inside Sales Executive",
            company: "TeleGrowth Pvt Ltd",
            location: "Bangalore",
            experience: "2 to 6 Yrs",
            positions: "4 Positions",
        },
        {
            id: 403,
            type: "Regular",
            posted: "2 Days Ago",
            title: "B2B TeleSales Specialist",
            company: "Corporate Connect",
            location: "Hyderabad",
            experience: "3 to 7 Yrs",
            positions: "2 Positions",
        },
        {
            id: 404,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Customer Sales Representative",
            company: "VoiceSales Ltd",
            location: "Delhi",
            experience: "1 to 5 Yrs",
            positions: "6 Positions",
        },
        {
            id: 405,
            type: "Regular",
            posted: "4 Days Ago",
            title: "Telecalling Executive",
            company: "Smart Callers",
            location: "Pune",
            experience: "0 to 3 Yrs",
            positions: "4 Positions",
        },
        {
            id: 406,
            type: "Regular",
            posted: "5 Days Ago",
            title: "Lead Conversion Specialist",
            company: "SalesBoost Agency",
            location: "Chennai",
            experience: "2 to 5 Yrs",
            positions: "3 Positions",
        },
        {
            id: 407,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Telemarketing Associate",
            company: "Marketing Callers",
            location: "Kolkata",
            experience: "1 to 4 Yrs",
            positions: "2 Positions",
        },
        {
            id: 408,
            type: "Regular",
            posted: "7 Days Ago",
            title: "Outbound Sales Executive",
            company: "Outreach Experts",
            location: "Gurgaon",
            experience: "2 to 6 Yrs",
            positions: "3 Positions",
        },
        {
            id: 409,
            type: "Regular",
            posted: "8 Days Ago",
            title: "TeleSales Team Leader",
            company: "Growth Calls Pvt Ltd",
            location: "Noida",
            experience: "4 to 8 Yrs",
            positions: "1 Position",
        },
    ];



    return (
        <>
            <JobSlider
                jobs={teleSalesJobs}
                title="Telephonic Sales Jobs"
                viewMoreText="View All Telephonic Sales Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/telesales`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/telesales/${job.id}`)} // Custom action for "Apply"
                containerId="domain-TelephonicSales-job-container"
            />
        </>
    )
}