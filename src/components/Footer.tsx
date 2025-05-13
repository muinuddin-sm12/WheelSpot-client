import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="pt-6 md:pt-16 border-t bg-gray-900 mt-12 "> //bg-[#780002]
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20 pb-4 md:pb-12">
        <div>
          <img className="h-14" src={logo} alt="" />
        </div>
        <div>
          <p className="font-medium text-gray-600 mb-1">Overview</p>
          <div className="text-sm flex flex-col">
            <Link to={"/about-us"} className="hover:text-[#D32F2F]">About Us</Link>
            <Link to={"/"} className="hover:text-[#D32F2F]">Contact Us</Link>
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-600 mb-1">Others</p>
          <div className="text-sm flex flex-col">
            <Link to={"/about-us"} className="hover:text-[#D32F2F]">Privacy Policy</Link>
            <Link to={"/"} className="hover:text-[#D32F2F]">Disclaimer</Link>
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-600 mb-1">Connect with us</p>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#D32F2F]" />
              <span>+971 56808 8426</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-[#D32F2F]" />
              <span>contactus@wheelspot.ae</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
