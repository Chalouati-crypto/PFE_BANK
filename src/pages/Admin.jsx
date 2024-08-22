import { Box, Button, List, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useClients } from "../features/clients/useClients";
import ClientRow from "../features/clients/ClientRow";

function Admin() {
  const { clients, isLoadingClients } = useClients();
  if (isLoadingClients) return;
  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" component="h2">
          Clients
        </Typography>
        <Button>
          <Link to="add">Add Client</Link>
        </Button>
      </Box>
      <List>
        {clients.map((client) => {
          return <ClientRow key={client.id} client={client} />;
        })}
      </List>
    </div>
  );
}

export default Admin;
