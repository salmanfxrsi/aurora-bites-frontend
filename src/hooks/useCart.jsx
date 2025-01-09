import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  return [data, refetch];
};

export default useCart;
