import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";

const ManageAccount = () => {
  const userData = useAppSelector(selectCurrentUser);
  const { data } = useGetAllUsersQuery(undefined);
  const currentUser = data?.data?.find(
    (item) => item.email === userData?.email
  );
  // console.log(data, currentUser);
  const {register , handleSubmit} = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="max-w-md mx-auto p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-lg text-center text-gray-800 mb-6">
        Account Information
      </h2>
      <form onSubmit={() => handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Role Field (Read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Role:</label>
          <input
            type="text"
            name="role"
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageAccount;
