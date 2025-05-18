export interface ILink {
    path: string;
    name: string;
    label: string;
    nestedLinks?: ILink[]; // Optional property for nested links
}

export const mainMenuLinks: ILink[] = [
    { path: "/page", name: "Jobs", label: "Jobs" }
];

export const dropdownMenuLinks: ILink[] = [
    { path: "/jobs/search", name: "Search", label: "Search" },
    // { path: "/page", name: "SearchByCategories", label: "Search By Categories" }
];

export const furtherNestedCategoriesLinks: ILink[] = [
    { path: "/job-search/jobs-in-delhi", name: "JobsInDelhi", label: "Jobs In Delhi" },
    { path: "/job-search/jobs-in-mumbai", name: "JobsInMumbai", label: "Jobs In Mumbai" },
    { path: "/job-search/jobs-in-banglore", name: "JobsInBangalore", label: "Jobs In Bangalore" },
    { path: "/job-search/jobs-in-chennai", name: "JobsInChennai", label: "Jobs In Chennai" },
    { path: "/job-search/jobs-in-pune", name: "JobsInPune", label: "Jobs In Pune" },
    { path: "/job-search/location", name: "ViewAll", label: "View All" }
];

export const searchByCategoriesLinks: ILink[] = [
    {
        path: "/page",
        name: "City",
        label: "City",
        nestedLinks: furtherNestedCategoriesLinks // Nested links for City
    },
    {
        path: "/page/skills",
        name: "Skills",
        label: "Skills",
        nestedLinks: [
            { path: "/page/skills/javascript", name: "JavaScript", label: "JavaScript" },
            { path: "/page/skills/react", name: "React", label: "React" },
            { path: "/page/skills/angular", name: "Angular", label: "Angular" },
            { path: "/page/skills/vue", name: "Vue", label: "Vue" },
            { path: "/page/skills/nodejs", name: "Node.js", label: "Node.js" }
        ]
    },
    {
        path: "/page/designation",
        name: "Designation",
        label: "Designation",
        nestedLinks: [
            { path: "/page/designation/engineer", name: "Engineer", label: "Engineer" },
            { path: "/page/designation/manager", name: "Manager", label: "Manager" },
            { path: "/page/designation/designer", name: "Designer", label: "Designer" },
            { path: "/page/designation/analyst", name: "Analyst", label: "Analyst" },
            { path: "/page/designation/consultant", name: "Consultant", label: "Consultant" }
        ]
    },
    {
        path: "/page/companies",
        name: "Companies",
        label: "Companies",
        nestedLinks: [
            { path: "/page/companies/google", name: "Google", label: "Google" },
            { path: "/page/companies/amazon", name: "Amazon", label: "Amazon" },
            { path: "/page/companies/facebook", name: "Facebook", label: "Facebook" },
            { path: "/page/companies/microsoft", name: "Microsoft", label: "Microsoft" },
            { path: "/page/companies/tesla", name: "Tesla", label: "Tesla" }
        ]
    },
    {
        path: "/page/otherjobs",
        name: "OtherJobs",
        label: "Other Jobs",
        nestedLinks: [
            { path: "/page/otherjobs/accountant", name: "Accountant", label: "Accountant" },
            { path: "/page/otherjobs/teacher", name: "Teacher", label: "Teacher" },
            { path: "/page/otherjobs/salesperson", name: "Salesperson", label: "Salesperson" },
            { path: "/page/otherjobs/doctor", name: "Doctor", label: "Doctor" },
            { path: "/page/otherjobs/nurse", name: "Nurse", label: "Nurse" }
        ]
    }
];

export const otherLinks: ILink[] = [
    { path: "/page", name: "JobsAlerts", label: "Jobs Alerts" },
    { path: "/job-search", name: "JobsSearch", label: "Jobs Search" }
];
