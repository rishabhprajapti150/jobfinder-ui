import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import { LinkButton } from '../CommonComponents';

interface SidebarProps {
    isVisible: boolean;
    onClose: () => void;
}
export default function Sidebar({ isVisible, onClose }: SidebarProps) {
    const sidebarRef = React.useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = React.useState(false);

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

    return (
        <>
            {isVisible && (
                <div id="student-sidebar" className="fixed inset-0 z-30 bg-black bg-opacity-25">
                    <div
                        ref={sidebarRef}
                        className={`bg-white w-1/2 z-30 min-h-screen top-0 sm:hidden md:hidden lg:hidden absolute ${isClosing ? "close" : "open"}`}
                    >
                        <div className="flex items-center justify-center border-b-2">
                            <Image
                                src="/file.png"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='flex flex-col px-4'>
                            <div className='flex items-center'>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap='round' strokeLinejoin='round' d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                                <LinkButton type="button" id="profile-btn-setting" className=" hover:text-[#145af3] transition-all duration-100 ease-in" key={'Profile-btn'}>Home</LinkButton>

                            </div>
                            <div className='flex items-center'>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
                                </svg>
                                <LinkButton type="button" id="profile-btn-setting" className=" hover:text-[#145af3] transition-all duration-100 ease-in" key={'Profile-btn'}>Jobs</LinkButton>

                            </div>

                            <div className='flex items-center'>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path>
                                </svg>
                                <LinkButton type="button" id="profile-btn-setting" className=" hover:text-[#145af3] transition-all duration-100 ease-in" key={'Profile-btn'}>About</LinkButton>

                            </div>
                            <div className='flex items-center'>
                                <svg className='w-5 h-5' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"></path>
                                </svg>
                                <LinkButton type="button" id="profile-btn-setting" className=" hover:text-[#145af3] transition-all duration-100 ease-in" key={'Profile-btn'}>Blog</LinkButton>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}