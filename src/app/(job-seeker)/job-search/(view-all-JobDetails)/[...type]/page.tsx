

"use client"
// import { AlphabetFilter, CompanyGroup, ViewALLJobsByLetter } from "@/components/FilterByLetterJob";

// export default function ViewAllCompanyJobs({params,searchParams}: {params: { type?: string[] };searchParams: { letter?: string };}) {
//     const categoryGroups: CompanyGroup[] = [
//         {
//           letter: "A",
//           data: [
//             { name: "Automobile", jobsCount: 3456},
//             { name: "Bank", jobsCount: 5678},
//             { name: "Media", jobsCount: 2345},
//             { name: "Manufacturing", jobsCount: 4567 },
//             { name: "Teacher", jobsCount: 6789},
//             { name: "Healthcare", jobsCount: 7890},
//             { name: "Hotel", jobsCount: 3456},
//             { name: "Networking", jobsCount: 2345},
//             { name: "NGO", jobsCount: 1234},
//             { name: "Pharma", jobsCount: 4567},
//             { name: "Recruitment", jobsCount: 34},
//             { name: "Retail", jobsCount: 6789}
//           ],
//         },
//         // Add more letters as needed
//       ];
//   // Sample data - in a real app, this would come from an API
//   const companyGroups: CompanyGroup[] = [
//     {
//       letter: "A",
//       data: [
//         { name: "Acc Jobs", jobsCount: 42 },
//         { name: "Adani Power Jobs", jobsCount: 18 },
//         { name: "Aditya Birla Capital Jobs", jobsCount: 36 },
//         { name: "Air Asia Jobs", jobsCount: 24 },
//         { name: "Air India Jobs", jobsCount: 57 },
//         { name: "Allahabad Bank Job", jobsCount: 12 },
//         { name: "Amazon Jobs", jobsCount: 89 },
//         { name: "Ambuja Cement Jobs", jobsCount: 31 },
//         { name: "American Bank Jobs", jobsCount: 22 },
//         { name: "Amul Jobs", jobsCount: 15 },
//         { name: "Andhra Bank Jobs", jobsCount: 19 },
//         { name: "Apollo Tyres Jobs", jobsCount: 27 },
//         { name: "Arvind Mills Jobs", jobsCount: 14 },
//         { name: "Ashok Leyland Jobs", jobsCount: 45 },
//         { name: "Asian Paints Jobs", jobsCount: 33 },
//         { name: "Au Small Finance Bank Jobs", jobsCount: 21 },
//         { name: "Aurobindo Pharma Jobs", jobsCount: 38 },
//         { name: "Axis Bank Jobs", jobsCount: 62 },
//       ],
//     },
//     // Add more letters as needed
//   ];
//   const skillGroups: CompanyGroup[] = [
//     {
//       letter: "A",
//       data:  [
//         { name: "Android", jobsCount: 892 },
//         { name: "Accounting", jobsCount: 1245 },
//         { name: "AWS", jobsCount: 1567 },
//         { name: "C++", jobsCount: 723 },
//         { name: "Content Marketing", jobsCount: 1034 },
//         { name: "Digital Marketing", jobsCount: 1876 },
//         { name: "Java", jobsCount: 2310 },
//         { name: "Data Science", jobsCount: 2543 },
//         { name: "Python", jobsCount: 2987 },
//         { name: "React Native", jobsCount: 945 },
//         { name: ".NET", jobsCount: 1672 }
//       ],
//     },
//     // Add more letters as needed
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Job Search by Top Companies
//           </h1>
//           <p className="mt-3 text-xl text-gray-500">
//             Find your dream job at leading companies
//           </p>
//         </div>

//         <AlphabetFilter />
//         <ViewALLJobsByLetter companyGroups={companyGroups} />
//       </div>
//     </div>
//   );
// }
type JobSearchData = {
  companny: CompanyGroup[];
  skill: CompanyGroup[];
  designation: CompanyGroup[];
  citie: CompanyGroup[];
  category: CompanyGroup[];
};
// Define all data sets in a single object
const JOB_SEARCH_DATA:any = {
  company: [
    {
      letter: "A",
      data: [
        { name: "Acc Jobs", jobsCount: 42 },
        { name: "Adani Power Jobs", jobsCount: 18 },
        { name: "Aditya Birla Capital Jobs", jobsCount: 36 },
        { name: "Air Asia Jobs", jobsCount: 24 },
        { name: "Air India Jobs", jobsCount: 57 },
        { name: "Allahabad Bank Job", jobsCount: 12 },
        { name: "Amazon Jobs", jobsCount: 89 },
        { name: "Ambuja Cement Jobs", jobsCount: 31 },
        { name: "American Bank Jobs", jobsCount: 22 },
        { name: "Amul Jobs", jobsCount: 15 },
        { name: "Andhra Bank Jobs", jobsCount: 19 },
        { name: "Apollo Tyres Jobs", jobsCount: 27 },
        { name: "Arvind Mills Jobs", jobsCount: 14 },
        { name: "Ashok Leyland Jobs", jobsCount: 45 },
        { name: "Asian Paints Jobs", jobsCount: 33 },
        { name: "Au Small Finance Bank Jobs", jobsCount: 21 },
        { name: "Aurobindo Pharma Jobs", jobsCount: 38 },
        { name: "Axis Bank Jobs", jobsCount: 62 },
      ],
    },
     {
      letter: "B",
      data: [
        { name: "Bajaj Auto Jobs", jobsCount: 35 },
        { name: "Bank of Baroda Jobs", jobsCount: 28 },
        { name: "Bata India Jobs", jobsCount: 19 },
        { name: "Berger Paints Jobs", jobsCount: 22 },
        { name: "Bharat Petroleum Jobs", jobsCount: 41 },
        { name: "Biocon Jobs", jobsCount: 33 },
        { name: "Bosch Jobs", jobsCount: 47 },
        { name: "Britannia Jobs", jobsCount: 18 },
      ],
    },
    // ... more letters
  ],
  skill: [
    {
            letter: "A",
            data:  [
              { name: "Android", jobsCount: 892 },
              { name: "Accounting", jobsCount: 1245 },
              { name: "AWS", jobsCount: 1567 },
              { name: "C++", jobsCount: 723 },
              { name: "Content Marketing", jobsCount: 1034 },
              { name: "Digital Marketing", jobsCount: 1876 },
              { name: "Java", jobsCount: 2310 },
              { name: "Data Science", jobsCount: 2543 },
              { name: "Python", jobsCount: 2987 },
              { name: "React Native", jobsCount: 945 },
              { name: ".NET", jobsCount: 1672 }
            ],
          },
    // ... more letters
  ],
  designation: [
    {
      letter: "A",
      data: [
        { name: "Automobile", jobsCount: 3456 },
        { name: "Bank", jobsCount: 5678 },
        { name: "Media", jobsCount: 2345 },
        { name: "Manufacturing", jobsCount: 4567 },
        { name: "Teacher", jobsCount: 6789 },
        { name: "Healthcare", jobsCount: 7890 },
        { name: "Hotel", jobsCount: 3456 },
        { name: "Networking", jobsCount: 2345 },
        { name: "NGO", jobsCount: 1234 },
        { name: "Pharma", jobsCount: 4567 },
        { name: "Recruitment", jobsCount: 34 },
        { name: "Retail", jobsCount: 6789 }
      ],
    },
    // ... more letters
  ],
  citie: [
    {
      letter: "A",
      data: [
        { name: "Ahmedabad", jobsCount: 1250 },
        { name: "Austin", jobsCount: 980 },
        // ... more cities
      ],
    },
    // ... more letters
  ],
  category: [
    {
      letter: "A",
      data: [
        { name: "Automobile", jobsCount: 3456 },
        { name: "Aviation", jobsCount: 789 },
        // ... more categories
      ],
    },
    // ... more letters
  ],

};

import { AlphabetFilter, CompanyGroup, ViewALLJobsByLetter } from "@/components/FilterByLetterJob";
import React, { use } from "react";


// Type definition for all possible job search types
type JobSearchType = 'company' | 'skill' | 'designation' | 'city' | 'category';
// 3. Type for valid route parameters
type JobSearchRouteType = keyof typeof JOB_SEARCH_DATA;
// Metadata for each view type
const VIEW_METADATA:any = {
  company: {
    title: "Job Search by Top Companies",
    subtitle: "Find your dream job at leading companies"
  },
  skill: {
    title: "Find Jobs by Skill",
    subtitle: "Search for jobs requiring specific skills"
  },
  designation: {
    title: "Browse Jobs by Designation",
    subtitle: "Explore opportunities by job title"
  },
  city: {
    title: "Jobs by Location",
    subtitle: "Find opportunities in your city"
  },
  category: {
    title: "Jobs by Industry",
    subtitle: "Browse jobs by industry category"
  },
  // otherJobs: {
  //   title: "Special Job Types",
  //   subtitle: "Explore apprenticeships and other opportunities"
  // }
};
// Type guard to ensure valid view types
function isValidViewType(type: string | undefined): type is JobSearchType {
  return type ? Object.keys(JOB_SEARCH_DATA).includes(type) : false;
}
export default function JobSearchPage({
  params,
  searchParams
}: {
  params: Promise<{ type?: string[] }>;
  searchParams: Promise<{ letter?: string }>;
}) {
  console.log("params",params)
   
  // State for selected letter (default to 'A' or from URL)
  const [selectedLetter, setSelectedLetter] =React.useState<string>(
     'A'
  );
  // Get view type from URL or default to 'companies'
  const viewType = use(params)?.type?.[0] || 'company';
  // Get and validate route type
  const routeType = use(params)?.type?.[0] as string;
  console.log("use(params)",use(params))
  const validRouteType = Object.keys(JOB_SEARCH_DATA).includes(routeType)
    ? routeType
    : 'companny' as any;  // default to 'companny'


  // // Fetch data from API based on type and optional letter filter
  // const currentData = await fetchJobData({
  //   type: viewType,
  //   letter: searchParams.letter // Optional letter filter
  // });
  
  const { title, subtitle } = VIEW_METADATA[viewType];
    let currentData = JOB_SEARCH_DATA[validRouteType] ;
     currentData= currentData.filter((item:any) => 
    item.letter.charAt(0).toUpperCase() === selectedLetter)
  function handleLetterClick(letter:string) {
    setSelectedLetter(letter)
   
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {subtitle}
          </p>
        </div>

        <AlphabetFilter handleLetterClick={handleLetterClick} />
        <ViewALLJobsByLetter companyGroups={currentData as CompanyGroup[]} />
      </div>
    </div>
  );
}