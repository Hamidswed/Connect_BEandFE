import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  BadgeProps,
  MenuItem,
  Avatar,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -2,
    padding: "0 4px",
  },
}));

export default function NavBar() {
  // const favList = useSelector((state: RootState) => state.country.favorite);
  const cartState = useSelector((state: RootState) => state.product.carts);
  const favState = useSelector((state: RootState) => state.product.favorites);
  const user = useSelector((state: RootState) => state.user.user);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        width: "100%",
        zIndex: "100",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#474747" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem component={Link} to={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to={"/products"}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Product list
            </Typography>
          </MenuItem>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", gap: "10px" } }}>
            <MenuItem component={Link} to={"/cart"}>
              <StyledBadge badgeContent={cartState.length} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </MenuItem>
            <MenuItem component={Link} to={"/favorite"}>
              <StyledBadge badgeContent={favState.length} color="error">
                <FavoriteIcon />
              </StyledBadge>
            </MenuItem>
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
              {isLogin ? (
                <Avatar
                  alt={user.name}
                  src={user.image}
                  sx={{ width: 40, height: 40 }}
                />
              ) : (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
