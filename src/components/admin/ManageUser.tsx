import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { useState } from "react";
import { UpdateUserRoleModal } from "../modal/userManagement/UpdateUserRoleModal";

const ManageUser = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [isUpdateUserRoleModalOpen, setIsUpdateUserRoleModalOpen] =
    useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  // console.log(data.data);

  const handleUpdateRoleOpenModal = (productId: string) => {
    setSelectedUserId(productId); // Set the ID of the selected product
    setIsUpdateUserRoleModalOpen(true); // Open the modal
  };

  const handleDeleteCloseModal = () => {
    setIsUpdateUserRoleModalOpen(false); // Close the modal
    setSelectedUserId(null); // Reset the product ID
  };
  return (
    <div>
      <div className="py-3 rounded-lg bg-gray-300 px-4">
        <p className="text-sm">All Users</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Index</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Deactivate User</TableHead>
            <TableHead className="text-right">Update Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((singleData, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{singleData?.email}</TableCell>
              <TableCell className="flex items-center gap-1">{singleData?.role} <span>{singleData?.role === 'admin' && <FaCrown className="text-lg text-yellow-500"/>}</span></TableCell>
              <TableCell className="text-right text-lg">
                <button>
                  <FaUserLock />
                </button>
              </TableCell>
              <TableCell className="text-right text-lg">
                <button
                  onClick={() => handleUpdateRoleOpenModal(singleData._id)}
                >
                  <MdOutlinePublishedWithChanges />
                </button>
                {isUpdateUserRoleModalOpen && selectedUserId && (
                  <UpdateUserRoleModal
                    id={selectedUserId}
                    onClose={handleDeleteCloseModal}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUser;
