import { Link, Outlet, useLocation } from "react-router-dom"

const menuItems = [
    { path: 'orders', label: 'Orders' },
    { path: 'manage-account', label: 'Manage Account' },
  ];
const UserDashboard = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop();
  return (
    <div className="flex flex-col lg:flex-row px-2 md:px-12 lg:px-20 py-4 lg:py-0 min-h-screen">
        {/* sidebar */}
        <div className="w-full lg:w-[20%] flex lg:border-r flex-row lg:flex-col gap-3 items-center lg:items-start justify-center lg:justify-start lg:py-6 lg:h-screen py-3 overflow-x-auto">
        {menuItems.map((item) => (
        <Link key={item.path} className="md:w-[150px] z-[99]" to={item.path}>
          <button
            className={`${
              currentPath === item.path ? 'px-2 md:px-2 py-[2px] md:py-1 bg-[#D32F2F] text-white border hover:bg-[#ff3737] text-sm rounded-md font-medium' : 'px-2 md:px-2 py-[2px] md:py-1 bg-white text-gray-700 border hover:text-[#D32F2F] text-sm rounded-md font-medium'
            } w-full`}
          >
            {item.label}
          </button>
        </Link>
      ))}
        </div>
        {/* content  */}
        <div className="flex-1 bg-gray-100 p-2 md:p-6">
            <Outlet/>
        </div>
    </div>
  )
}

export default UserDashboard;