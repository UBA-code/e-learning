import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

export default function useFetch<T>(
  endpoint: string
): UseQueryResult<T, unknown> {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      try {
        const response = await axios<T>(
          import.meta.env.VITE_API_URL + endpoint
        );
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    refetchOnWindowFocus: false,
  });
}
