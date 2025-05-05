import React from "react";
import CustomCheckbox from "../Checkbox";

export type JobFilterCategory = {
  label: string;
  name:string,
  options: {
    value: string;
    label: string;
    count?: number;
  }[];
};

interface FilterByJobValueComponentProps {
  JobFilterData: JobFilterCategory;
  selectedValues: string[];
  onChange: (category: string, values: string[]) => void;
}

function FilterByJobValueComponent({
  JobFilterData,
  selectedValues,
  onChange,
}: FilterByJobValueComponentProps) {
  const handleCheckboxChange = (optionValue: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("optionValue",optionValue);
    console.log("e",e.target.checked);
    
      const isChecked = e.target.checked;
      const newValues = isChecked
        ? [...selectedValues, optionValue]
        : selectedValues.filter((value) => value !== optionValue);

      onChange(JobFilterData.name, newValues);
    };

  return (
    <div className="flex flex-col gap-y-4 mt-2">
      {JobFilterData.options.map((option) => (
        <CustomCheckbox
          key={option.value}
          checked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange(option.value)}
          label={`${option.label} ${option.count ? `(${option.count})` : ''}`}
        />
      ))}
    </div>
  );
}

export default FilterByJobValueComponent;