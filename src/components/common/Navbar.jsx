import { AppBar, Toolbar } from "@mui/material";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "primary.main", alignItems: "center" }}
    >
      <Toolbar>
        <img src={logo} alt="logo" width={100} height={100} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
