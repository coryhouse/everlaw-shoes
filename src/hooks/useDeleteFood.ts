import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky";

async function deleteFood(id: number): Promise<void> {
  return ky.delete("http://localhost:3001/foods/" + id).json();
}

export function useDeleteFood() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteFood(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });
}
