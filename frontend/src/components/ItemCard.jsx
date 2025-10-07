import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ItemCard({
  car_id,
  user_id,
  seller_id,
  date_range,
  total_amount,
  otp,
  status,
}) {
  return (
    <div>
      <Card className="hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-500">
        <CardHeader>
          <CardTitle>Status: {status}</CardTitle>
          <CardDescription>Car ID: {car_id}</CardDescription>
          <CardAction>OTP: {otp}</CardAction>
        </CardHeader>
        <CardContent>
          <p>
            <strong>User ID:</strong> {user_id}
          </p>
          <p>
            <strong>Seller ID:</strong> {seller_id}
          </p>
          <p>
            <strong>Rental Duration:</strong> {date_range} days
          </p>
          <p>
            <strong>Total Amount:</strong> ${total_amount}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
