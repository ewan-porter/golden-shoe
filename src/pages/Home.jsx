import React from "react";
import Navbar from "../components/NavbarComponent";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Brands />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
