import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();

  const { data: cartClass = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:7000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cartClass, refetch];
};

export default useCart;
