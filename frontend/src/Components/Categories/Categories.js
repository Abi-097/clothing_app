import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import image1 from "../../Assets/ladiesshirt.jpg";
import image2 from "../../Assets/lightjacket.jpg";
import image3 from "../../Assets/Loungewear.jpeg";
import image4 from "../../Assets/R.jpeg";
import image5 from "../../Assets/OIP.jpeg";
import image6 from "../../Assets/accessories.jpg";
const Categories = () => {
  const data = [
    { id: 1, image: image1, description: "SHIRTS" },
    { id: 2, image: image2, description: "LOUNGEWEAR" },
    { id: 3, image: image3, description: "JACKETS" },
    { id: 4, image: image4, description: "JEANS" },
    { id: 5, image: image5, description: "T-SHIRTS" },
    { id: 6, image: image6, description: "ACCESSORIES" },
  ];
  return (
    <div>
      <Grid container spacing={0}>
        {data.map((item, index) => (
          <Grid
            item
            xl={2}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              index={index}
              sx={{
                position: "relative",
                width: "100%",
                height: "500px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "8px 0",
                }}
              >
                <p>{item.description}</p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
