import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardForm from "./SplitCardForm";
const stripePromise = loadStripe(
  "pk_test_51IhBR8Ek89EmJ6PZF0ewMwWjkBiXOwouiEi8TGgv58eLgAWhlJH5mqudHYZ6AJL3dY1ZbO15LoePjAYaH6uYcLBY00DUHneOXo"
);

const Payment = (props) => {
  const handlePayment = props.handlePayment;
  return (
    <Elements stripe={stripePromise}>
      <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
    </Elements>
  );
};

export default Payment;
