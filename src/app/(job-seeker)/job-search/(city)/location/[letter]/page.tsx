import Link from "next/link";
import React from "react";





export default async function LetterComponent({params}: { params: Promise<{ letter: string }>}) {
    const { letter } = await params
    console.log("letter",letter)
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    // const res = await fetch(`https://.../data`)
       // const data = await res.json()
       const citiesB: string[] = [
        "Bangalore", "Bhopal", "Bhubaneswar", "Bareilly", "Bikaner", "Bilaspur",
        "Baroda", "Bhatinda", "Bhilai", "Bhiwani", "Bharuch", "Bellary", "Berhampur",
        "Bidar", "Bijapur", "Bardhaman", "Baran", "Balasore"
      ];
      
     return (
       <div className="min-h-screen p-6 bg-gray-100">
         <h1 className="text-3xl font-bold text-gray-800 mb-4">Job Search by Top Cities</h1>
   
         <div className="flex flex-col lg:flex-row">
           {/* Alphabet Filter */}
           <div className="mb-6 lg:mb-0 lg:w-1/6">
             <div className="grid grid-cols-6 gap-2 lg:flex lg:flex-col lg:gap-1">
               {alphabets.map((value) => (
                 <Link
                 href={`${value ==='A' ? '/job-search/location' : `/job-search/location/${value}`}`}
                   key={value}
                   className={`text-center py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition ${
                    value === letter ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                   }`}
                 >
                   {value}
                 </Link>
               ))}
             </div>
           </div>
   
           {/* City List */}
           <div className="lg:w-5/6 bg-white rounded shadow p-6">
             <h2 className="text-2xl font-semibold text-blue-600 mb-4">Top Cities by Letter A</h2>
             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
               {citiesB.map((city) => (
                 <li key={city}>
                   <Link href="/job-search/jobs-in-chennai" className="text-blue-700 hover:underline">
                     Jobs in {city}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     );
  }