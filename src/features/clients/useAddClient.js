import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { createClient as createClientApi } from "../../services/apiClients";
export function useAddClient() {
  const queryClient = useQueryClient();
  const { mutateAsync: addClient, isLoading: isAddingClient } = useMutation(
    (data) => createClientApi(data),
    {
      onSuccess: (data) => {
        toast.success("Client Successfully Created !");
        queryClient.invalidateQueries(["Clients"]);
        return data;
      },
    }
  );
  return { addClient, isAddingClient };
}
