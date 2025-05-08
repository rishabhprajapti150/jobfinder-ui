"use client"
import { LinkButton } from "@/components/CommonComponents"
import Image from "next/image"
import '@/styles/style.css'

function Slider() {
    // const images = ['/jobLookingOne.jpg', '/jobLookingTwo.jpg', '/jobLookingThree.jpg']
    
    return (
        <>
            <div className="relative">

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
            </div>

        </>
    )
}
export default Slider