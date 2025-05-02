"use client"

import Input from "@/components/Input/index";
import JobSeachByLocationComponent, { IJobSearchLists } from "@/components/Job-Search/page";
import Modal from "@/components/Model";
import Radio from "@/components/Radio";
// import CustomRadio from "@/components/Radio";
import useToggle from "@/utils/hooks/useToggle";
import specificJobDetails from "@/utils/mock-json";

export default function JobsInBanglore() {
  const [isMoreFilter, setMoreFilter] = useToggle(false)
  return (
    <>
      {isMoreFilter && (
        <Modal onClose={setMoreFilter} isOpen={isMoreFilter}>
          <div className="space-y-6">
            <h2 className="capitalize font-bold border-b-2">Sort and filters</h2>
            <div className="flex items-center justify-between">
              <h3>Sort By</h3>
              <Radio options={["Relevance"]} name="Relevance" defaultValue={"Relevance"} onChange={() => console.log("Relevance")} />
              <Radio options={["Freshness"]} name="Freshness" onChange={() => console.log("Relevance")} />
            </div>
          </div>

        </Modal>
      )}
      <div className="bg-white pl-7 pr-7 pt-7 pb-1">
        <div className="flex items-end justify-between">
          <div>
            <h2>25,018 Jobs in Delhi</h2>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="">Filter By</div>
            <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-4 py-3 cursor-pointer h-10">
              <h2 className="text-sm">Location</h2>
              <div className="flex items-center">
                <svg className="w-3 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
            <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-6 py-3 cursor-pointer h-10">
              <h2 className="text-sm">Experience</h2>
              <div className="flex items-center">
                <svg className="w-3 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
            <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-6 py-3 cursor-pointer h-10">
              <h2 className="text-sm">Salary</h2>
              <div className="flex items-center">
                <svg className="w-3 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
            <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-6 py-3 cursor-pointer h-10" onClick={() => setMoreFilter()}>
              <h2 className="text-sm text-blue-500 ">More Filter</h2>

            </div>
          </div>
        </div>
      </div>
      <JobSeachByLocationComponent
        jobs={specificJobDetails as unknown as IJobSearchLists[]}
        specificJobDetails={specificJobDetails as unknown as IJobSearchLists[]}
        title="Jobs in Delhi"
        showPagination={true}
        jobsPerPage={3}
        handleApply={(jobDetails) => alert(`Applying for: ${jobDetails.title} at ${jobDetails.company}`)}
      />
    </>
  );
}