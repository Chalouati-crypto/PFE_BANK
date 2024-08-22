import { Divider, ListItem, ListItemText } from "@mui/material";
import ClientCrudMenu from "./ClientCrudMenu";

function ClientRow({ client }) {
  return (
    <>
      <ListItem>
        <ListItemText primary={client.fullName} />
        <ListItemText primary={client.bankAccInfo} />
        <ListItemText primary={client.proofOfAdress} />
        <ClientCrudMenu id={client.id} />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default ClientRow;
