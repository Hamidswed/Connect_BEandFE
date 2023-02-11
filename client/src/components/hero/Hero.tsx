import { Typography } from "@mui/material";
import "./hero.css";

const Hero = () => {
  const video = require("../../assets/movie.mp4");
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
      </div>
    </div>
  );
};
export default Hero;
