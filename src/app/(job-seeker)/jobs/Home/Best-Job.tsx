import { LinkButton } from "@/components/CommonComponents"
import Image from "next/image"


export default function BestJob() {
    return (
        // <div className="flex items-center justify-between mx-5 md:mt-24 lg:mt-28">
        //     <div className="grid grid-cols-1 gap-10 p-4 xl:grid-cols-2">
        //         <div className="">
        //             <div className="flex items-center xl:justify-between gap-3 my-6" >
        //                 <Image
        //                     src="/jobHelpImage2.jpg"
        //                     width={400}
        //                     height={400}
        //                     alt="Picture of the author"
        //                     className="w-[180px] h-[180px] object-cover shadow-md 
        //                     sm:w-[350px] sm:h-[350px] 
        //                      lg:w-[400px] lg:h-[400px]"
        //                 />
        //                 <Image
        //                     src="/jobHelpImage1.jpg"
        //                     width={300}
        //                     height={300}
        //                     alt="Picture of the author"
        //                     className="w-[130px] h-[130px] object-cover shadow-md 
        //                     sm:w-[300px] sm:h-[300px] 
        //                      lg:w-[300px] lg:h-[300px]"
        //                 />
        //             </div>

        //             <div className="flex items-center xl:justify-between gap-6 my-6">
        //                 <Image
        //                     src="/jobHelpImage4.jpg"
        //                     width={300}
        //                     height={300}
        //                     alt="Picture of the author"
        //                     className="w-[130px] h-[130px] object-cover shadow-md 
        //                     sm:w-[300px] sm:h-[300px] 
        //                      lg:w-[300px] lg:h-[300px]"
        //                 />
        //                 <Image
        //                     src="/jobHelpImage3.jpg"
        //                     width={400}
        //                     height={400}
        //                     alt="Picture of the author"
        //                     className="w-[180px] h-[180px] object-cover shadow-md 
        //                     sm:w-[350px] sm:h-[350px] 
        //                      lg:w-[400px] lg:h-[400px]"
        //                 />
        //             </div>
        //         </div>

        //         <div className="relative lg:[30%] xl:top-[30%]">
        //             <div className="flex flex-col items-center justify-center">
        //                 <h3 className="capitalize text-5xl">Helping You Secure Your Dream Job and Find Top Talent</h3>
        //                 <p className="capitalize my-4 text-gray-500">We connect job seekers with the best opportunities and help employers find skilled professionals. Whether you’re looking for your next career move or seeking top talent, we’ve got you covered.</p>
        //             </div>
        //             <div className="space-y-4">
        //                 <div className="flex items-center gap-4">
        //                     <svg className="text-blue-600 w-6 h-6 font-bold" data-slot="icon" fill="none" strokeWidth="3.00" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
        //                     </svg>
        //                     <p className="capitalize text-gray-500">Connecting you with top companies for the best job opportunities</p>
        //                 </div>
        //                 <div className="flex items-center gap-4">
        //                     <svg className="text-blue-600 w-6 h-6 font-bold" data-slot="icon" fill="none" strokeWidth="3.00" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
        //                     </svg>
        //                     <p className="capitalize text-gray-500">Helping businesses find skilled talent to drive success</p>
        //                 </div>
        //                 <div className="flex items-center gap-4">
        //                     <svg className="text-blue-600 w-6 h-6 font-bold" data-slot="icon" fill="none" strokeWidth="3.00" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
        //                     </svg>
        //                     <p className="capitalize text-gray-500">Matching the right job seekers with the right employers</p>
        //                 </div>
        //             </div>
        //             <div className="mt-5">
        //                 <LinkButton type="button" className="text-white font-serif py-4 px-12 bg-[#145af3] rounded">Read More</LinkButton>
        //             </div>
        //         </div>

        //     </div>

        // </div>
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-12 lg:py-16 xl:py-20">
            <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 xl:grid-cols-2 w-full max-w-7xl mx-auto">
                {/* Images Grid - Maintaining original size pattern */}
                <div className="order-1">
                    {/* First Row - Big Left, Small Right */}
                    <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6 md:mb-8">
                        <Image
                            src="/jobHelpImage2.jpg"
                            width={600}
                            height={600}
                            alt="Job search assistance"
                            className="w-[60%] h-auto aspect-square object-cover shadow-md rounded-lg"
                        />
                        <Image
                            src="/jobHelpImage1.jpg"
                            width={400}
                            height={400}
                            alt="Career guidance"
                            className="w-[45%] h-auto aspect-square object-cover shadow-md rounded-lg"
                        />
                    </div>

                    {/* Second Row - Small Left, Big Right */}
                    <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-5">
                        <Image
                            src="/jobHelpImage4.jpg"
                            width={400}
                            height={400}
                            alt="Interview preparation"
                            className="w-[45%] h-auto aspect-square object-cover shadow-md rounded-lg"
                        />
                        <Image
                            src="/jobHelpImage3.jpg"
                            width={600}
                            height={600}
                            alt="Job placement"
                            className="w-[60%] h-auto aspect-square object-cover shadow-md rounded-lg"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="order-1 xl:order-2 flex flex-col justify-center mb-8 xl:mb-0 xl:pl-10 2xl:pl-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold leading-tight sm:leading-snug md:leading-normal text-center xl:text-left mb-4 sm:mb-6">
                        Helping You Secure Your Dream Job and Find Top Talent
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-center xl:text-left">
                        We connect job seekers with the best opportunities and help employers find skilled professionals. Whether you're looking for your next career move or seeking top talent, we've got you covered.
                    </p>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        {[
                            "Connecting you with top companies for the best job opportunities",
                            "Helping businesses find skilled talent to drive success",
                            "Matching the right job seekers with the right employers"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 sm:gap-4">
                                <svg className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center xl:text-left">
                        <LinkButton
                            type="button"
                            className="inline-block bg-[#145af3] hover:bg-blue-700 text-white font-medium py-3 px-8 sm:py-3.5 sm:px-10 md:py-4 md:px-12 rounded-lg text-sm sm:text-base md:text-lg transition-colors duration-300"
                        >
                            Read More
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
}


