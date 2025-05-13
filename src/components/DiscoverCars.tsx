import { GoCheck } from "react-icons/go";
import Img from "../assets/binoculars.png";
import Toyota from "../assets/Brands/toyota.webp";
const DiscoverCars = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 pb-16">
      {/* <div className="flex items-center justify-between mb-4 w-full ">
        <h1 className="text-3xl font-medium mb-6">Discover Cars</h1>
      </div> */}
      <div className="flex flex-col md:flex-row items-center gap-6  ">
        <div className="md:flex-1 relative overflow-hidden flex w-full  items-center justify-between pl-4 md:pl-12 bg-[#E6F4F5] min-h-[270px] rounded-xl">
          <div className="z-[99]">
            <h2 className="text-2xl font-semibold leading-6 mb-4">
              Ready for a new ride?
              <br /> Explore the latest vehicles
            </h2>
            <div>
              <h4 className="flex items-center gap-2">
                <GoCheck className="font-semibold" /> View latest models
              </h4>
              <h4 className="flex items-center gap-2">
                <GoCheck className="font-semibold" /> Compare vehicles
                side-by-side
              </h4>
              <h4 className="flex items-center gap-2">
                <GoCheck className="font-semibold" /> Discover award winning
                cars
              </h4>
            </div>
          </div>
          <div className="h-64 w-64 absolute right-[-40px] top-12">
            <img className="opacity-30 lg:opacity-100" src={Img} />
          </div>
        </div>
        <div className="md:w-[40%] px-4 md:px-10 relative h-full min-h-[270px] pr-12 flex items-center justify-between bg-gray-100 rounded-xl">
          <div>
            <h5 className="text-sm font-semibold mb-1">Featured storefront</h5>
            <h2 className="text-3xl font-bold mb-2">Toyota</h2>
            <p className="">
              Toyota is committed to creating a better, safer future for
              everyone. Their innovative SUVs and hybrid vehicles are renowned
              for reliability, safety, and cutting-edge technology across the
              industry.
            </p>
          </div>
          <div className="h-40 w-40 absolute right-[50px]">
            <img className="opacity-10" src={Toyota} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCars;
