import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="relative">
        <div className="sticky top-0 left-0 z-[999] bg-gray-50 shadow"><Navbar/></div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout