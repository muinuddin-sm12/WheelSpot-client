import logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectCurrentUser);
  console.log(userData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" px-6 md:px-12 lg:px-20">
      <div className="flex relative justify-between items-center border-b  py-2">
      <div>
        <Link to={"/"} className="">
          <img
            className="h-10 md:h-12 lg:h-14 hover:scale-105 transition-all"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a href="/">Home</a>
        {userData && <a href="#">Dashboard</a>}
        <a href="#">Cars</a>
        <a href="#">About Us</a>
      </div>
      {userData ? (
        <div onClick={() => dispatch(logout())} className="hidden md:block">
          <Button className="button-primary">Logout</Button>
        </div>
      ) : (
        <Link to={"/login"} className="hidden md:block">
          <Button className="button-primary">Login</Button>
        </Link>
      )}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-[99] cursor-pointer text-2xl"
      >
        <IoIosMenu />
      </div>
      <div
        className={`absolute md:hidden py-20 top-0 z-10 left-0 w-full bg-white flex flex-col items-center gap-6 transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <a href="/">Home</a>
        {userData && <a href="#">Dashboard</a>}
        <a href="#">Cars</a>
        <a href="#">About Us</a>
        {userData ? (
          <div onClick={() => dispatch(logout())} className="md:hidden">
            <Button className="button-primary">Logout</Button>
          </div>
        ) : (
          <Link to={"/login"} className="md:hidden">
            <Button className="button-primary">Login</Button>
          </Link>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
