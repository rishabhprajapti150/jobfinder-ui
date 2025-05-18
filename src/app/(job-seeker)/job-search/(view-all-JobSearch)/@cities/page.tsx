import { LinkButton } from "@/components/CommonComponents";
import { CoustomViewAllJobSearch } from "@/components/ViewAllJobs/page";

export default function JobSearchbyTopCity() {
    const citys = [
        { name: "Amazon", jobs: 1243 },
        { name: "Air India", jobs: 562 },
        { name: "Axis Bank", jobs: 891 },
        { name: "Cognizant", jobs: 2345 },
        { name: "Flipkart", jobs: 765 },
        { name: "Paytm", jobs: 432 },
        { name: "HDFC Bank", jobs: 678 },
        { name: "HCL", jobs: 1567 },
        { name: "Infosys", jobs: 2890 },
        { name: "IndusInd Bank", jobs: 345 },
        { name: "Samsung", jobs: 987 },
        { name: "Tech Mahindra", jobs: 1782 }
    ];
    return (
        // <CoustomViewAllJobSearch companies={citys} />
//         <CompanyList 
//   title="Tech Companies Hiring" 
//   companies={techCompanies} 
//   theme="secondary"
//   maxColumns={3}
//   viewAllLink="/tech-companies"
// />
<CoustomViewAllJobSearch 
  companies={citys} 
  showJobCount={true}
  showProgressBar={false}
  showHiringBadge={true}
  title="Browse Jobs by Cities" 
  viewAllLink="/tech-companies"
  theme="primary"
/>
    )
}