import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (result) => {
      const user = result?.user ?? result?.data?.user;
      toast.success("User account successfully updated");
      if (user) queryClient.setQueryData(["user"], user);
    },
    onError: (err) => {
      toast.error(err?.message ?? "Update failed. Please try again.");
    },
  });

  return { updateUser, isUpdating };
}
