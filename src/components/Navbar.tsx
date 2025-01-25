import logo from "../../public/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  return (
    <div className="flex justify-between items-center px-20 py-6">
      <div>
        <Link to={'/'} className="">
          <img
            className="h-14 hover:scale-105 transition-all"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href="#">Home</a>
        <a href="#">Cars</a>
        <a href="#">About Us</a>
      </div>
      <Link to={'/login'} className="hidden md:block">
        <Button className="button-primary">Login</Button>
      </Link>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden cursor-pointer text-2xl"
      >
        <IoIosMenu />
      </div>
      <div
        className={`absolute md:hidden py-20 top-20 z-10 left-0 w-full bg-white flex flex-col items-center gap-6 transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
      >
        <a href="#">Home</a>
        <a href="#">Cars</a>
        <a href="#">About Us</a>
        <Link to={'/login'}>
        <Button>Login</Button></Link>
      </div>
    </div>
  );
};

export default Navbar;
