import { LinkButton } from "@/components/CommonComponents";
import { CoustomViewAllJobSearch } from "@/components/ViewAllJobs/page";

export default function JobSearchbyTopCo() {
    const categories = [
        { name: "Automobile", jobs: 3456 },
        { name: "Bank", jobs: 5678},
        { name: "Media", jobs: 2345 },
        { name: "Manufacturing", jobs: 4567},
        { name: "Teacher", jobs: 6789 },
        { name: "Healthcare", jobs: 7890, },
        { name: "Hotel", jobs: 3456 },
        { name: "Networking", jobs: 2345 },
        { name: "NGO", jobs: 1234},
        { name: "Pharma", jobs: 4567},
        { name: "Recruitment", jobs: 3456 },
        { name: "Retail", jobs: 6789 }
      ];
    return (
      <CoustomViewAllJobSearch 
                companies={categories} 
                showJobCount={true}
                showProgressBar={false}
                showHiringBadge={true}
                title="Browse Jobs by Category" 
                viewAllLink="/job-search"
                theme="primary"
              />
    )
}