import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import userActions from "../redux/actions/usersActions";
import "../styles/usersForm.css";
import Paises from "./apiPaises";

const UsersForm = (props) => {

  const [selectCountry, setSelectCountry] = useState("unselected");
  function selected(event) {
    setSelectCountry(event.target.value);
  }

    const [lastname, setLastname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [urlimage, setUrlimage] = useState('')
    const [country, setCountry] = useState('')

  console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const userData = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      country: event.target[2].value,
      urlimage: event.target[3].value,
      email: event.target[4].value,
      password: event.target[5].value,
      from: "signup",
    };
    props.signUpUser(userData);
    console.log(userData)
  };


  window.scrollTo({ top: 0, behavior: "smooth" });

  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("containerUsersForm");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  return (
    <>
      <div class="container-usersForm" id="containerUsersForm">
        <div class="usersForm-container sign-up-container">
          <form className="SignForm"  onSubmit={handleSubmit} >
            <h1 className="h1-usersForm">Create Account</h1>
            <div class="social-container">
              <a className="a-usersForm" href="#" class="social a-usersForm">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="a-usersForm" href="#" class="social a-usersForm">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span className="span-usersForm">
              or use your email for registration
            </span>
            <input
              className="input-usersForm"
              type="text"
              placeholder="First name"
              name="firstname"
              value={firstname} onChange={ e => setFirstname(e.target.value) }
            />
            <input
              className="input-usersForm"
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastname} onChange={ e => setLastname(e.target.value) }
            />
              <div className="inputSelect">
              <select  className="input-usersForm" name="select"
              value={country} onChange={ e => setCountry(e.target.value) }
              >
                <option  value="value" selected disabled>
                  Select your country
                </option>
                {Paises.map((countries, key) => {
                  return (
                    <option className="input-usersForm" key={key} value={countries.name}>
                      {countries.name}
                    </option>
                  );
                })}
              </select>
              </div>
            <input
              className="input-usersForm"
              type="text"
              placeholder="Url Image"
              name="urlimage"
              value={urlimage} onChange={ e => setUrlimage(e.target.value) }
              
            />
            <input
              className="input-usersForm"
              type="email"
              placeholder="Email"
              name="email"
              value={email} onChange={ e => setEmail(e.target.value) }
            />
            <input
              className="input-usersForm"
              type="password"
              placeholder="Password"
              name="password"
              value={password} onChange={ e => setPassword(e.target.value) }
            />
            <button className="button-usersForm" type="submit">Sign Up</button>
          </form>
        </div>
        <div class="usersForm-container sign-in-container">
          <form className="SignForm" action="#">
            <h1 className="h1-usersForm">Sign in</h1>
            <div class="social-container">
              <a className="a-usersForm" href="#" class="social a-usersForm">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="" href="#" class="social a-usersForm">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span className="span-usersForm">or use your account</span>
            <input
              className="input-usersForm"
              type="email"
              placeholder="Email"
            />
            <input
              className="input-usersForm"
              type="password"
              placeholder="Password"
            />
            <a className="a-usersForm" href="#">
              Forgot your password?
            </a>
            <button className="button-usersForm">Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 className="h1-usersForm">Welcome Back!</h1>
              <p className="p-usersForm">
                To keep connected with us please login with your personal info
              </p>
              <button className="button-usersForm ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 className="h1-usersForm">Hello, Friend!</h1>
              <p className="p-usersForm">
                Enter your personal details and start journey with us
              </p>
              <button className="button-usersForm ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser
};

export default connect(null, mapDispatchToProps)(UsersForm);
