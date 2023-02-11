import { createAsyncThunk } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Address, City, Email, PhoneNumber, State, SystemName, ZipCode } from "../../../globals/common-names";
import Roles from "../../../globals/roles";
import { authActions } from "../../../store/store";
import AddressCard from "../../address-card/address-card";
import "./user-login.css";

const UserLogin = () => {

  const loginForm = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = createAsyncThunk('login',
    async (userCredentials) => {

      if (userCredentials.email.toLowerCase().includes("luwam")) {
        return {
          isAuthenticated: true,
          userDetails: {
            id: 2,
            firstName: "Luwam",
            lastName: "Abraham",
            email: "Luwam@gmail.com",
            role: Roles.Owner,
          }
        }
      }
      else if (userCredentials.email.toLowerCase().includes("feven")) {
        return {
          isAuthenticated: true,
          userDetails: {
            id: 3,
            firstName: "Feven",
            lastName: "Kiflay",
            email: "Feven@gmail.com",
            role: Roles.Owner,
          }
        }
      }
      else if (userCredentials.email.toLowerCase().includes("3g")) {
        return {
          isAuthenticated: true,
          userDetails: {
            id: 1,
            firstName: "Gebreegziabher",
            lastName: "Gebru",
            email: "3g.mit02@gmail.com",
            role: Roles.Admin,
          }
        }
      }
      else if (userCredentials.email.toLowerCase().includes("suz")) {
        return {
          isAuthenticated: true,
          userDetails: {
            id: 3,
            firstName: "Suzana",
            lastName: "",
            email: "suzana@gmail.com",
            role: Roles.Owner,
          }
        }
      }

      //TODO: implement with DB
      /** 
       * 
       * const res = await axios.post('http://localhost:8080/api/v1/authenticate', userCredentials);
       * return res.data;
       * 
       * */
    });

  const loginFormSubmitted = async (e) => {
    e.preventDefault();
    if (loginForm.current['email'].value && loginForm.current['password'].value) {

      const userCredentials = { email: loginForm.current['email'].value, password: loginForm.current['password'].value };

      const result = await dispatch(doLogin(userCredentials));

      if (userCredentials.email.toUpperCase() == result.payload.userDetails.email.toUpperCase() && userCredentials.password === "123") {
        dispatch(authActions.loginSuccessful(result.payload));
        //TODO: add access token to cookie
        /**
         * 
         * Cookies.set('user', result.payload.accessToken);
         * 
         * */
        navigate("/");
      }
      else {
        setErrorMessage("Wrong email or password.");
      }
    }
  };

  return (
    <div id="login" className="login">
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <AddressCard Address={Address} City={City} State={State} ZipCode={ZipCode} Email={Email} PhoneNumber={PhoneNumber} />
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0 login-form-container" >
            <div className="login-form-title">
              <h2>Welcome to {SystemName}</h2>
              <p className="description">Don't have an account yet? Please signup and reach out to our admin to get started with {SystemName}.</p>
            </div>

            {
              errorMessage !== null &&
              <div className="alert alert-danger alert-info">
                {errorMessage}.
              </div>
            }

            <form role="form" className="login-form" ref={loginForm} onSubmit={loginFormSubmitted}>

              <div className="row gy-2 gx-md-3">
                <label className="form-group">Email</label>
                <div className="col-md-10 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="row gy-2 gx-md-3">
                <label className="form-group">Password</label>
                <div className="col-md-10 form-group">
                  <input type="password" className="form-control" name="password" id="password" placeholder="Type your password" required />
                </div>
              </div>

              <div className="row gy-2 gx-md-3">
                <div className="my-3 col-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-left col-10"><button type="submit">Login</button></div>
                <Link to="/user-registration" className="anchor">Create account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;