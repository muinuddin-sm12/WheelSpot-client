import logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    toast.success('User Logged out successfully')
    dispatch(logout())
    navigate('/');
  }
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <div className="flex relative justify-between items-center py-2">
        <div className="z-[999]">
          <Link to={"/"} className="">
            <img
              className="h-10 md:h-12 hover:scale-105 transition-all"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to={"/"}>Home</Link>
          <Link to={"/all-cars"}>All Cars</Link>
          {userData &&
            (userData?.role === "admin" ? (
              <Link to={"/admin-dashboard"}>Dashboard</Link>
            ) : (
              <Link to={"/user-dashboard"}>Dashboard</Link>
            ))}
          <Link to={"/about-us"}>About Us</Link>
        </div>
        {userData ? (
          <div className="hidden md:flex items-center gap-2">
            <div className="h-[35px] w-[35px] rounded-full bg-black text-red-500 flex items-center justify-center text-xl">
              {userData?.email?.split("")[0].toUpperCase()}
            </div>
            <Button
              onClick={()=> handleLogout() }
              className="button-primary"
            >
              Logout
            </Button>
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
            isMenuOpen ? "opacity-100" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          {userData && (
            <div className="h-10 w-10 rounded-full bg-black text-red-500 flex items-center justify-center text-xl font">
              {userData?.email?.split("")[0].toUpperCase()}
            </div>
          )}

          <Link onClick={() => setIsMenuOpen(false)} to={"/"}>
            Home
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to={"/all-cars"}>
            All Cars
          </Link>
          {userData &&
            (userData?.role === "admin" ? (
              <Link
                onClick={() => setIsMenuOpen(false)}
                to={"/admin-dashboard"}
              >
                Dashboard
              </Link>
            ) : (
              <Link onClick={() => setIsMenuOpen(false)} to={"/user-dashboard"}>
                Dashboard
              </Link>
            ))}
          <Link onClick={() => setIsMenuOpen(false)} to={"/about-us"}>
            About Us
          </Link>
          {userData ? (
            <div
              onClick={() => dispatch(logout(), setIsMenuOpen(false))}
              className="md:hidden"
            >
              <Button className="button-primary">Logout</Button>
            </div>
          ) : (
            <Link
              onClick={() => setIsMenuOpen(false)}
              to={"/login"}
              className="md:hidden"
            >
              <Button className="button-primary">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
