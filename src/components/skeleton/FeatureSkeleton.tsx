const FeatureSkeleton = () => {
    return (
      <>
        <div className="py-6 rounded-lg">
          <div className="animate-pulse">
            {/* <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded mb-4 w-5/6"></div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  
  export default FeatureSkeleton;