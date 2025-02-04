import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { uploadPhoto } from "@/utils/uploadPhoto";
import { Rate } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: allUserData } = useGetAllUsersQuery(undefined);
  const currentUserData = allUserData?.data?.find(
    (item) => item.email === currentUser?.email
  );
//   console.log(currentUserData);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const toastId = toast.loading("Uploading you review...", {
      duration: 2000,
    });
    try {
      const imageUrl = await uploadPhoto(data?.userImage[0]);
      const reviewData = {
        carName: data.carName,
        rating,
        review: data.review,
        image: imageUrl,
        customerName: currentUserData.name,
        date: new Date().toLocaleDateString(),
      };
      console.log(reviewData);
      reset();
      toast.success("Review Uploaded Successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {id:toastId, duration: 2000});
      reset()
    }
  };
  const handleRating = (rating) => {
    // console.log(typeof rating);
    setRating(rating);
  };
  return (
    <div className="px-6 md:px-12 lg:px-20 min-h-[50vh] flex justify-center">
      <div className="w-full md:w-[450px] shadow-md rounded-lg p-6 mt-8 mx-auto">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Write a Review
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Car Name Input */}
          <div className="flex flex-col space-y-1 text-sm">
            <label htmlFor="carName" className="text-gray-600 ">
              Car Name:
            </label>
            <input
              className="w-full px-3 py-2 border outline-none border-gray-300 rounded-lg"
              type="text"
              id="carName"
              placeholder="Enter car name"
              {...register("carName")}
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col space-y-1 text-sm">
            <label className="text-gray-600">Rate:</label>
            <Rate onChange={handleRating} value={rating} />
          </div>

          {/* user image  */}
          <div className="flex flex-col space-y-1 text-sm">
            <label htmlFor="userImage" className="text-gray-600 ">
              Choose your Image:
            </label>
            <input
              className="w-full px-3 py-2 border outline-none border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-none file:text-sm  file:text-gray-600"
              type="file"
              accept="image/*"
              id="userImage"
              {...register("userImage")}
            />
          </div>

          {/* Review Textarea */}
          <div className="flex flex-col space-y-1 text-sm">
            <label htmlFor="review" className="text-gray-600 ">
              Review:
            </label>
            <textarea
              id="review"
              placeholder="Write your review here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none"
              {...register("review")}
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center text-sm">
            <button
              type="submit"
              className="w-full bg-[#D32F2F] text-white font-medium py-2 rounded-lg hover:bg-[#f13535] transition duration-300"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
