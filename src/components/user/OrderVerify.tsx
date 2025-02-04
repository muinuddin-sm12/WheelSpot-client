import { useVerifyPaymentQuery } from "@/redux/features/order/orderApi";
import { Link, useSearchParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Skeleton from "../Skeleton";
interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}
const OrderVerify = () => {
  const [searchParams] = useSearchParams();

  // console.log(orderId)

  const { data, isLoading } = useVerifyPaymentQuery(
    searchParams.get("order_id"),
    { refetchOnMountOrArgChange: true }
  );
  const orderData: OrderData = data?.data?.[0];
  // console.log(data);
  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
      <h1 className="text-xl font-medium mb-6">Order Verification</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <p className="font-medium">Order Details</p>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="font-medium">Order ID:</dt>
              <dd>{orderData?.order_id}</dd>
              <dt className="font-medium">Amount:</dt>
              <dd>
                {orderData?.currency} {orderData?.amount?.toFixed(2)}
              </dd>
              <dt className="font-medium">Status:</dt>
              <dd>
                <Badge
                  variant={
                    orderData?.bank_status === "Success"
                      ? "default"
                      : "destructive"
                  }
                  className={
                    orderData?.bank_status === "Success"
                      ? "bg-green-500 text-white hover:bg-green-600" // Custom success styles
                      : ""
                  }
                >
                  {orderData?.bank_status}
                </Badge>
              </dd>
              <dt className="font-medium">Date:</dt>
              <dd>{new Date(orderData?.date_time)?.toLocaleString()}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="font-medium">Payment Information</p>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="font-medium">Method:</dt>
              <dd>{orderData?.method}</dd>
              <dt className="font-medium">Transaction ID:</dt>
              <dd>{orderData?.bank_trx_id}</dd>
              <dt className="font-medium">Invoice No:</dt>
              <dd>{orderData?.invoice_no}</dd>
              <dt className="font-medium">SP Code:</dt>
              <dd>{orderData?.sp_code}</dd>
              <dt className="font-medium">SP Message:</dt>
              <dd>{orderData?.sp_message}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="font-medium">Customer Information</p>
          </CardHeader> 
          <CardContent>
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="font-semibold">Name:</dt>
              <dd>{orderData?.name}</dd>
              <dt className="font-semibold">Email:</dt>
              <dd>{orderData?.email}</dd>
              <dt className="font-semibold">Phone:</dt>
              <dd>{orderData?.phone_no}</dd>
              <dt className="font-semibold">Address:</dt>
              <dd>{orderData?.address}</dd>
              <dt className="font-semibold">City:</dt>
              <dd>{orderData?.city}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="font-medium">Verification Status</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm">
              {orderData?.is_verify === 1 ? (
                <>
                  <CheckCircle className="text-green-500" />
                  <span>Verified</span>
                </>
              ) : (
                <>
                  <AlertCircle className="text-yellow-500" />
                  <span>Not Verified</span>
                </>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/user-dashboard/orders">
              <Button className="w-full button-primary">View Orders</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OrderVerify;
