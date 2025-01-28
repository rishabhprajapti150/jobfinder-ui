import Image from "next/image"
import { LinkButton } from "../CommonComponents"
import React from "react"
import '@/styles/style.css'
import { dropdownMenuLinks, mainMenuLinks, otherLinks, searchByCategoriesLinks } from "@/utils/menuLinks"
import dynamic from "next/dynamic"
const Sidebar = dynamic(() => import('@/components/Layout/Sidebar'), { loading: () => <p>Loading...</p> })
function Header() {
    const isLogin = true
    const [hasLogin, setHasLogin] = React.useState<boolean>(false)
    const [isSideBar, setSidebar] = React.useState<boolean>(false)


    return (
        <>
            <div className="flex items-center justify-between bg-white rounded hidden sm:flex md:flex lg:flex">
                <div>
                    <Image
                        src="/file.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
                <div className=" flex items-center  flex-row mx-10">
                    <div key={'home'} className="p-4 ">
                        <LinkButton type="link" id="nav-btn-animation" href={"/page"} className="text-xl font-serif hover:text-[#145af3] text-[#145af3]">Home</LinkButton>
                    </div>

                    <div key={'JobContainer'} className="JobContainer relative p-4 w-full">
                        {/* Main Menu */}
                        {mainMenuLinks.map((link) => (
                            <LinkButton
                                key={link.name || link.label}
                                type="link"
                                href={link.path}
                                id="nav-btn-animation"
                                className="JobButton text-xl font-serif hover:text-[#145af3]"
                            >
                                {link.label}
                            </LinkButton>
                        ))}

                        {/* Dropdown Menu */}
                        <div key={'JobOptionsMenu'} className="JobOptionsMenu absolute bg-white shadow-md rounded top-16 flex flex-col w-[250px] hidden">
                            {dropdownMenuLinks.map((link, index) => (
                                <LinkButton
                                    key={index}
                                    type="link"
                                    href={link.path}
                                    id={`job-search-btn`}
                                    className="text-lg font-serif my-1 mx-3 hover:text-[#145af3]"
                                >
                                    {link.label}
                                </LinkButton>
                            ))}

                            {/* Search By Categories */}
                            <div key={'searchByCategories'} className="relative searchByCategories">
                                <LinkButton
                                    type="link"
                                    href="SearchByCategories"
                                    id={`job-search-btn`}
                                    className="text-lg font-serif my-1 mx-3 hover:text-[#145af3]"
                                >
                                    {'Search By Categories'}
                                </LinkButton>
                                <div key={'searchByCategoriesLinks'} className="absolute bg-white shadow-md rounded w-[250px] flex flex-col top-[-30px] left-[250px] searchByCategoriesDropdown">

                                    {searchByCategoriesLinks.map((link) => (
                                        <div className="relative searchByCategoriesLinksDropdown" key={link.name || link.path}>
                                            <LinkButton
                                                key={link.name || link.path}
                                                type="link"
                                                href={link.path}
                                                id={`job-search-btn`}
                                                className="text-sm font-serif my-1 mx-3 hover:text-[#145af3]"
                                            >
                                                {link.label}
                                            </LinkButton>
                                            <div key={`dropdown-${link.name || link.path}`} className="searchByNestLinksDropdown fixed bg-white shadow-md rounded w-[250px] flex flex-col  top-20 right-[120px]">
                                                {link.nestedLinks?.map((nestedLink) => (
                                                    <LinkButton
                                                        key={nestedLink.name || nestedLink.path}
                                                        type="link"
                                                        href={nestedLink.path}
                                                        id={`job-search-btn`}
                                                        className="text-sm font-serif my-1 mx-3 hover:text-[#145af3]"
                                                    >
                                                        {nestedLink.label}
                                                    </LinkButton>
                                                ))}
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>

                            {/* Other Links */}
                            {otherLinks.map((link, index) => (
                                <LinkButton
                                    key={index}
                                    type="link"
                                    href={link.path}
                                    id={`job-search-btn`}
                                    className="text-lg font-serif my-1 mx-3 hover:text-[#145af3]"
                                >
                                    {link.label}
                                </LinkButton>
                            ))}
                        </div>
                    </div>
                    <div className="p-4">
                        <LinkButton key={'About'} type="link" id="nav-btn-animation" href={"/page"} className="text-xl font-serif hover:text-[#145af3]">About</LinkButton>
                    </div>
                    <div className="p-4">
                        <LinkButton key={'Blog'} type="link" id="nav-btn-animation" href={"/page"} className="text-xl font-serif hover:text-[#145af3]">Blog</LinkButton>
                    </div>

                </div>
                {
                    isLogin ? (
                        <div className="hidden relative flex items-end mx-5 gap-5 sm:block md:block lg:block">
                            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setHasLogin(!hasLogin)}>
                                <Image
                                    src="/businessman.png"
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                />
                                <span className="text-xl text-[#145af3]">Hii Rishabh</span>
                            </div>
                            {hasLogin && (


                                <div id="profile-animation" key={'profile-animation'} className="absolute right-0 w-40 bg-white rounded top-14 shadow z-40">
                                    <div className="p-4">
                                        <LinkButton type="button" id="profile-btn-setting" className=" hover:text-[#145af3] transition-all duration-100 ease-in" key={'Profile-btn'}>Profile</LinkButton>
                                        <LinkButton type="button" id="profile-btn-setting" className="hover:text-[#145af3] transition-all duration-100 ease-in" key={'Setting-btn'}>Setting</LinkButton>
                                        <LinkButton type="button" id="profile-btn-setting" className="hover:text-[#145af3] transition-all duration-100 ease-in" key={'LogOut-btn'}>LogOut</LinkButton>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-end mx-5 gap-5">
                            <LinkButton type="button" className="py-3 px-4 bg-[#145af3] text-white hover:bg-[#2278f9] hover:transition-all hover:duration-200" key={'Login'}>Login</LinkButton>
                            <LinkButton type="button" className="bg-white py-3 px-4 text-[#145af3] border border-[#145af3]" key={'Sign Up'}>Sign Up</LinkButton>
                        </div>
                    )
                }

            </div>

            {/* header for mobile */}
            <div className="relative">
                <div className="flex items-center justify-between bg-white rounded md:hidden lg:hidden py-3">
                    <div className="flex items-center px-2" onClick={() => setSidebar(true)}>
                        <svg className="w-10 h-10 cursor-pointer" data-slot="icon" fill="none" strokeWidth={"1.5"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>

                    </div>
                    <div>
                        {
                            isLogin ? (
                                <div className="relative flex items-end mx-5 gap-5">
                                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => setHasLogin(!hasLogin)}>
                                        <Image
                                            src="/businessman.png"
                                            width={40}
                                            height={40}
                                            alt="Picture of the author"
                                        />
                                        {/* <span className="text-xl text-[#145af3]">Hii Rishabh</span> */}
                                    </div>
                                    {hasLogin && (


                                        <div id="profile-animation" key={'profile-animation'} className="absolute right-0 w-40 bg-white rounded top-14 shadow z-40">
                                            <div className="border-b-2 border-[#145af3] w-full flex items-center justify-center"> <span className="text-xl text-center">Hii Rishabh</span></div>

                                            <div className="p-4">
                                                <LinkButton type="button" id="profile-btn-setting" className=" hover:text-[#145af3] transition-all duration-100 ease-in" key={'Profile-btn'}>Profile</LinkButton>
                                                <LinkButton type="button" id="profile-btn-setting" className="hover:text-[#145af3] transition-all duration-100 ease-in" key={'Setting-btn'}>Setting</LinkButton>
                                                <LinkButton type="button" id="profile-btn-setting" className="hover:text-[#145af3] transition-all duration-100 ease-in" key={'LogOut-btn'}>LogOut</LinkButton>

                                            </div>

                                        </div>
                                    )}

                                </div>
                            ) : (
                                <div className="flex items-end mx-5 gap-5">
                                    <LinkButton type="button" className="py-1 px-3 bg-[#145af3] text-white hover:bg-[#2278f9] hover:transition-all hover:duration-200" key={'Login'}>Login</LinkButton>
                                    <LinkButton type="button" className="bg-white py-1 px-3 text-[#145af3] border border-[#145af3]" key={'Sign Up'}>Sign Up</LinkButton>
                                </div>
                            )
                        }
                    </div>


                </div>
                {isSideBar && (
                    <Sidebar isVisible={isSideBar} onClose={() => setSidebar(false)} />
                )}



            </div >

            {/* close header for mobile */}
        </>
    )
}
export default Header

