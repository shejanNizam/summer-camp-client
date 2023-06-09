import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popularClasses`);
      return res.data;
    },
  });

  return [classes, loading, refetch];
};

export default usePopularClasses;
