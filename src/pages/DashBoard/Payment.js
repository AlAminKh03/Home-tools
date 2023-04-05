import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L4lWDLLySasaZ7k7ow56upQRXRyWLOe0NKMHEobXCVL7WsXM5rA0EX3DtHJrt380vDGRjc3xZYTNqkziH7IuPJL00GrfBh2uD"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://home-tools-server-qeek.vercel.app/orders/${id}`;

  const { data: products, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mt-20">
        <div class="card-body">
          <h2 class="card-title">Please Pay for {products.name}</h2>
          <p>Please pay: ${products.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm products={products} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
