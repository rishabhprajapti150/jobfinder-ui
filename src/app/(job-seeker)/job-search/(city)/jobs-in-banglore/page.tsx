"use client"

import CustomCheckbox from "@/components/Checkbox";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input/index";
import JobSeachByLocationComponent, { IJobSearchLists } from "@/components/Job-Search/page";
import Modal from "@/components/Model";
import Radio from "@/components/Radio";
// import CustomRadio from "@/components/Radio";
import useToggle from "@/utils/hooks/useToggle";
import specificJobDetails from "@/utils/mock-json";
import React, { useState } from "react";
import { JobFilterCategoryValue } from "@/utils/mock-json";
import FilterByJobValueComponent from "@/components/SortByFilterComponent/FilterByJobValue";
import CityComponmentFilter from "@/components/SortByFilterComponent/MoreFilterByCity";
export default function JobsInDelhi() {
  

  const convertType=JobFilterCategoryValue as any
  return (
    <>
      {(
        <CityComponmentFilter
        title="25,018 Jobs in Delhi"
        onApplyFilters={(value)=>console.log("onApplyFilters",value)}
        />
      )}
    
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