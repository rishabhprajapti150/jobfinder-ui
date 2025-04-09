"use client"
import { useState } from "react";
import '@/styles/style.css'
import JobList from "@/components/JobList";
import { Job } from "@/types/types";
import { useRouter } from "next/navigation";
import { LinkButton } from "@/components/CommonComponents";

export default function RemoteJob() {
    const router = useRouter();
    const jobs: Job[] = [
        {
            id: 1,
            type: "Remote",
            posted: "3 Days Ago",
            title: "Senior React Native Developer",
            company: "AITHETA TECHNOLOGIES PVT LTD",
            location: "Mumbai",
            experience: "4 to 6 Yrs",
            positions: "2 Position",
        },
        {
            id: 2,
            type: "Remote",
            posted: "5 Days Ago",
            title: "Frontend Developer",
            company: "TECH SOLUTIONS INC",
            location: "Bangalore",
            experience: "2 to 4 Yrs",
            positions: "1 Position",
        },
        {
            id: 3,
            type: "Remote",
            posted: "1 Day Ago",
            title: "Full Stack Developer",
            company: "INNOVATE TECH",
            location: "Delhi",
            experience: "3 to 5 Yrs",
            positions: "3 Position",
        },
        {
            id: 4,
            type: "Remote",
            posted: "2 Days Ago",
            title: "Backend Developer",
            company: "CLOUD SOLUTIONS",
            location: "Hyderabad",
            experience: "5 to 7 Yrs",
            positions: "1 Position",
        },
        {
            id: 5,
            type: "Remote",
            posted: "4 Days Ago",
            title: "DevOps Engineer",
            company: "DEVOPS INC",
            location: "Pune",
            experience: "3 to 6 Yrs",
            positions: "2 Position",
        },
        {
            id: 6,
            type: "Remote",
            posted: "6 Days Ago",
            title: "UI/UX Designer",
            company: "DESIGN STUDIO",
            location: "Chennai",
            experience: "2 to 5 Yrs",
            positions: "1 Position",
        },
        {
            id: 7,
            type: "Remote",
            posted: "7 Days Ago",
            title: "Data Scientist",
            company: "DATA ANALYTICS LTD",
            location: "Kolkata",
            experience: "4 to 7 Yrs",
            positions: "2 Position",
        },
        {
            id: 8,
            type: "Remote",
            posted: "8 Days Ago",
            title: "Mobile App Developer",
            company: "APP SOLUTIONS",
            location: "Gurgaon",
            experience: "3 to 6 Yrs",
            positions: "1 Position",
        },
        {
            id: 9,
            type: "Remote",
            posted: "9 Days Ago",
            title: "Cloud Engineer",
            company: "CLOUD SERVICES",
            location: "Noida",
            experience: "5 to 8 Yrs",
            positions: "3 Position",
        },
        // Add more jobs as needed
    ];
    const [currentWindowStart, setCurrentWindowStart] = useState(0);
    const jobsPerPage = 3;

    const handleNext = () => {
        const container = document.getElementById("remote-job-container");

        // Remove both animation classes first
        container?.classList.remove("job-slider-animation-next", "job-slider-animation-prev");

        // Force reflow to reset animation
        void container?.offsetWidth;

        // Add next animation
        setTimeout(() => {
            container?.classList.add("job-slider-animation-next");
        }, 10);
        console.log("remote-job-container", container)
        if (currentWindowStart + jobsPerPage < jobs.length) {
            setCurrentWindowStart(currentWindowStart + jobsPerPage);
        }
    };

    const handlePrevious = () => {
        const container = document.getElementById("remote-job-container");

        // Remove both animation classes first
        container?.classList.remove("job-slider-animation-next", "job-slider-animation-prev");

        // Force reflow to reset animation
        void container?.offsetWidth;

        // Add previous animation
        setTimeout(() => {
            container?.classList.add("job-slider-animation-prev");
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
            <div className="bg-white p-4 md:p-0 lg:0">
                <div className="flex items-center justify-center">
                    <h3 className="text-black text-2xl font-bold font-sans my-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Remote Jobs
                    </h3>

                </div>

                <JobList
                    jobs={jobs}
                    currentWindowStart={currentWindowStart}
                    jobsPerPage={jobsPerPage}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handleApply={(value) => router.push(`/jobs/remote/${value.id}`)}
                    containerId="remote-job-container"
                />
                <div className="flex items-center justify-center">
                    <LinkButton type="link" href={"#"} className="text-[#145af3] font-bold hover:text-blue-700 mb-4">113+ More Jobs</LinkButton>
                </div>
            </div>
        </>
    )
}