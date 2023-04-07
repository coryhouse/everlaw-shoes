import { useQuery } from "@tanstack/react-query";
import { Food } from "../foods";
import ky from "ky";

async function getFoods(): Promise<Food[]> {
  return ky.get("http://localhost:3001/foods").json();
}

export function useGetFoodsQuery() {
  return useQuery({
    queryKey: ["foods"],
    queryFn: getFoods,
    useErrorBoundary: true,
    initialData: [],
  });
}
