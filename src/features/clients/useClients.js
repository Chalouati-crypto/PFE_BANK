import { useQuery } from "react-query";
import { getClients } from "../../services/apiClients";

export function useClients() {
  const {
    isLoading: isLoadingClients,
    data: clients,
    error,
  } = useQuery({
    queryKey: ["Clients"],
    queryFn: getClients,
  });
  return { isLoadingClients, clients, error };
}
