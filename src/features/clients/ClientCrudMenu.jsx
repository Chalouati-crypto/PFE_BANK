import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { CiMenuKebab } from "react-icons/ci";
import { useDeleteClient } from "./useDeleteClient";

function ClientCrudMenu({ id }) {
  const { deleteClient, isDeleting } = useDeleteClient();
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            <CiMenuKebab />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Edit</MenuItem>
            <MenuItem
              onClick={() => {
                popupState.close();
                deleteClient(id);
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default ClientCrudMenu;
