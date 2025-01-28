import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const ManageUser = () => {
  return (
    <div>
    <div className="py-3 rounded-lg bg-gray-300 px-4">
        <p>All Users</p>
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
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>shakil@gmail.com</TableCell>
          <TableCell>admin</TableCell>
          <TableCell className="text-right"><button><FaUserLock/></button></TableCell>
          <TableCell className="text-right"><button><MdOutlinePublishedWithChanges/></button></TableCell>
        </TableRow> 
      </TableBody>
    </Table>
  </div>
  );
};

export default ManageUser;
