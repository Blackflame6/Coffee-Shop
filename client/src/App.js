import React, { useEffect } from "react";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./Nav.css";
import "./About.css";
import "./Contact.css";
import "./Deals.css";
import "./Products.css";
import "./Cartanditem.css";
import "./Login.css";
import "./HomeIndex.css";
import "./Summary.css";
import "./footer.css";
import "./newsletter.css";

import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Singleproduct from "./pages/Singleproduct";
import Error from "./pages/Error";
import CheckoutPage from "./pages/Cart/CheckoutPage";
import HotItems from "./pages/HotItem";
import footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout
          />}>
           
            <Route index element={<Index />} />
     
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/:productTarget"
              element={<Singleproduct />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/hotItems" element={<HotItems />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <ScrollToTop />
    </Router>
  );
};

export default App;
