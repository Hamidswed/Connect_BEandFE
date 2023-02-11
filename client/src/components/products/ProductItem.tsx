import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "../../types/productType";
import { useDispatch } from 'react-redux';
import { actions } from './../../redux/slice/product';

type PropType = {
  product: ProductType;
};
export default function ProductItem({ product }: PropType) {
  const dispatch = useDispatch()
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
          <Button size="small">Add to favorite</Button>
        </CardActions>
      </Card>
    </div>
  );
}
