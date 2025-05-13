import audi from "../assets/Brands/audi.webp";
import bmw from "../assets/Brands/bmw.webp";
import lexus from "../assets/Brands/lexus.webp";
import mercedes from "../assets/Brands/mercedes.webp";
import mitsubishi from "../assets/Brands/mitsubishi.webp";
import nissan from "../assets/Brands/nissan.webp";
import toyota from "../assets/Brands/toyota.webp";
import dodge from "../assets/Brands/dodge.webp";
import jeep from "../assets/Brands/jeep.webp";
import infinity from "../assets/Brands/infiniti.webp";
import Marquee from "react-fast-marquee";

const brands = [
  toyota,
  audi,
  bmw,
  lexus,
  mercedes,
  mitsubishi,
  dodge,
  nissan,
  infinity,
  jeep,
];

const Brands = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 pb-20">
      <div className="flex items-center justify-between mb-4 w-full ">
        <h1 className="text-3xl font-medium mb-6">Top Brands</h1>
      </div>
      <Marquee gradient gradientColor="#f9fafb" className="gap-6">
        <div className="flex items-center gap-6 overflow-x-auto ">
          {brands.map((b) => (
            <div className="h-32 w-32 rounded-lg border flex flex-shrink-0 items-center justify-center p-3 bg-gray-50">
              <img src={b} alt="logo" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
