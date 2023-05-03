import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">sign up</Link>
        {user && (
          <span className="text-white">
            Welcome{user.email} <button onClick={handleLogOut}>log out</button>{" "}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
