import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import useCart from "../../../hooks/useCart";
import useCart from "../../../../hooks/useCart";
import CheckoutForm from "./CheckoutForm";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cartClass] = useCart();

  //   const singlePrice = cartClass.find((cart) => cart.price);
  const total = cartClass.reduce((sum, item) => sum + item.price, 0);

  //   console.log(singlePrice, total);

  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <h2 className="text-3xl">Here is our Payment Option</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cartClass={cartClass} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
