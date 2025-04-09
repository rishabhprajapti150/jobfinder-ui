"use client"

import { useParams } from "next/navigation";
import "@/styles/style.css"

import ViewJobDetails from "@/components/ViewJobDetails/page";

const jobDetails = [
    {
        company: "Grad-Dreams Education Consulting Pvt Ltd",
        location: "Thane / Mumbai",
        position: "Software Developer / Project Lead",
        experience: "2-5 years",
        salary: "INR 40,000 - 60,000 per month",
        employmentType: "Full-time, Work from Office",
        contractDuration: "3 months (extendable based on performance)",
        joining: "IMMEDIATE",
        jobDescription: "We are seeking a driven and talented Software Developer / Project Lead to join our growing team. In this 3-month contract role (with potential for extension based on performance), you will play a pivotal role in building innovative software solutions that streamline our operations, elevate the client experience, and contribute to the company's continued growth. You will wear two hats, focusing on both technical development and leading projects to successful completion.",
        qualifications: [
            "BE / ME / MCA / MCS / Bachelor of IT or Computer Applications",
            "Minimum 1 Year Work Experience mandatory",
            "Strong understanding of mobile platforms, particularly iOS and Android"
        ],
        skills: [
            "ASP.NET Core Web API",
            "C#",
            "React JS",
            "HTML5",
            "CSS3",
            "JavaScript",
            "MongoDB",
            "RESTful APIs",
            "Git/Version Control",
            "CI/CD pipelines",
            "AWS/Azure/GCP (Preferred)"
        ],
        responsibilities: [
            "Design, develop, and maintain RESTful APIs using ASP.NET Core Web API",
            "Develop frontend applications using React JS, HTML5, CSS3, JavaScript",
            "Troubleshoot and resolve technical issues",
            "Manage project scope, timelines, and resources",
            "Document development processes effectively"
        ],
        requirements: [
            "Strong proficiency in ASP.NET Core Web API and C#",
            "Expertise in front-end development using React JS, HTML5, CSS3, JavaScript",
            "In-depth knowledge of MongoDB or other NoSQL databases",
            "Excellent problem-solving and analytical skills",
            "Ability to work independently and as part of a collaborative team",
            "Strong attention to detail and commitment to delivering high-quality work",
            "Experience with cloud platforms (AWS, Azure, GCP) is a plus",
            "Knowledge of CI/CD pipelines and DevOps practices",
            "Ready to learn automated AI-enabled systems & CRM's"
        ],
        recruiterDetails: {
            name: "Grad-Dreams Education Consulting Pvt Ltd",
            email: "hidden_email",
            phone: "hidden_mobile",
            location: "Other Maharashtra"
        },
        benefits: [
            "Competitive salary with performance-based incentives",
            "Opportunity to work on cutting-edge technologies",
            "Collaborative and innovative work environment",
            "Potential for full-time employment after contract period",
            "Learning and career growth opportunities"
        ],
    }
];;
export default function JobDetails() {
    const params = useParams();
    const jobId = params.jobId; // Get jobId from URL

    if (!jobId) return <p>Loading...</p>;
    // Mapping tabs to corresponding refs


    return (
        <>
            <ViewJobDetails
                jobDetails={jobDetails[0]}

            />


        </>
    )
}