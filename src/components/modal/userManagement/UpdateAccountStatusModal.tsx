/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateAUserMutation,
} from "@/redux/features/user/userApi";
import { Button } from "@/components/ui/button";

interface UpdateProductProps {
  id: string;
  onClose: () => void; // Close function to manage modal visibility
}

export function UpdateAccountStatusModal({ id, onClose }: UpdateProductProps) {
  const { refetch } = useGetAllUsersQuery(undefined);
  const [updateAUser] = useUpdateAUserMutation(undefined);
  const { data, refetch:refetchSingleUserData } = useGetSingleUserQuery(id);

  const handleUpdateUserRole = async (userId: string) => {
    try {
      const updatedRole = data?.data.deactivate === false ? true : false;

      const updateRole = {
        deactivate: updatedRole,
      };

      const updateData = {
        id: userId,
        data: updateRole,
      };

      await updateAUser(updateData);
      toast.success("User Account updated successfully", {
        duration: 2000,
      });
      await refetchSingleUserData();
      onClose();
      refetch();
    } catch (error) {
      toast.error("Something went wrong!", { duration: 2000 });
    }
  };
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">Update Product Details</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg min-h-[40vh]">
        <div className="grid gap-4 py-4 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <p className="font-medium text-gray-700 mb-6">
                Are you sure you want to update the account status of this user?
              </p>
            </div>
            <div className="flex items-center gap-4">
            <Button onClick={() => onClose()} className="button-primary">
                No
              </Button>
              <Button
                onClick={() => handleUpdateUserRole(id)}
                className=" bg-green-600 hover:bg-green-500"
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
