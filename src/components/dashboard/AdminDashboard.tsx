import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { path: "add-products", label: "Add Product" },
  { path: "manage-products", label: "Manage Product" },
  { path: "manage-user", label: "Manage User" },
  { path: "manage-orders", label: "Manage Order" },
];
const AdminDashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-20">
      {/* sidebar */}
      <div className="w-full lg:w-[20%] flex lg:border-r flex-row lg:flex-col md:gap-3 items-center lg:items-start justify-center lg:justify-start lg:py-6 lg:h-screen py-3 overflow-x-auto gap-1">
        {menuItems.map((item) => (
          <Link key={item.path} className="md:w-[150px]" to={item.path}>
            <button
              className={`${
                currentPath === item.path
                  ? "px-1 md:px-2 py-[2px] md:py-1 bg-[#D32F2F] text-white border hover:bg-[#ff3737] text-[12px] md:text-sm rounded-md font-medium"
                  : "px-1 md:px-2 py-[2px] md:py-1 bg-white text-gray-700 border hover:text-[#D32F2F] text-[12px] md:text-sm rounded-md font-medium"
              } w-full`}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </div>
      {/* content  */}
      <div className="flex-1 overflow-y-auto overflow-x-auto max-h-[100vh] bg-gray-100 md:p-6 p-2 z-[20]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
