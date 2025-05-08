import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface TopCitiesProps {
  citiesA: string[];
}

const TopCities = () => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
 // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    const citiesA: string[] = [
      "Adra", "Agartala", "Agra", "Ahmedabad", "Ahmednagar", "Aizawl", "Ajmer", "Akola",
      "Aligarh", "Alirajpur", "All India", "Allahabad", "Almora", "Alwar", "Amalapuram",
      "Ambala", "Ambattur", "Ambedkar Nagar", "Ambernath", "Amravati", "Amreli",
      "Amritsar", "Amroha", "Anand", "Anantnag", "Anantpur", "Andaman-Nicobar",
      "Andhra Pradesh", "Angul", "Anjaw", "Ankleshwar", "Anuppur", "Apra", "Araria",
      "Ariyalur", "Arunachal Pradesh", "Arwal", "Asansol", "Ashoknagar", "Assam",
      "Auraiya", "Aurangabad", "Azamgarh"
    ];
    
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Job Search by Top Cities</h1>

      <div className="flex flex-col lg:flex-row">
        {/* Alphabet Filter */}
        <div className="mb-6 lg:mb-0 lg:w-1/6">
          <div className="grid grid-cols-6 gap-2 lg:flex lg:flex-col lg:gap-1">
            {alphabets.map((letter) => (
              <Link
              href={`/job-search/location/${letter}`}
                key={letter}
                className={`text-center py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition ${
                  letter === "A" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                }`}
              >
                {letter}
              </Link>
            ))}
          </div>
        </div>

        {/* City List */}
        <div className="lg:w-5/6 bg-white rounded shadow p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Top Cities by Letter A</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {citiesA.map((city) => (
              <li key={city}>
                <Link href={`/job-search/jobs-in-delhi`} className="text-blue-700 hover:underline">
                  Jobs in {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopCities;



