
import { useState } from "react";
import '@/styles/style.css'
import JobList from "@/components/JobList";
import { Job } from "@/types/types";
import { LinkButton } from "@/components/CommonComponents";

interface JobSliderProps {
    jobs: Job[];
    title: string;
    jobsPerPage?: number;
    viewMoreText?: string; // Custom text for the "View More" button
    onViewMoreClick?: () => void; // Callback for "View More" button click
    onApplyClick: (job: Job) => void; // Callback for "Apply" button click
    containerId: string;
}

export default function JobSlider({
    jobs,
    title,
    jobsPerPage = 3,
    viewMoreText = "View More", // Default text
    onViewMoreClick, // Optional callback
    onApplyClick, // Optional callback for "Apply" button
    containerId,
}: JobSliderProps) {
    const [currentWindowStart, setCurrentWindowStart] = useState(0);

    const handleNext = () => {
        const container = document.getElementById(containerId);

        // Remove both animation classes first
        container?.classList.remove("walkin-slider-animation-next", "walkin-slider-animation-prev");

        // Force reflow to reset animation
        void container?.offsetWidth;

        // Add next animation
        setTimeout(() => {
            container?.classList.add("walkin-slider-animation-next");
        }, 10);

        if (currentWindowStart + jobsPerPage < jobs.length) {
            setCurrentWindowStart(currentWindowStart + jobsPerPage);
        }
    };

    const handlePrevious = () => {
        const container = document.getElementById(containerId);

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

    return (
        <>
            <div className="bg-white mt-8 mb-5">
                <div className="flex items-center justify-center">
                    <h3 className="text-black text-2xl font-bold font-sans my-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {title}
                    </h3>
                </div>
                <JobList
                    jobs={jobs}
                    currentWindowStart={currentWindowStart}
                    jobsPerPage={jobsPerPage}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handleApply={onApplyClick} // Pass the "Apply" callback
                    containerId={containerId}
                />
                <div className="flex items-center justify-center">
                    <LinkButton
                        type="link"
                        href="#"
                        onClick={onViewMoreClick} // Use the callback if provided
                        className="text-[#145af3] font-bold hover:text-blue-700 mb-4"
                    >
                        {viewMoreText} {/* Use custom text or default */}
                    </LinkButton>
                </div>
            </div>
        </>
    );
}