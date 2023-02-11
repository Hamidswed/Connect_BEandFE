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
  Tooltip,
} from "@mui/material";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import FourGPlusMobiledataIcon from "@mui/icons-material/FourGPlusMobiledata";
import { ReactComponent as Logo } from "../../assets/logo.svg";

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
        <MenuItem component={Link} to={"/"}
          >
            <Logo style={{width:"150px"}} />
          </MenuItem>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", gap: "10px" } }}>
          <Tooltip title="Home">
            <MenuItem component={Link} to={"/"}>
              <HomeIcon />
            </MenuItem>
            </Tooltip>
            <Tooltip title="Product list">
              <MenuItem component={Link} to={"/products"}>
                <FormatListBulletedIcon />
              </MenuItem>
            </Tooltip>
            <Tooltip title="Cart">
              <MenuItem component={Link} to={"/cart"}>
                <StyledBadge badgeContent={cartState.length} color="error">
                  <ShoppingCartIcon />
                </StyledBadge>
              </MenuItem>
            </Tooltip>
            <Tooltip title="Favorite">
              <MenuItem component={Link} to={"/favorite"}>
                <StyledBadge badgeContent={favState.length} color="error">
                  <FavoriteIcon />
                </StyledBadge>
              </MenuItem>
            </Tooltip>
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
              {isLogin ? (
                <Tooltip title={user.name}>
                  <Avatar
                    alt={user.name}
                    src={user.image}
                    sx={{ width: 40, height: 40 }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Login">
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>
              )}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
