const AllCarsSkeleton = () => {
    return (
      <>
        <div className="py-6 rounded-lg">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="h-[300px] bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AllCarsSkeleton;