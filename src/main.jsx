import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Layout/Home";
import Orders from "./components/Oders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./Loaders/cartProductsLoaders";
import CheckOutOrder from "./components/CheckOutOrder/CheckOutOrder";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./components/provider/AuthProvider";
import PrivetRoute from "./routes/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: (
          <PrivetRoute>
            <Inventory></Inventory>
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "checkout",
        element: (
          <PrivetRoute>
            <CheckOutOrder></CheckOutOrder>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
