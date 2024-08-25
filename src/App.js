import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Verification from "./components/verification/Verification";
import Welcome from "./components/welcome/Welcome";
// import Home from "./components/homePage/Home";
// import Products from "./components/productsPage/ProductsPage";
// import AboutUs from "./components/aboutUs/AboutUs";
// import OurServices from "./components/ourServices/OurServices";
// import Contact from "./components/contact/Contact";
import OrderDetails from "./components/orderDetails/OrderDetails";
import Landing from "./components/landingPage/landing";
import Checkout from "./components/chekout/checkout";
import OfferPage from "./components/offerPage/OfferPage";
import ProductsDetails from "./components/productsDetails/ProductsDetails";
import { DarkModeProvider } from "./DarkModeContext";
import { DirectionProvider } from "./DirectionContext";

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <DirectionProvider>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/welcome" element={<Welcome />} />

              <Route path="/productsDetails" element={<ProductsDetails />} />
              <Route path="/offerPage" element={<OfferPage />} />
              <Route path="/cart" element={<OrderDetails />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/signup" />} />
            </Routes>
          </div>
        </DirectionProvider>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
