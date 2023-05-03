import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input type="submit" value="Login" className="btn-submite" />
      </form>
      <p>
        <small>
          New in Ema John <Link to="/signup">Create An Account</Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default Login;
