"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import JobSlider from "@/components/JobSlider/page";

export default function SalesComponent() {
    const router = useRouter();
    const salesJobs: Job[] = [
        {
            id: 301,
            type: "Regular",
            posted: "Today",
            title: "Sales Manager",
            company: "Global Sales Corp",
            location: "Mumbai",
            experience: "5 to 10 Yrs",
            positions: "3 Positions",
        },
        {
            id: 302,
            type: "Regular",
            posted: "1 Day Ago",
            title: "Business Development Executive",
            company: "Growth Solutions",
            location: "Bangalore",
            experience: "2 to 5 Yrs",
            positions: "4 Positions",
        },
        {
            id: 303,
            type: "Regular",
            posted: "2 Days Ago",
            title: "Key Account Manager",
            company: "Enterprise Deals Ltd",
            location: "Hyderabad",
            experience: "4 to 8 Yrs",
            positions: "2 Positions",
        },
        {
            id: 304,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Inside Sales Representative",
            company: "SalesForce Partners",
            location: "Delhi",
            experience: "1 to 4 Yrs",
            positions: "5 Positions",
        },
        {
            id: 305,
            type: "Regular",
            posted: "4 Days Ago",
            title: "Regional Sales Head",
            company: "Market Leaders Pvt Ltd",
            location: "Pune",
            experience: "6 to 12 Yrs",
            positions: "1 Position",
        },
        {
            id: 306,
            type: "Regular",
            posted: "5 Days Ago",
            title: "Sales Executive",
            company: "Retail Solutions",
            location: "Chennai",
            experience: "2 to 6 Yrs",
            positions: "3 Positions",
        },
        {
            id: 307,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Corporate Sales Manager",
            company: "B2B Sales Experts",
            location: "Kolkata",
            experience: "5 to 10 Yrs",
            positions: "2 Positions",
        },
        {
            id: 308,
            type: "Regular",
            posted: "7 Days Ago",
            title: "Channel Sales Executive",
            company: "Distribution Hub",
            location: "Gurgaon",
            experience: "3 to 7 Yrs",
            positions: "2 Positions",
        },
        {
            id: 309,
            type: "Regular",
            posted: "8 Days Ago",
            title: "Lead Generation Specialist",
            company: "Outbound Pros",
            location: "Noida",
            experience: "2 to 5 Yrs",
            positions: "3 Positions",
        },
    ];









    return (
        <>
            <JobSlider
                jobs={salesJobs}
                title="Sales Jobs"
                viewMoreText="View All Sales Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/sales`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/sales/${job.id}`)} // Custom action for "Apply"
                containerId="domain-sales-job-container"
            />
        </>
    )
}