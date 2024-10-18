import React from "react";
import Slider from "../components/Slider";
import About from "./About";
import Products from "../components/Products";
import HappyCustomer from "../components/HappyCustomer";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
     <Slider />
     <div className="container mx-auto px-3 lg:px-0 py-12">
        <About />
        <Products />
        <HappyCustomer />
        <Blog />
        <Contact />
     </div>
    </div>
  );
};

export default Home;
