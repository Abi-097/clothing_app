import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Index";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
