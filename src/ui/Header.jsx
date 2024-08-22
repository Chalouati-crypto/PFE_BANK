import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import StyledNavLink from "./NavLink";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="/Acceuil">
          <Typography variant="h6">
            <StyledNavLink to="/">Acceuil</StyledNavLink>
          </Typography>
        </Button>
        <Button color="inherit">
          <Typography variant="h6">
            <StyledNavLink to="/admin">Admin</StyledNavLink>
          </Typography>
        </Button>

        <Button color="inherit">
          <Typography variant="h6">
            <StyledNavLink to="/services">Services</StyledNavLink>
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
