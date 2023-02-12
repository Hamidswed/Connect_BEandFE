import { AppDispatch } from "../store";
import { actions } from "../slice/product";

export function fetchProductDetail(id:number) {
  const url = `http://localhost:8000/products/${id}`
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(actions.getProductDetail(data));
  };
}
