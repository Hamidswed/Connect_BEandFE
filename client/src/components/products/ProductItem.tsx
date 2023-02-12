import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar } from "@mui/material";
import { ProductType } from "../../types/productType";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./../../redux/slice/product";
import { useState } from "react";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

type PropType = {
  product: ProductType;
};
export default function ProductItem({ product }: PropType) {
  const dispatch = useDispatch();
  const favList = useSelector((state: RootState) => state.product.favorites);
  const isFavorite = favList.some((fav) => fav.id === product.id);
  const cartList = useSelector((state: RootState) => state.product.carts);
  const index = cartList.findIndex((cart) => cart.id === product.id);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClickCart = () => {
    setOpenCart(true);
  };

  const handleCloseCart = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCart(false);
  };

  const addToCart = () => {
    dispatch(actions.addToCart(product));
    handleClickCart();
  };
  const addToFavorite = () => {
    if (!isFavorite) {
      dispatch(actions.addToFavorite(product));
    } else {
      handleClick();
    }
  };

  return (
    <div>
      <Card sx={{ width: 345 }}>
        <Link to={`/products/${product.id}`}>
          <CardMedia
            sx={{
              height: 300,
              width: "fit-content",
              padding: "20px",
              margin: "0 auto",
            }}
            image={product.image}
            component="img"
            title={product.title}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" onClick={addToCart}>
            Add to cart
          </Button>
          <Button size="small" onClick={addToFavorite}>
            Add to favorite
          </Button>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {product.title} is already added to favorite!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openCart}
        autoHideDuration={3000}
        onClose={handleCloseCart}
      >
        <Alert
          onClose={handleCloseCart}
          severity="success"
          sx={{ width: "100%" }}
        >
          <strong>{cartList[index]?.qty}</strong> {product.title} has been added
          to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}
