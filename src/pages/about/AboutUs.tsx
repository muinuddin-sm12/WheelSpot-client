import { FaUsersGear } from "react-icons/fa6";
import img from '../../assets/about-sec.jpg'

const AboutUs = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 md:py-14 lg:py-16 py-10">
        <div>
            <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-[#D32F2F] text-white text-2xl flex items-center justify-center">
                <FaUsersGear/>
                </div>
                <span className="text-xl ">About Us</span>
            </div>
            <p className="text-xl font-medium mb-2 leading-6">To become the leading, most fair and trustworthy luxury car dealership in the UAE</p>
            <div className="h-[70vh] overflow-hidden w-full mb-3">
                <img className="h-full object-cover w-full" src={img} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <p><strong>WHEEL SPOT</strong> is a luxury <strong>car dealership</strong> located in the Al Quoz region of Dubai. It is one of the select few dealerships in UAE that specializes in the purchase and sale of high-end British and German luxury cars along with other select few car brands. WHEEL SPOT was established with the purpose of serving car buyers and sellers with the best-in-class deals and service.</p>
                <p>A few popular used luxury car brands WHEEL SPOT deals in include Audi, BMW, Mercedes-Benz, GMC, Jaguar, Ford, Maserati,Volkswagen, Volvo and many more. We buy and sell a broad selection of car types which include Hatchback, Sedan, SUV/Crossovers, Coupe and Convertibles.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs