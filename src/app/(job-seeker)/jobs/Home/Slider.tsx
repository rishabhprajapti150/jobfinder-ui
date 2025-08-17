"use client"
import { LinkButton } from "@/components/CommonComponents"
import Image from "next/image"
import '@/styles/style.css'
import Link from "next/link"
// import { Search, MapPin } from 'lucide-react';
import  Button  from '@/components/Button/index';
import { CV2Input } from '@/components/Input/CV2Input'
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { CButton } from "@/components/Button/CButton"

function Slider() {
    // const images = ['/jobLookingOne.jpg', '/jobLookingTwo.jpg', '/jobLookingThree.jpg']

    return (
        <>
            {/* <div className="relative">

                <Image
                    src="/jobLookingOne.jpg"
                    width={1920} height={200}
                    alt="slider"
                    className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-y-52 inset-x-4  m-4">
                    <p className="home-heading capitalize text-white text-4xl">find the perfect job that you deserved</p>
                    <p className="home-heading capitalize text-white py-4">Explore a world of possibilities and land the job you’ve been dreaming of. From fresh graduates to experienced professionals, we’ve got roles that cater to every level of expertise. Let’s help you secure a position where your skills shine and your career flourishes.</p>
                    <div className="flex gap-5 lg:py-4">
                        <LinkButton type="button" className="searchBtn text-sm lg:text-lg md:py-3 md:px-9 lg:py-3 lg:px-9 bg-[#145af3] text-white hover:bg-[#2278f9] hover:transition-all hover:duration-200">Search Job</LinkButton>
                        <LinkButton type="button" className="searchBtn text-sm lg:text-lg md:py-3 md:px-9 lg:py-3 lg:px-9 bg-[#145af3] text-white hover:bg-[#2278f9] hover:transition-all hover:duration-200">Find A Talent </LinkButton>
                    </div>

                </div>
            </div> */}
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-500 to-blue-700 pt-16 pb-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-10 animate-fade-in">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                            Find Your Dream Job Today
                        </h1>
                        <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto">
                            Browse through thousands of job listings from top companies and start your career journey with us.
                        </p>
                    </div>

                    <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-1 sm:p-2 flex flex-col sm:flex-row">
                            {/* Job Title or Keywords */}
                            <div className="flex-1 flex items-center px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
                                <CV2Input
                                    type="text"
                                    placeholder="Job title, keywords, or company"
                                    className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-base"
                                />
                            </div>

                            {/* Location */}
                            <div className="flex-1 flex items-center px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-200">
                                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                                <CV2Input
                                    type="text"
                                    placeholder="Location (city, state, or remote)"
                                    className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-base"
                                />
                            </div>

                            {/* Search Button */}
                            <div className="px-1 py-2 sm:p-0 sm:pl-2">
                                <CButton
                                    size="lg"
                                    className="w-full text-white sm:w-auto bg-blue-500 hover:bg-blue-600"
                                >
                                    Search Jobs
                                </CButton>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <span className="text-white opacity-90">Popular searches:</span>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Link href="/jobs/remote" className="text-white hover:underline">Remote</Link>
                            <span className="text-white opacity-50">•</span>
                            <Link href="/jobs/software-engineer" className="text-white hover:underline">Software Engineer</Link>
                            <span className="text-white opacity-50">•</span>
                            <Link href="/jobs/marketing" className="text-white hover:underline">Marketing</Link>
                            <span className="text-white opacity-50">•</span>
                            <Link href="/jobs/design" className="text-white hover:underline">Design</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white py-8 border-b border-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center text-center">
                        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                            <h3 className="text-3xl font-bold text-blue-500">10,000+</h3>
                            <p className="text-gray-600">Active Job Listings</p>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                            <h3 className="text-3xl font-bold text-blue-500">5,000+</h3>
                            <p className="text-gray-600">Companies Hiring</p>
                        </div>
                        <div className="w-full md:w-1/3 px-4">
                            <h3 className="text-3xl font-bold text-blue-500">2M+</h3>
                            <p className="text-gray-600">Job Seekers</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Slider