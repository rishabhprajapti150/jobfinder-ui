// 'use client';

// import { ReactNode, useEffect, useRef } from 'react';
// import { useSelectedLayoutSegment } from 'next/navigation';
// import Link from 'next/link';

// interface JobsLayoutProps {
//   children: ReactNode;
//   companies: ReactNode;
//   skills: ReactNode;
//   designations: ReactNode;
//   cities: ReactNode;
//   category: ReactNode;
//   otherJobs: ReactNode;
// }

// interface TabLinkProps {
//   segment: string | null;
//   href: string;
//   label: string;
// }

// export default function JobsLayout({
//   children,
//   companies,
//   skills,
//   designations,
//   cities,
//   category,
//   otherJobs
// }: JobsLayoutProps) {
//   const segment = useSelectedLayoutSegment();
//   const sections = {
//     companies: useRef<HTMLDivElement>(null),
//     skills: useRef<HTMLDivElement>(null),
//     designations: useRef<HTMLDivElement>(null),
//     cities: useRef<HTMLDivElement>(null),
//     category: useRef<HTMLDivElement>(null),
//     otherJobs: useRef<HTMLDivElement>(null)
//   };

//   // Auto-scroll when tab changes
//   useEffect(() => {
//     if (segment && sections[segment as keyof typeof sections]?.current) {
//       sections[segment as keyof typeof sections].current?.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   }, [segment]);

//   return (
//     <div className="container mx-auto px-4">
//       {/* Sticky Tab Navigation */}
//       <div className="sticky top-0 bg-white z-10 border-b">
//         <div className="flex overflow-x-auto py-2 gap-1">
//           {/* <TabLink segment={segment} href="/jobs" label="Featured" /> */}
//           <TabLink segment={segment} href="/job-search" label="Companies" />
//           <TabLink segment={segment} href="/job-search" label="Skills" />
//           <TabLink segment={segment} href="/job-search" label="Designations" />
//           <TabLink segment={segment} href="/job-search" label="Cities" />
//           <TabLink segment={segment} href="/job-search" label="Category" />
//           <TabLink segment={segment} href="/job-search" label="Other Jobs" />
//         </div>
//       </div>

//       {/* Content Area */}
//       <div className="py-6">
//         {/* Default Content */}
//         {!segment && children}
//         {/* <div>{companies}</div> */}
//         {/* Parallel Routes with Refs */}
//         <div ref={sections.companies}>{companies}</div>
//         <div ref={sections.skills}>{skills}</div>
//         <div ref={sections.designations}>{designations}</div>
//         <div ref={sections.cities}>{cities}</div>
//         <div ref={sections.category}>{category}</div>
//         <div ref={sections.otherJobs}>{otherJobs}</div>
//       </div>
//     </div>
//   );
// }

// function TabLink({ segment, href, label }: TabLinkProps) {
//   const isActive = href === '/job-search' 
//     ? !segment 
//     : segment ? href.includes(segment) : false;

//   return (
//     <Link
//       href={href}
//       className={`whitespace-nowrap px-4 py-2 rounded-t-lg ${
//         isActive 
//           ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' 
//           : 'hover:bg-gray-100'
//       }`}
//     >
//       {label}
//     </Link>
//   );
// }

'use client';

import Button from '@/components/ui/button';
import { LinkButton } from '@/components/CommonComponents';
import { ReactNode, useRef, useState } from 'react';

interface JobsLayoutProps {
  children: ReactNode;
  companies: ReactNode;
  skills: ReactNode;
  designations: ReactNode;
  cities: ReactNode;
  category: ReactNode;
  otherJobs: ReactNode;
}

interface TabButtonProps {
  label: string;
  targetRef: React.RefObject<HTMLDivElement> ;
  isActive: boolean;
  onActivate: (label: string) => void;
}

export default function JobsLayout({
  children,
  companies,
  skills,
  designations,
  cities,
  category,
  otherJobs
}: JobsLayoutProps) {
  const sections = {
    companies: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    designations: useRef<HTMLDivElement>(null),
    cities: useRef<HTMLDivElement>(null),
    category: useRef<HTMLDivElement>(null),
    otherJobs: useRef<HTMLDivElement>(null)
  };
  const [activeTab, setActiveTab] = useState<string>('Companies');
  return (
    <div className="container mx-auto px-4">
      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 bg-white z-10 border-b">
        <div className="flex overflow-x-auto py-2 gap-1">
          {/* <TabButton label="Featured" targetRef={""} /> */}
          {/* <TabButton
            label="Featured"
            targetRef={null}
            isActive={activeTab === 'Featured'}
            onActivate={setActiveTab}
          /> */}
          <TabButton
            label="Companies"
            targetRef={sections.companies as any}
            isActive={activeTab === 'Companies'}
            onActivate={setActiveTab}
          />
          <TabButton
            label="Skills"
            targetRef={sections.skills as any}
            isActive={activeTab === 'Skills'}
            onActivate={setActiveTab}
          />
          <TabButton
            label="Designations"
            targetRef={sections.designations as any}
            isActive={activeTab === 'Designations'}
            onActivate={setActiveTab}
          />
          <TabButton
            label="Cities"
            targetRef={sections.cities as any}
            isActive={activeTab === 'Cities'}
            onActivate={setActiveTab}
          />
          <TabButton
            label="Category"
            targetRef={sections.category as any}
            isActive={activeTab === 'Category'}
            onActivate={setActiveTab}
          />
          <TabButton
            label="Other Jobs"
            targetRef={sections.otherJobs as any}
            isActive={activeTab === 'Other Jobs'}
            onActivate={setActiveTab}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="py-6">
        <div>{children}</div>

        <div ref={sections.companies} id="companies-section">
          {companies}
        </div>
        <div ref={sections.skills} id="skills-section">
          {skills}
        </div>
        <div ref={sections.designations} id="designations-section">
          {designations}
        </div>
        <div ref={sections.cities} id="cities-section">
          {cities}
        </div>
        <div ref={sections.category} id="category-section">
          {category}
        </div>
        <div ref={sections.otherJobs} id="other-jobs-section">
          {otherJobs}
        </div>
      </div>
    </div>
  );
}

function TabButton({ label, targetRef,isActive, onActivate }: TabButtonProps) {
 
  const handleClick = () => {
    onActivate(label);
    console.log("(targetRef.current",targetRef.current)
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Scroll to top if Featured is clicked
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={handleClick}
      // className="whitespace-nowrap px-4 py-2 rounded-t-lg hover:bg-gray-100"
      className={`whitespace-nowrap px-4 py-2   ${
        isActive ? 'border-b-2 text-blue-600 border-blue-600 transition-colors duration-200' : 'border-transparent hover:bg-gray-100'
      }`}
      
    >
      {label}
    </Button>
  );
}
