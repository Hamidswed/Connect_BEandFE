import ProductDetailItem from "../components/products/ProductDetailItem";
import {fetchProductDetail} from '../redux/thunk/productDetail'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useParams } from "react-router";


const ProductDetail = () => {
  const { id } = useParams();
  const productDetail = useSelector((state:RootState)=>state.product.productDetail)
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(()=>{
    dispatch(fetchProductDetail(Number(id)))
  },[dispatch, id])
console.log(productDetail,'detail');
  return (
    <div>
      <ProductDetailItem productDetail={productDetail}/>
    </div>
  );
};
export default ProductDetail;
