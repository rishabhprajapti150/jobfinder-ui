import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import { LinkButton } from '../CommonComponents';
import DropdownMenu from '../Dropdown-Menu';
import { JobsByCity, JobsByCompany, JobsByDesignation, JobsBySkill, OtherJobOpportunities, StudentNavItems } from '@/types/sidebar';

interface SidebarProps {
    isVisible: boolean;
    onClose: () => void;
}


export default function Sidebar({ isVisible, onClose }: SidebarProps) {
    const sidebarRef = React.useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = React.useState(false);
    const [isActiveHover, setIsActiveHover] = React.useState<string>(StudentNavItems.HOME);


    // Close the sidebar when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsClosing(true);
                setTimeout(onClose, 300); // Match this timeout with your CSS transition duration
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isVisible, onClose]);

    // Handle the close animation
    React.useEffect(() => {
        if (!isVisible) {
            setIsClosing(false);
        }
    }, [isVisible]);

    const mouseHoverCss = "px-2 bg-[#145af3] text-white rounded transition-all duration-300 ease-out transform scale-105";

    return (
        <>
            {isVisible && (
                <div id="student-sidebar" className="fixed inset-0 z-30 bg-black bg-opacity-25 overflow-y-auto">
                    <div
                        ref={sidebarRef}
                        className={`bg-white w-[70%] z-30 min-h-screen top-0 sm:hidden md:hidden lg:hidden absolute ${isClosing ? "close" : "open"} sm:w-[60%]`}
                    >
                        <div className="flex items-center justify-center border-b-2">
                            <Image
                                src="/file.png"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='flex flex-col px-4 mt-4'>
                            <div onMouseEnter={() => setIsActiveHover(StudentNavItems.HOME)} className={`flex items-center ${isActiveHover === StudentNavItems.HOME ? mouseHoverCss : ''}`}>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap='round' strokeLinejoin='round' d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                                <LinkButton type="button" id="mobile-home-btn" className="hover:text-white" key={'Profile-btn'}>Home</LinkButton>

                            </div>

                            {/* Jobs Dropdown */}
                            <DropdownMenu
                                label={StudentNavItems.JOB_OPPORTUNITIES}
                                items={["Search", "Job Alerts", "Job Search"]}
                                marginBottom="mb-32"
                                onMouseEnter={(value: string) => setIsActiveHover(value)}
                            />

                            {/* Find By City */}
                            <DropdownMenu
                                marginBottom="mb-56"
                                onMouseEnter={(value: string) => setIsActiveHover(value)}
                                label={StudentNavItems.JOBS_BY_CITY} items={[...Object.values(JobsByCity)]} />

                            {/* Find By Skill */}
                            <DropdownMenu
                                label={StudentNavItems.JOBS_BY_SKILL}
                                onMouseEnter={(value: string) => setIsActiveHover(value)}
                                items={[...Object.values(JobsBySkill)]}
                                marginBottom="mb-56"
                            />

                            {/* Find By Destination */}
                            <DropdownMenu
                                label={StudentNavItems.JOBS_BY_DESTINATION}
                                onMouseEnter={(value: string) => setIsActiveHover(value)}
                                items={[...Object.values(JobsByDesignation)]}
                                marginBottom="mb-56"
                            />

                            {/* Find By Companies */}
                            <DropdownMenu label={StudentNavItems.JOBS_BY_COMPANY}
                                onMouseEnter={(value: string) => setIsActiveHover(value)}
                                items={[...Object.values(JobsByCompany)]}
                                marginBottom="mb-56"
                            />

                            {/* Other Jobs */}
                            <DropdownMenu
                                label={StudentNavItems.OTHER_OPPORTUNITIES}
                                onMouseEnter={(value: string) => setIsActiveHover(value)}
                                marginBottom="mb-52"
                                items={[...Object.values(OtherJobOpportunities)]} />

                            <div onMouseEnter={() => setIsActiveHover(StudentNavItems.ABOUT_US)} className={`flex items-center ${isActiveHover === StudentNavItems.ABOUT_US ? mouseHoverCss : ''}`}>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path>
                                </svg>
                                <LinkButton type="button" className=" transition-all duration-100 ease-in" key={'Profile-btn'}>About</LinkButton>

                            </div>
                            <div onMouseEnter={() => setIsActiveHover('Blog')} className={`flex items-center ${isActiveHover === 'Blog' ? mouseHoverCss : ''}`}>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"></path>
                                </svg>
                                <LinkButton type="button" className="transition-all duration-100 ease-in" key={'Profile-btn'}>Blog</LinkButton>

                            </div>
                        </div>
                    </div>
                </div >
            )
            }
        </>
    );
}