import { AppDispatch } from "../../store";
import { actions } from "./../product";

const url = "http://localhost:8000/products";
export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(actions.getProductData(data));
  };
}
