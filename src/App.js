import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Verification from "./components/verification/Verification";
import Welcome from "./components/welcome/Welcome";
import OrderDetails from "./components/orderDetails/OrderDetails";
import Landing from "./components/landingPage/landing";
import Checkout from "./components/chekout/checkout";
import OfferPage from "./components/offerPage/OfferPage";
import ProductsDetails from "./components/productsDetails/ProductsDetails";
import { DarkModeProvider } from "./DarkModeContext";
import { DirectionProvider } from "./DirectionContext";
import { EmailProvider } from "./EmailContext";
import { CartProvider } from "./CartContext";
import { getToken, refreshAuthToken } from "./authService";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (getToken()) {
      refreshAuthToken();
    }
  }, [location]);

  return (
    <div className="App">
      <DarkModeProvider>
        <DirectionProvider>
          <EmailProvider>
            <CartProvider>
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
            </CartProvider>
          </EmailProvider>
        </DirectionProvider>
      </DarkModeProvider>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
