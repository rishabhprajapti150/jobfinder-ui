import { LinkButton } from "@/components/CommonComponents";
import { CoustomViewAllJobSearch } from "@/components/ViewAllJobs/page";

export default function JobSearchbyTopOthersJob() {
    const jobTypes = [
        { name: "Work from Home", jobs: 8765, hasCityFilter: true },
        { name: "Online Jobs", jobs: 6543, hasCityFilter: true },
        { name: "Freelance", jobs: 4321, hasCityFilter: false },
        { name: "Part Time", jobs: 7654, hasCityFilter: true },
        { name: "Fresher Jobs", jobs: 9876, hasCityFilter: false },
        { name: "Data Entry", jobs: 3456, hasCityFilter: false },
        { name: "Night Shift", jobs: 2345, hasCityFilter: true },
        { name: "Weekend Jobs", jobs: 1234, hasCityFilter: false }
      ];
    return (
      <CoustomViewAllJobSearch
           companies={jobTypes}
           showJobCount={true}
           showProgressBar={false}
           showHiringBadge={true}
           title="Other Job Types"
           viewAllLink="/tech-companies"
           theme="primary"
         />
    )
}