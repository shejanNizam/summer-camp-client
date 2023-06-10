import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllInstructor = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allInstructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["allInstructors"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allInstructors`);
      return res.data;
    },
  });

  return [allInstructors, loading, refetch];
};

export default useAllInstructor;
