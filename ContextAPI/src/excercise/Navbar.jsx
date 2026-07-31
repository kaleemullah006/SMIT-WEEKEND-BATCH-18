import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import useCart from "./CartContext2";

function Navbar() {
  const { cart } = useCart();

  return (
    <AppBar >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          My Shopping App
        </Typography>

        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
