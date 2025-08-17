// components/ExploreCategory.tsx
"use client"
import React from "react";
import '@/styles/style.css'
import Link from "next/link";

interface Category {
    name: string;
    vacancies: number;
    icon: React.ReactNode;
}

const categories1: Category[] = [
    {
        name: "Marketing",
        vacancies: 123,
        icon: (
            <svg
                className="w-20 text-[#145af3]"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                ></path>
            </svg>
        ),
    },
    {
        name: "Customer Service",
        vacancies: 98,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"></path>
            </svg>
        ),
    },
    {
        name: "Human Resource",
        vacancies: 54,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            </svg>
        ),
    },
    {
        name: "Project Management",
        vacancies: 200,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
            </svg>
        ),
    },
    {
        name: "Sales & Communication",
        vacancies: 32,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"></path>
            </svg>
        ),
    },
    {
        name: "Business Development",
        vacancies: 47,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
            </svg>
        ),
    },
    {
        name: "Design & Creative",
        vacancies: 112,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path>
            </svg>
        ),
    },
    {
        name: "Teaching & Education",
        vacancies: 80,
        icon: (
            <svg className="w-20 text-[#145af3]" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"></path>
            </svg>
        ),
    },
];

const categories = [
  { name: 'Technology', count: 1420, icon: '💻' },
  { name: 'Design', count: 856, icon: '🎨' },
  { name: 'Marketing', count: 643, icon: '📊' },
  { name: 'Finance', count: 532, icon: '💰' },
  { name: 'Healthcare', count: 431, icon: '⚕️' },
  { name: 'Education', count: 327, icon: '🎓' },
  { name: 'Customer Service', count: 295, icon: '🤝' },
  { name: 'Sales', count: 264, icon: '📈' }
];
const ExploreCategory: React.FC = () => {
    return (

        <>
            {/* <div className="flex items-center justify-center m-10">
                <h2 className="text-4xl font-bold text-gray-900 font-sans">
                    Explore By Category
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 mx items-center m-5">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="card bg-white rounded flex flex-col p-8 shadow cursor-pointer"
                    >
                        {category.icon}
                        <p className="text-black capitalize py-1">{category.name}</p>
                        <p className="capitalize text-[#145af3] py-1">{category.vacancies} Vacancies</p>
                    </div>
                ))}
            </div> */}
            {/* Browse by Category */}
      <section className="section-padding bg-white m-10">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore job opportunities in your field of interest
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                href={`/jobs/category/${category.name.toLowerCase()}`} 
                className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:border-jobblue-300 hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-3">{category.icon}</span>
                <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
        </>
    );
};

export default ExploreCategory;


