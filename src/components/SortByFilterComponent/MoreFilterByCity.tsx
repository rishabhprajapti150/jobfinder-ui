import React, { useState } from 'react';

// import FilterByJobValueComponent from './FilterByJobValueComponent'; // Your filter value component
import { JobFilterCategoryValue } from '@/utils/mock-json';
import FilterByJobValueComponent from './FilterByJobValue';
import Modal from '@/components/ui/model';
import Radio from '@/components/ui/radio';
import useToggle from '@/utils/hooks/useToggle';

interface FilterOption {
    value: string;
    label: string;
}

interface FilterCategory {
    name: string;
    displayName: string;
    options: FilterOption[];
}

interface ReusableFilterProps {
    title: string; // e.g. "25,018 Jobs in Delhi"
    // defaultSelectedValues: Record<string, string[]>;
    sortOptions?: {
        name: string;
        options: FilterOption[];
    };
    onApplyFilters: (filters: Record<string, string[]>) => void;
}

const CityComponmentFilter: React.FC<ReusableFilterProps> = ({
    title,
    sortOptions = {
        name: 'Sort By',
        options: [
            { value: 'Relevance', label: 'Relevance' },
            { value: 'Freshness', label: 'Freshness' },
        ],
    },
    onApplyFilters,
}) => {
    // const [isMoreFilter, setIsMoreFilter] = useState(false);
    const [isMoreFilter, setMoreFilter] = useToggle(false)
    // const [activeFilterCategory, setActiveFilterCategory] = useState(filterCategories[0].name);
    const [activeFilterCategory, setActiveFilterCategory] = React.useState<string>('work mode');
    // const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>(defaultSelectedValues);
    const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({
        'work mode': [],
        'experience': [],
        'department': [],
        'salary': [],
        'company type': [],
        'role category': [],
        'education': [],
        'posted by': [],
        'industry': [],
        'top companies': [],
        'freshness': [],
        'location': []
        // ... initialize all categories
    });
    const [sortedBy, setSortedBy] = useState(sortOptions.options[0].value);

    // const toggleMoreFilter = () => {
    //     setIsMoreFilter(!isMoreFilter);
    // };

    const handleApplyFilters = () => {
        onApplyFilters(selectedValues);
        // setIsMoreFilter(false);
    };
    const jobFilterCategories = [
        'work mode',
        'experience',
        'department',
        'salary',
        'company type',
        'role category',
        'education',
        'posted by',
        'industry',
        'top companies',
        'freshness',
        'location'
    ];
    const convertType = JobFilterCategoryValue as any
    return (
        <>
            {/* Filter Modal */}
            {isMoreFilter && (
                <Modal onClose={()=>{setMoreFilter(); setActiveFilterCategory('work mode') }} isOpen={isMoreFilter}>
                    <div className="space-y-6">
                        <h2 className="capitalize font-bold border-b-2">Sort and filters</h2>

                        {/* Sort Options */}
                        {sortOptions && (
                            <div className="flex items-center justify-between mx-2">
                                <h3>{sortOptions.name}</h3>
                                {sortOptions.options.map((option) => (
                                    <Radio
                                        key={option.value}
                                        name={option.value}
                                        value={option.value}
                                        label={option.label}
                                        checked={sortedBy === option.value}
                                        onChange={(value: string) => setSortedBy(value)}
                                        className="mr-4"
                                    />
                                ))}
                            </div>
                        )}

                        {/* Filter Categories */}
                        <div className="flex justify-start font-bold border-2 gap-5">
                            <div className="font-bold border-r-2 flex flex-col overflow-y-auto">
                                {jobFilterCategories.map((filter) => (
                                    <span
                                        key={filter}
                                        className={`capitalize py-4 px-2 font-bold border-b-2 cursor-pointer ${activeFilterCategory === filter
                                            ? 'border-l-4 border-l-blue-500 text-blue-700'
                                            : 'border-l-4 border-l-transparent'
                                            }`}
                                        onClick={() => setActiveFilterCategory(filter)}
                                    >
                                        {filter}
                                    </span>
                                ))}
                            </div>

                            <FilterByJobValueComponent
                                JobFilterData={convertType[activeFilterCategory]}
                                selectedValues={selectedValues[activeFilterCategory]}
                                onChange={(category: string, values: string[]) => {
                                    console.log("category", category)
                                    console.log("values", values)
                                    setSelectedValues((prev: any) => ({
                                        ...prev,
                                        [category]: values,
                                    }))
                                }}
                            />
                        </div>

                        {/* Apply button section */}
                        <div className="p-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleApplyFilters}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Filter Header */}
            <div className="bg-white pl-7 pr-7 pt-7 pb-1">
                <div className="flex flex-col items-center lg:flex-row gap-3">
                    <div className='w-full'>
                        <h2 className='w-full'>{title}</h2>
                    </div>
                    <div className="flex flex-row flex-wrap items-center gap-5 w-full">
                        <div className="">Filter By</div>

                        <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-4 py-3 cursor-pointer h-10"
                            onClick={() => {
                                setMoreFilter()
                                setActiveFilterCategory('location')
                            }}>
                            <h2 className="text-sm">Location</h2>
                            <div className="flex items-center">
                                <svg className="w-3 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-6 py-3 cursor-pointer h-10" onClick={() => {
                            setMoreFilter()
                            setActiveFilterCategory('experience')
                        }}>
                            <h2 className="text-sm">Experience</h2>
                            <div className="flex items-center">
                                <svg className="w-3 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-[#fff] border-[#ececec] shadow flex items-center justify-between px-6 py-3 cursor-pointer h-10" onClick={() => {
                            setMoreFilter()
                            setActiveFilterCategory('salary')
                        }}>
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
        </>
    );
};


export default CityComponmentFilter;