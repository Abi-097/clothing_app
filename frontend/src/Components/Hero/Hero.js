import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";

const items = [
  {
    image: image1,
    description: "SUMMER SALE",
  },
  {
    image: image3,
    description: "SUMMER SALE",
  },
  {
    image: image2,
    description: "SUMMER SALE",
  },
];
const Hero = () => {
  return (
    <div>
      <Carousel>
        {items.map((item, index) => (
          <Paper
            elevation={0}
            key={index}
            style={{
              position: "relative",
              width: "100%",
              height: "45rem",
            }}
          >
            <img
              src={item.image}
              alt={`Item ${index + 1}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "40px" }}>{item.description}</p>
              <Button
                variant="contained"
                sx={{ fontSize: "25px", color: "white" }}
              >
                Show Now
              </Button>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
