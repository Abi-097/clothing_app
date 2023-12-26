import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import image from "../../Assets/product_20.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Index";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
const Product = () => {
  const colors = ["Red", "Blue", "Green", "Yellow", "White", "Black"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <img src={image} alt={image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h2>Linen Shirt</h2>
          <p>
            The loose fit allows for really good airflow, the white color
            reflects the heat of the sun instead of absorbing it, and the loose
            weave makes it light to wear on a long, hot summer day.
          </p>
          <p>Rs. 1,500.00</p>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleDecrease}>
              <Remove />
            </IconButton>
            <TextField
              value={quantity}
              variant="outlined"
              size="small"
              style={{ width: "50px", textAlign: "center" }}
              InputProps={{ readOnly: true }}
            />
            <IconButton onClick={handleIncrease}>
              <Add />
            </IconButton>
            <Button variant="contained">Add to Cart</Button>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Product;
