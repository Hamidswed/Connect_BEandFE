import { Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const video = require("../../assets/movie.mp4");
  const CheckOutBTN = styled(Button)({
    color: "black",
    border: "1px solid black",
    borderRadius:20,
    "&:hover": {
      color:"#fff",
      border: "1px solid #F24F82",
      backgroundColor: "#F24F82",
    },
  });
  return (
    <div className="hero">
      <div className="hero-left">
        <video autoPlay loop muted width="300px" height="270px">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-right">
        <Typography variant="h3" gutterBottom>
          New Technology
        </Typography>
        <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold" }}>
          Big and Bigger
        </Typography>
        <Link to="/products">
          <CheckOutBTN variant="outlined" size="large">
            Check out new collection!
          </CheckOutBTN>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
