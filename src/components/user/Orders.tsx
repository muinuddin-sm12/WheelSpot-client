import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetAllOrdersQuery } from '@/redux/features/order/orderApi';
import { useAppSelector } from '@/redux/hooks';
import { useLocation } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { FaUserLock } from 'react-icons/fa';

const Orders = () => {
  const location = useLocation();
  const _paymentLink = location?.state || {};
  // console.log(paymentLink)
  const {data} = useGetAllOrdersQuery(undefined);
  console.log(data)
  const currentUser = useAppSelector(selectCurrentUser);
  const CurrentUserOrders = data?.data?.map((item) => item.email === currentUser.email);

  return (
    <div>
      <div className="py-3 rounded-lg bg-gray-300 px-4">
        <p className="text-sm">Your Orders</p>
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
          {CurrentUserOrders?.map((singleData, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>sdfa</TableCell>
              <TableCell className="flex items-center gap-1">
                abr
              </TableCell>
              <TableCell className="text-right text-lg">
                <button
                  
                >
                  fgdrg
                </button>
              </TableCell>
              <TableCell className="text-right text-lg">
                <button
                >dfasf
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Orders