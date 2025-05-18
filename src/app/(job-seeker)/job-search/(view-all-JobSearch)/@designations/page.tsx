import { LinkButton } from "@/components/CommonComponents";
import { CoustomViewAllJobSearch } from "@/components/ViewAllJobs/page";

export default function JobSearchbyTopDesi() {
    const designations = [
        { name: "Senior Software Engineer", jobs: 3245 },
        { name: "Java Developer", jobs: 2187 },
        { name: "Interior Designer", jobs: 876 },
        { name: "IT Recruiter", jobs: 1243 },
        { name: "Data Scientist", jobs: 2876 },
        { name: "Accountant", jobs: 1954 },
        { name: "Marketing Manager", jobs: 1678 },
        { name: "Social Media Manager", jobs: 1432 },
        { name: "Product Manager", jobs: 2345 },
        { name: "Sales Manager", jobs: 1876 },
        { name: "Content Writer", jobs: 1567 }
      ];
    return (
        <CoustomViewAllJobSearch
             companies={designations}
             showJobCount={true}
             showProgressBar={false}
             showHiringBadge={true}
             title="Popular Job Designations"
             viewAllLink="/tech-companies"
             theme="primary"
           />
    )
}