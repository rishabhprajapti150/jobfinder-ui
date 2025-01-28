import { LinkButton } from "@/components/CommonComponents"
import Image from "next/image"


export default function BestJob() {
    return (
        <div className="flex items-center justify-between mx-5 mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
                <div className="">
                    <div className="flex items-center justify-between gap-3 my-6" >
                        <Image
                            src="/jobHelpImage2.jpg"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                            className="object-cover shadow-md"
                        />
                        <Image
                            src="/jobHelpImage1.jpg"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-6 my-6">
                        <Image
                            src="/jobHelpImage4.jpg"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                        <Image
                            src="/jobHelpImage3.jpg"
                            width={400}
                            height={400}
                            alt="Picture of the author"
                        />
                    </div>
                </div>

                <div className="relative top-[22%]">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="capitalize text-5xl">Helping You Secure Your Dream Job and Find Top Talent</h3>
                        <p className="capitalize my-4 text-gray-500">We connect job seekers with the best opportunities and help employers find skilled professionals. Whether you’re looking for your next career move or seeking top talent, we’ve got you covered.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <svg className="text-blue-600 w-6 h-6 font-bold" data-slot="icon" fill="none" strokeWidth="3.00" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                            </svg>
                            <p className="capitalize text-gray-500">Connecting you with top companies for the best job opportunities</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg className="text-blue-600 w-6 h-6 font-bold" data-slot="icon" fill="none" strokeWidth="3.00" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                            </svg>
                            <p className="capitalize text-gray-500">Helping businesses find skilled talent to drive success</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg className="text-blue-600 w-6 h-6 font-bold" data-slot="icon" fill="none" strokeWidth="3.00" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                            </svg>
                            <p className="capitalize text-gray-500">Matching the right job seekers with the right employers</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <LinkButton type="button" className="text-white font-serif py-4 px-12 bg-[#145af3] rounded">Read More</LinkButton>
                    </div>
                </div>

            </div>

        </div>
    )
}