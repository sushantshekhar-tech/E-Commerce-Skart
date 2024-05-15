import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/component/ProductList";
import Footer from "./Footer";

import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Footer></Footer>
    </div>
  );
};

export default Home;
