import { LinkButton } from "@/components/CommonComponents";
import { CoustomViewAllJobSearch } from "@/components/ViewAllJobs/page";

export default function JobSearchbySkills() {
  const jobSkills = [
    { name: "Android", jobs: 892 },
    { name: "Accounting", jobs: 1245 },
    { name: "AWS", jobs: 1567 },
    { name: "C++", jobs: 723 },
    { name: "Content Marketing", jobs: 1034 },
    { name: "Digital Marketing", jobs: 1876 },
    { name: "Java", jobs: 2310 },
    { name: "Data Science", jobs: 2543 },
    { name: "Python", jobs: 2987 },
    { name: "React Native", jobs: 945 },
    { name: ".NET", jobs: 1672 }
  ];

  return (
    <CoustomViewAllJobSearch
      companies={jobSkills}
      showJobCount={true}
      showProgressBar={false}
      showHiringBadge={true}
      title="Browse Jobs by Skill"
      viewAllLink="/job-search/skill"
      theme="primary"
    />
  )
}