import TextField from "@mui/material/TextField";
import "./search.css";
import { useDispatch } from "react-redux";
import { searchActions } from "../../redux/slice/search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { actions } from "./../../redux/slice/product";

const Search = () => {
  const userInput = useSelector((state: RootState) => state.search.userInput);
  const productList = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();
  const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.getUserInput(e.target.value));
    searchHandler();
  };
  const searchHandler = () => {
    const result = productList.filter((product) =>
      product.title.toLowerCase().includes(userInput.toLowerCase())
    );
    dispatch(actions.getProductData(result));
  };
  const keyDownHandler=(e: React.KeyboardEvent<HTMLDivElement>)=>{
    if (e.key === 'Enter'){
      searchHandler()
    }
  }

  return (
    <div className="serach">
      <TextField
        id="standard-basic"
        label="Search..."
        variant="standard"
        helperText="Enter your phone name and press enter"
        onChange={userInputHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};
export default Search;
