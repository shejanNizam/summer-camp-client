import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/popularInstructors`);
      return res.data;
    },
  });

  return [instructors, loading, refetch];
};

export default usePopularInstructor;
