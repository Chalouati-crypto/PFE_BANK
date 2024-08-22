import { useMutation, useQueryClient } from "react-query";
import { deleteClient as deleteClientApi } from "../../services/apiClients";
import toast from "react-hot-toast";
export function useDeleteClient() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteClient } = useMutation({
    mutationFn: deleteClientApi,
    onSuccess: () => {
      toast.success("Client Successfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["Clients"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteClient };
}
