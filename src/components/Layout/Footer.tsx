import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "../CommonComponents";

const Footer = () => {
    return (
        <div className="bg-[#e6f0ff] py-10 px-5 text-center">

            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="max-w-[300px] flex flex-col items-baseline">
                    <Image
                        src="/file.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <p className="text-justify"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                        consequuntur amet culpa cum itaque neque.</p>
                    <div className="flex space-x-4 mt-4">
                        <Link href="#" className="bg-[#145af3] p-2 rounded-full text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 4.96 3.61 9.06 8.32 9.92v-7.03H7.5V12h2.82v-1.56c0-2.8 1.67-4.32 4.22-4.32 1.22 0 2.5.22 2.5.22v2.73h-1.41c-1.38 0-1.81.86-1.81 1.74V12h3.08l-.49 2.96h-2.59v7.03C18.39 21.13 22 17.03 22 12.07z" />
                            </svg>
                        </Link>
                        <Link href="#" className="bg-[#145af3] p-2 rounded-full text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.94 10.94 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </Link>
                        <Link href="#" className="bg-[#145af3] p-2 rounded-full text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-3.47-4-3.21-4 0v5.6h-3v-10h3v1.49c1.39-2.56 7-2.76 7 2.47v6.04z" />
                            </svg>
                        </Link>
                        <Link href="#" className="bg-[#145af3] p-2 rounded-full text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04c-5.52 0-10 4.48-10 10.02 0 4.42 3.63 9.96 10 9.96s10-5.54 10-9.96c0-5.54-4.48-10.02-10-10.02zm4.69 8.35c.01.14.01.28.01.42 0 4.28-3.26 9.21-9.21 9.21-1.83 0-3.53-.54-4.97-1.47.25.03.5.04.76.04 1.52 0 2.92-.52 4.03-1.39-1.41-.03-2.6-.96-3.01-2.24.2.04.41.06.62.06.3 0 .6-.04.87-.12-1.49-.3-2.61-1.62-2.61-3.2v-.04c.44.24.94.39 1.47.41-.87-.58-1.45-1.57-1.45-2.69 0-.59.16-1.13.44-1.6 1.6 1.96 3.99 3.25 6.69 3.38-.06-.23-.08-.46-.08-.7 0-1.69 1.38-3.07 3.07-3.07.89 0 1.69.38 2.25.99.7-.14 1.36-.39 1.95-.74-.23.72-.72 1.32-1.36 1.7.62-.07 1.22-.24 1.78-.49-.42.62-.94 1.16-1.54 1.6z" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-baseline max-w-[300px]">
                    <h4 className="text-[#145af3] text-lg font-semibold mb-4">Company</h4>
                    <div className="flex flex-col gap-3 items-baseline">
                        <LinkButton type="link" href={"#"}>About Us</LinkButton>
                        <LinkButton type="link" href={"#"}>Contact Us</LinkButton>
                        <LinkButton type="link" href={"#"}>Careers</LinkButton>
                        <LinkButton type="link" href={"#"}>Compnay Details</LinkButton>
                    </div>
                </div>
                <div className="flex flex-col items-baseline max-w-[300px]">
                    <h4 className="text-[#145af3] text-lg font-semibold mb-4">Job Seekers</h4>
                    <div className="flex flex-col gap-3 items-baseline">
                        <LinkButton type="link" href={"#"}>Browse Jobs</LinkButton>
                        <LinkButton type="link" href={"#"}>Apply for Jobs</LinkButton>
                        <LinkButton type="link" href={"#"}>View Details</LinkButton>
                        <LinkButton type="link" href={"#"}>Resume Tips</LinkButton>
                    </div>
                </div>
                <div className="flex flex-col items-baseline max-w-[300px]">
                    <h4 className="text-[#145af3] text-lg font-semibold mb-4">Employers</h4>
                    <div className="flex flex-col gap-3 items-baseline">
                        <LinkButton type="link" href={"#"}>Post a Job</LinkButton>
                        <LinkButton type="link" href={"#"}>Employer Login</LinkButton>
                        <LinkButton type="link" href={"#"}>Hiring Guide</LinkButton>
                        <LinkButton type="link" href={"#"}>View Jobs</LinkButton>
                    </div>
                </div>
                <div className="flex flex-col items-baseline max-w-[300px]">
                    <h4 className="text-[#145af3] text-lg font-semibold mb-4 lg:mt-[-28px]">Contact Us</h4>
                    <div className="flex flex-col items-baseline gap-3">
                        <LinkButton
                            className="flex items-center sm:justify-start gap-1.5 group"
                            href="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-black shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>

                            <span className="">
                                john@doe.com
                            </span>
                        </LinkButton>



                        <LinkButton
                            className="flex items-center sm:justify-start gap-1.5 group"
                            href="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-black shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>

                            <span className="transition group-hover:text-white/75">
                                0123456789
                            </span>
                        </LinkButton>


                        <div
                            className="flex items-start justify-center gap-1.5 sm:justify-start"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-black shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            <address className="">
                                213 Lane, London, United Kingdom
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 mt-12 border-t border-gray-800">
                <div className="text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-sm text-gray-400">
                        <span className="block sm:inline">All rights reserved.</span>

                        <LinkButton type="link"
                            className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                            href="/"
                        >
                            Terms & Conditions
                        </LinkButton>

                        <span>&middot;</span>

                        <LinkButton type="link"
                            className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                            href="/"
                        >
                            Privacy Policy
                        </LinkButton>
                    </p>

                    <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                        &copy; 2022 Company Name
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Footer;
