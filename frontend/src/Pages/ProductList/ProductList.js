import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Index";
import Products from "../../Components/Product/Product";
import Grid from "@mui/material/Grid";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductList = () => {
  const colors = ["Red", "Blue", "Green", "Yellow", "White", "Black"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const sort = ["Newest", "Price (asc)", "Price (desc)"];
  return (
    <div>
      <Navbar />
      <h1>Dresses</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          Filter Products
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              // value={age}
              // onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <InputLabel id="color-select-label">Select Color</InputLabel>
              {colors.map((color, index) => (
                <MenuItem key={index} value={color}>
                  {color}
                </MenuItem>
              ))}
              {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              // value={age}
              // onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <InputLabel id="color-select-label">Select Size</InputLabel>
              {sizes.map((size, index) => (
                <MenuItem key={index} value={size}>
                  {size}
                </MenuItem>
              ))}
              {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          Sort Products
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              // value={age}
              // onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <InputLabel id="color-select-label">Sort Product</InputLabel>
              {sort.map((sort, index) => (
                <MenuItem key={index} value={sort}>
                  {sort}
                </MenuItem>
              ))}
              {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Products />
      <Footer />
    </div>
  );
};

export default ProductList;
