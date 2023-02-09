import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch, RootState } from "../../redux/store";

export default function ProductList() {
  const productList = useSelector((state:RootState)=>state.product.products)
  const dispatch = useDispatch<AppDispatch>()
  return <div>ProductList</div>;
}
