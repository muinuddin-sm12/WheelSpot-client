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
    <div className="p-6 max-w-sm lg:w-full mx-auto flex-col lg:flex items-center gap-6">
      <p className="text-sm font-medium mb-4 lg:mb-0">Change Password:</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <input type="text" placeholder="Old password" className="px-3 py-1 text-sm rounded-md outline-none" {...register('oldPassword')} />
        <input type="text" placeholder="New password" className="px-3 py-1 text-sm rounded-md outline-none" {...register('newPassword')} />
        <button type="submit" className="text-sm border w-[70px] mx-auto py-1 px-2 rounded-md hover:bg-[#D32F2F] hover:text-white">Change</button>
      </form>
    </div>
  );
};

export default ManageAccount;
