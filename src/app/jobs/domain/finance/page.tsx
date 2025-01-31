"use client"
import '@/styles/style.css'

import { Job } from "@/types/types";
import { useRouter } from "next/navigation";

import JobSlider from "@/components/JobSlider/page";

export default function FinanceComponent() {
    const router = useRouter();
    const financeJobs: Job[] = [
        {
            id: 10,
            type: "Regular",
            posted: "Today",
            title: "Financial Analyst",
            company: "ABC FINANCIAL SERVICES",
            location: "Mumbai",
            experience: "2 to 5 Yrs",
            positions: "3 Positions",
        },
        {
            id: 11,
            type: "Remote",
            posted: "1 Day Ago",
            title: "Investment Banker",
            company: "XYZ INVESTMENTS",
            location: "Bangalore",
            experience: "3 to 6 Yrs",
            positions: "2 Positions",
        },
        {
            id: 12,
            type: "Walk-in",
            posted: "2 Days Ago",
            title: "Chartered Accountant",
            company: "INNOVATE FINANCE",
            location: "Delhi",
            experience: "4 to 7 Yrs",
            positions: "5 Positions",
        },
        {
            id: 13,
            type: "Regular",
            posted: "3 Days Ago",
            title: "Finance Manager",
            company: "CLOUD FINTECH",
            location: "Hyderabad",
            experience: "5 to 10 Yrs",
            positions: "2 Positions",
        },
        {
            id: 14,
            type: "Remote",
            posted: "4 Days Ago",
            title: "Risk Analyst",
            company: "RISK MANAGEMENT INC",
            location: "Pune",
            experience: "2 to 6 Yrs",
            positions: "1 Position",
        },
        {
            id: 15,
            type: "Walk-in",
            posted: "5 Days Ago",
            title: "Tax Consultant",
            company: "TAX SOLUTIONS",
            location: "Chennai",
            experience: "1 to 4 Yrs",
            positions: "2 Positions",
        },
        {
            id: 16,
            type: "Regular",
            posted: "6 Days Ago",
            title: "Accounts Executive",
            company: "ACCOUNTS PRO",
            location: "Kolkata",
            experience: "2 to 5 Yrs",
            positions: "3 Positions",
        },
        {
            id: 17,
            type: "Remote",
            posted: "7 Days Ago",
            title: "Audit Manager",
            company: "AUDIT EXPERTS",
            location: "Gurgaon",
            experience: "4 to 8 Yrs",
            positions: "2 Positions",
        },
        {
            id: 18,
            type: "Walk-in",
            posted: "8 Days Ago",
            title: "Corporate Finance Associate",
            company: "CORP FINANCE LTD",
            location: "Noida",
            experience: "5 to 9 Yrs",
            positions: "1 Position",
        },
    ];




    return (
        <>
            <JobSlider
                jobs={financeJobs}
                title="Finance Jobs"
                viewMoreText="View All Finance Jobs" // Custom text
                onViewMoreClick={() => router.push(`/jobs/domain/finance`)} // Custom action for "View More"
                onApplyClick={(job) => router.push(`/jobs/domain/finance/${job.id}`)} // Custom action for "Apply"
                containerId="domain-finance-job-container"
            />
        </>
    )
}