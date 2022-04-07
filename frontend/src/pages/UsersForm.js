import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../styles/usersForm.css";

const UsersForm = (props) => {

  window.scrollTo({top: 0, behavior: "smooth"})

  // const signUpButton = document.getElementById("signUp");
  // const signInButton = document.getElementById("signIn");
  // const container = document.getElementById("containerUsersForm");

  // signUpButton.addEventListener("click", () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener("click", () => {
  //   container.classList.remove("right-panel-active");
  // });

  return (
    <>
      <div class="container-usersForm" id="containerUsersForm">
        <div class="usersForm-container sign-up-container">
          <form className="SignForm" action="#">
            <h1 className="h1-usersForm">Create Account</h1>
            <div class="social-container">
              <a className="a-usersForm" href="#" class="social a-usersForm">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a className="a-usersForm" href="#" class="social a-usersForm">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span className="span-usersForm">or use your email for registration</span>
            <input className="input-usersForm" type="text" placeholder="Nickname" />
            <input className="input-usersForm" type="email" placeholder="Email" />
            <input className="input-usersForm" type="password" placeholder="Password" />
            <button className="button-usersForm">Sign Up</button>
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
            <input className="input-usersForm" type="email" placeholder="Email" />
            <input className="input-usersForm" type="password" placeholder="Password" />
            <a className="a-usersForm" href="#">Forgot your password?</a>
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
              <p className="p-usersForm">Enter your personal details and start journey with us</p>
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

const mapDispatchToProps = {};

export default connect(null, null)(UsersForm);
