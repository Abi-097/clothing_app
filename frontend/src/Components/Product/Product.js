import React from "react";
import image1 from "../../Assets/567795112_152_pic_3.jpg";
import image2 from "../../Assets/tshi.jpeg";
import image3 from "../../Assets/tshirt.jpg";
import image4 from "../../Assets/sR.jpeg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const productsList = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];
const Products = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {productsList.map((item, index) => (
          <Grid item xs={12} md={6} lg={3}>
            <Paper index={index}>
              <img
                src={item.image}
                alt={item.image}
                style={{ height: "400px", width: "350px" }}
              />
              <div style={{ display: "flex", justifyContent: "start" }}>
                <IconButton>
                  <SearchIcon />
                </IconButton>

                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>

                <Link to={`/product/${item.id}`}>
                  <IconButton>
                    <ShoppingCart />
                  </IconButton>
                </Link>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
