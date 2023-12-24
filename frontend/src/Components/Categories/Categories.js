import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import image1 from "../../Assets/ladiesshirt.jpg";
import image2 from "../../Assets/lightjacket.jpg";
import image3 from "../../Assets/Loungewear.jpeg";
const Categories = () => {
  const data = [
    {
      image: image1,
      description: "SHIRTS",
    },
    {
      image: image2,
      description: "LOUNGEWEAR",
    },
    {
      image: image3,
      description: "JACKETS",
    },
  ];
  return (
    <div>
      <Grid container spacing={0}>
        {data.map((item, index) => (
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
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
                width: "400px",
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
