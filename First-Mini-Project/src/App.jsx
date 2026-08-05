
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import AdminLogin from "./AdminLogin";
import AdminOrders from "./AdminOrders";
import TrackOrder from "./TrackOrder";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function Home() {
  return (
   <>
      <Navbar />

      
        <Hero />

        <Products />

        <Cart />

        <Checkout />

        <AboutUs />
        
        <ContactUs/>

       

        <Footer />

     </>
  );
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/track-order/:trackingToken"
        element={<TrackOrder />}
      />

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin/orders"
        element={<AdminOrders />}
      />

    </Routes>
  );
}

export default App;

