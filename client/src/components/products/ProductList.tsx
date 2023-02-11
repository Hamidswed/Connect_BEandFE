import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunk/product";
import ProductItem from "./ProductItem";
import "./productList.css";

export default function ProductList() {
  const productList = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  return (
    <div className="product-list">
      {productList.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
}
