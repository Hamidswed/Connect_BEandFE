import {
  Alert,
  IconButton,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { ProductType } from "../../types/productType";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./productDetailItem.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { actions } from "../../redux/slice/product";
import { RootState } from "../../redux/store";

type PropType = {
  productDetail: ProductType;
};
const ProductDetailItem = ({ productDetail }: PropType) => {
  const dispatch = useDispatch();
  const favList = useSelector((state: RootState) => state.product.favorites);
  const isFavorite = favList.some((fav) => fav.id === productDetail.id);
  const cartList = useSelector((state: RootState) => state.product.carts);
  const index = cartList.findIndex((cart) => cart.id === productDetail.id);
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
    dispatch(actions.addToCart(productDetail));
    handleClickCart();
  };
  const addToFavorite = () => {
    if (!isFavorite) {
      dispatch(actions.addToFavorite(productDetail));
    } else {
      handleClick();
    }
  };
  return (
    <div className="product-detail">
      <div className="detail-left">
        <Typography variant="h3" sx={{textAlign:"left"}}>{productDetail.title}</Typography>
        <Typography sx={{ textAlign: "left", width: "80%" }}>
          {productDetail.description}
        </Typography>
        <Typography variant="h5" sx={{ color: "#ECA820" }}>
          ${productDetail.price}
        </Typography>
        <div className="detail-icon">
          <Tooltip title="Back">
            <Link to="/products">
              <IconButton>
                <ArrowBackIcon fontSize="large" sx={{ color: "#fff" }} />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Add to cart">
            <IconButton onClick={addToCart}>
              <AddShoppingCartIcon fontSize="large" sx={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to favorite">
            <IconButton onClick={addToFavorite}>
              <FavoriteBorderIcon fontSize="large" sx={{ color: "#fff" }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="detail-right">
        <img src={productDetail.images} alt={productDetail.title} />
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {productDetail.title} is already added to favorite!
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
          <strong>{cartList[index]?.qty}</strong> {productDetail.title} has been
          added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ProductDetailItem;
