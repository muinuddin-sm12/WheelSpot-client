import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { path: "add-products", label: "Add Product" },
  { path: "manage-products", label: "Manage Product" },
  { path: "manage-user", label: "Manage User" },
  // { path: "manage-orders", label: "Manage Order" },
];
const AdminDashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-20">
      {/* sidebar */}
      <div className="w-full lg:w-[20%] flex lg:border-r flex-row lg:flex-col gap-4 items-center lg:items-start justify-center lg:justify-start lg:py-6 lg:h-screen py-3 overflow-x-auto z-[10]">
        {menuItems.map((item) => (
          <Link key={item.path} className="w-[150px]" to={item.path}>
            <button
              className={`${
                currentPath === item.path
                  ? "px-3 py-[6px] bg-[#D32F2F] text-white border hover:bg-[#ff3737] text-sm rounded-md font-medium"
                  : "px-3 py-[6px] bg-white text-gray-700 border hover:text-[#D32F2F] text-sm rounded-md font-medium"
              } w-full`}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </div>
      {/* content  */}
      <div className="flex-1 overflow-y-auto overflow-x-auto max-h-[100vh] bg-gray-100 p-6 z-[20]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
