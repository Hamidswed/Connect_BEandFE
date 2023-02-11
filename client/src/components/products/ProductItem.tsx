import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Snackbar } from "@mui/material";
import { ProductType } from "../../types/productType";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './../../redux/slice/product';
import { useState } from "react";
import { RootState } from "../../redux/store";

type PropType = {
  product: ProductType;
};
export default function ProductItem({ product }: PropType) {
  const dispatch = useDispatch()
  const isFavorite = useSelector(
    (state: RootState) => state.product.isAddToFav
  );
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  if(isFavorite){
    handleClick()
  }
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 300,width:'fit-content',padding:'20px',margin:'0 auto' }}
          image={product.image}
          component="img"
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>dispatch(actions.addToCart(product))}>Add to cart</Button>
          <Button size="small" onClick={()=>dispatch(actions.addToFavorite(product))}>Add to favorite</Button>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The product is already added to favorite!
        </Alert>
      </Snackbar>
    </div>
  );
}
