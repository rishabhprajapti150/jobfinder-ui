// components/CompanyList/CompanyList.tsx
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Company {
  name: string;
  jobs: number;
  slug?: string; // For URL routing
}

interface CompanyListProps {
  title?: string;
  companies: Company[];
  viewAllLink?: string;
  compareLink?: string;
  maxColumns?: number;
  theme?: "primary" | "secondary";
  showJobCount?: boolean;
  showProgressBar?: boolean;
  showHiringBadge?: boolean;
}

export function CoustomViewAllJobSearch({
  title = "Top Companies Hiring Now",
  companies,
  viewAllLink = "#",
  compareLink = "#",
  maxColumns = 4,
  theme = "primary",
  showJobCount = true,
  showProgressBar = true,
  showHiringBadge = true,
}: CompanyListProps) {
  // Theme configuration
  const themeClasses = {
    primary: {
      text: "text-blue-600",
      hoverText: "text-blue-800",
      bg: "bg-blue-50",
      border: "border-blue-300",
      progress: "bg-blue-500",
      badge: "bg-blue-100 text-blue-800",
    },
    secondary: {
      text: "text-purple-600",
      hoverText: "text-purple-800",
      bg: "bg-purple-50",
      border: "border-purple-300",
      progress: "bg-purple-500",
      badge: "bg-purple-100 text-purple-800",
    },
  };

  const currentTheme = themeClasses[theme];

  // Responsive column calculation
  const gridClasses = [
    "grid",
    "grid-cols-1",
    maxColumns >= 2 && "sm:grid-cols-2",
    maxColumns >= 3 && "lg:grid-cols-3",
    maxColumns >= 4 && "xl:grid-cols-4",
    maxColumns >= 5 && "2xl:grid-cols-5",
    "gap-4",
  ].filter(Boolean).join(" ");

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <BuildingOffice2Icon className={`h-8 w-8 ${currentTheme.text}`} />
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className={`${currentTheme.text} hover:${currentTheme.hoverText} font-medium flex items-center gap-1 group`}
          >
            View all companies
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        )}
      </div>

      {/* Company Grid */}
      <div className={gridClasses}>
        {companies.map((company, index) => (
          <Link
            key={index}
            href={company.slug || `#${company.name.toLowerCase().replace(/\s+/g, '-')}`}
            className={`group p-4 rounded-lg border border-gray-200 hover:${currentTheme.border} hover:${currentTheme.bg} transition-all duration-200`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`font-semibold text-gray-900 group-hover:${currentTheme.hoverText} transition-colors`}>
                  {company.name}
                </h3>
                {showJobCount && (
                  <p className="text-sm text-gray-500 mt-1">
                    {company.jobs.toLocaleString()} open positions
                  </p>
                )}
              </div>
              {showHiringBadge && (
                <span className={`text-xs ${currentTheme.badge} px-2 py-1 rounded-full`}>
                  Hiring
                </span>
              )}
            </div>
            {showProgressBar && (
              <div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${currentTheme.progress} rounded-full`}
                  style={{ width: `${Math.min(100, company.jobs / 30)}%` }}
                ></div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Footer */}
      {/* {compareLink && (
        <div className="mt-6 flex justify-center md:justify-end">
          <Link
            href={compareLink}
            className={`px-6 py-2 ${currentTheme.text} border-${currentTheme.border.split('-')[1]}-300 hover:${currentTheme.bg} flex items-center gap-2 rounded-lg border`}
          >
            <BuildingOffice2Icon className="h-5 w-5" />
            Compare companies
          </Link>
        </div>
      )} */}
    </div>
  );
}