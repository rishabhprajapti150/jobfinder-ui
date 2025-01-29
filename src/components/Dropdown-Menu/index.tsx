
import { useState } from "react";
import { LinkButton } from "../CommonComponents";
import { StudentNavItems } from "@/types/sidebar";

interface DropdownMenuProps {
    label: string;
    items: string[];
    marginBottom?: string
    onMouseEnter?: (value: string) => void
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, marginBottom, onMouseEnter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navItems = [...Object.values(StudentNavItems)]
    const mouseHoverCss = "px-2 bg-[#145af3] text-white rounded transition-all duration-300 ease-out transform scale-105";
    return (
        <div
            onMouseEnter={() => { setIsHovered(true); onMouseEnter?.(label) }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex items-center w-full cursor-pointer transition-all duration-200 
                ${isHovered === navItems.includes(label as StudentNavItems) ? mouseHoverCss : ''} ${isOpen ? marginBottom ? marginBottom : 'mb-32' : ''}`
            }
        >
            {/* Icon */}
            {/* <svg className="w-5 h-5" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387" />
            </svg> */}
            <svg className="w-5 h-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"></path>
            </svg>

            {/* Main Button */}
            <div className="flex items-center justify-between w-full">
                <LinkButton type="button" className="transition-all duration-100 ease-in" key={label}>
                    {label}
                </LinkButton>

                {/* Dropdown Arrow */}
                <svg className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            {/* Dropdown Items */}
            {isOpen && (
                <div className="absolute top-10 flex flex-col items-baseline left-5">
                    {items.map((item, index) => (
                        <LinkButton type="button" key={index} className="block py-2 text-black text-sm">
                            {item}
                        </LinkButton>
                    ))}
                </div>
            )}
        </div>
    );
};
export default DropdownMenu