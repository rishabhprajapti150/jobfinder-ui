"use client"
import Link from "next/link";
import { LinkButton } from "../CommonComponents";

export interface Company {
    name: string;
    jobsCount: number;
  }
  
  export interface CompanyGroup {
    letter: string;
    data: Company[];
  }
  interface AlphabetFilterProps{
    handleLetterClick:(letter:string)=>void
    // selectedLetter:string
  }
export const AlphabetFilter  = ({handleLetterClick}:AlphabetFilterProps) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Browse Companies by Letter</h2>
      <div className="flex flex-wrap gap-2">
        {letters.map((letter) => (
          <LinkButton
            key={letter}
            type="button"
            onClick={()=>handleLetterClick(letter)}
            className={`w-10 h-10 flex items-center justify-center rounded-md bg-white hover:bg-blue-50 border border-gray-200 text-blue-600 font-medium hover:text-blue-700 transition-colors`}
          >
            {letter}
          </LinkButton>
        ))}
      </div>
    </div>
  );
};


import { useState, useEffect } from 'react';

export const ViewALLJobsByLetter = ({ companyGroups }: { companyGroups: CompanyGroup[] }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [companyGroups]);

  if (isLoading) {
    return (
      <div className="space-y-8">
        {companyGroups.map((group, groupIndex) => (
          <div key={`skeleton-group-${groupIndex}`} className="scroll-mt-16">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-md mr-3 animate-pulse"></div>
              <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.data.map((_, companyIndex) => (
                <div
                  key={`skeleton-company-${companyIndex}`}
                  className="p-4 bg-white rounded-lg border border-gray-100"
                >
                  
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    // Your existing component JSX
   <div className="space-y-8">
      {companyGroups.map((group) => (
        <div key={group.letter} id={group.letter} className="scroll-mt-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <span className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-md mr-3">
              {group.letter}
            </span>
            Top Companies by Letter {group.letter}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.data.map((company) => (
              <div
                key={company.name}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
              >
                <h3 className="font-medium text-lg text-gray-800 mb-1">{company.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{company.jobsCount} jobs available</p>
                <LinkButton type="button" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                  View Jobs
                </LinkButton>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
// export const ViewALLJobsByLetter  = ({ companyGroups }: { companyGroups: CompanyGroup[] }) => {
//   return (
//     <div className="space-y-8">
//       {companyGroups.map((group) => (
//         <div key={group.letter} id={group.letter} className="scroll-mt-16">
//           <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
//             <span className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-md mr-3">
//               {group.letter}
//             </span>
//             Top Companies by Letter {group.letter}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {group.data.map((company) => (
//               <div
//                 key={company.name}
//                 className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
//               >
//                 <h3 className="font-medium text-lg text-gray-800 mb-1">{company.name}</h3>
//                 <p className="text-gray-500 text-sm mb-3">{company.jobsCount} jobs available</p>
//                 <LinkButton type="button" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
//                   View Jobs
//                 </LinkButton>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };