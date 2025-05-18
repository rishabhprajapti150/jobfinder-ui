export default function ViewAllJobSearchLoadingComponent() {
     const gridClasses = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4";
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
        {/* Skeleton Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Skeleton Company Grid */}
        <div className={gridClasses}>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                 
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  
                </div>
               
                  <div className="h-5 w-12 bg-gray-200 rounded-full animate-pulse"></div>
            
              </div>
              
            </div>
          ))}
        </div>
      </div>
    )
}