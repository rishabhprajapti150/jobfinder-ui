"use client"
import { useState } from "react";
import '@/styles/style.css'
import JobList from "@/components/JobList";
import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import { LinkButton } from "@/components/CommonComponents";

export default function WalkInJOb() {
    const router = useRouter();
    const jobs: Job[] = [
        {
            id: 1,
            type: "Walk-in",
            posted: "Today",
            title: "Software Engineer",
            company: "ABC TECH SOLUTIONS",
            location: "Mumbai",
            experience: "2 to 5 Yrs",
            positions: "3 Positions",
        },
        {
            id: 2,
            type: "Walk-in",
            posted: "1 Day Ago",
            title: "Java Developer",
            company: "XYZ INFOTECH",
            location: "Bangalore",
            experience: "3 to 6 Yrs",
            positions: "2 Positions",
        },
        {
            id: 3,
            type: "Walk-in",
            posted: "2 Days Ago",
            title: "Full Stack Developer",
            company: "INNOVATE TECH",
            location: "Delhi",
            experience: "4 to 7 Yrs",
            positions: "5 Positions",
        },
        {
            id: 4,
            type: "Walk-in",
            posted: "3 Days Ago",
            title: "Backend Developer",
            company: "CLOUD SOLUTIONS",
            location: "Hyderabad",
            experience: "3 to 5 Yrs",
            positions: "2 Positions",
        },
        {
            id: 5,
            type: "Walk-in",
            posted: "4 Days Ago",
            title: "DevOps Engineer",
            company: "DEVOPS INC",
            location: "Pune",
            experience: "2 to 6 Yrs",
            positions: "1 Position",
        },
        {
            id: 6,
            type: "Walk-in",
            posted: "5 Days Ago",
            title: "UI/UX Designer",
            company: "DESIGN STUDIO",
            location: "Chennai",
            experience: "1 to 4 Yrs",
            positions: "2 Positions",
        },
        {
            id: 7,
            type: "Walk-in",
            posted: "6 Days Ago",
            title: "Data Scientist",
            company: "DATA ANALYTICS LTD",
            location: "Kolkata",
            experience: "4 to 8 Yrs",
            positions: "3 Positions",
        },
        {
            id: 8,
            type: "Walk-in",
            posted: "7 Days Ago",
            title: "Mobile App Developer",
            company: "APP SOLUTIONS",
            location: "Gurgaon",
            experience: "2 to 5 Yrs",
            positions: "1 Position",
        },
        {
            id: 9,
            type: "Walk-in",
            posted: "8 Days Ago",
            title: "Cloud Engineer",
            company: "CLOUD SERVICES",
            location: "Noida",
            experience: "5 to 9 Yrs",
            positions: "2 Positions",
        },
        // Add more walk-in jobs as needed
    ];

    const [currentWindowStart, setCurrentWindowStart] = useState(0);
    const jobsPerPage = 3;

    const handleNext = () => {
        const container = document.getElementById("walkin-job-container");

        // Remove both animation classes firstwalkin-slider-animation-next
        container?.classList.remove("walkin-slider-animation-next", "walkin-slider-animation-prev");

        // Force reflow to reset animation
        void container?.offsetWidth;

        // Add next animation
        setTimeout(() => {
            container?.classList.add("walkin-slider-animation-next");
        }, 10);
        console.log("remote-job-container", container)
        if (currentWindowStart + jobsPerPage < jobs.length) {
            setCurrentWindowStart(currentWindowStart + jobsPerPage);
        }
    };

    const handlePrevious = () => {
        const container = document.getElementById("walkin-job-container");

        // Remove both animation classes first
        container?.classList.remove("walkin-slider-animation-next", "walkin-slider-animation-prev");

        // Force reflow to reset animation
        void container?.offsetWidth;

        // Add previous animation
        setTimeout(() => {
            container?.classList.add("walkin-slider-animation-prev");
        }, 10);
        if (currentWindowStart - jobsPerPage >= 0) {
            setCurrentWindowStart(currentWindowStart - jobsPerPage);
        }
    };

    // const currentJobs = jobs.slice(
    //     currentWindowStart,
    //     currentWindowStart + jobsPerPage
    // );
    return (
        <>
            <div className="bg-white mt-8 mb-5">
                <div className="flex items-center justify-center">
                    <h3 className="text-black text-2xl font-bold font-sans my-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Walkin Jobs
                    </h3>

                </div>
                <JobList
                    jobs={jobs}
                    currentWindowStart={currentWindowStart}
                    jobsPerPage={jobsPerPage}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handleApply={(value) => router.push(`/jobs/walk-in/${value.id}`)}
                    containerId="walkin-job-container"
                />
                <div className="flex items-center justify-center">
                    <LinkButton type="link" href={"#"} className="text-[#145af3] font-bold hover:text-blue-700 mb-4">View All</LinkButton>
                </div>
            </div>
        </>
    )
}