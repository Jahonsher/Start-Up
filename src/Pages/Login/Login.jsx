import React from 'react';
import "./style.css";

const Login = () => {
  return (
    <>
      <div class="form-container">
        <h1 class="title">LOGIN</h1>
        <form class="form">
            <div class="input-group">
                <label for="username" class="username">Username</label>
                <input type="text" name="username" required />
            </div>
            <div class="input-group">
                <label for="password" class="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <button class="sign-in">Sign in</button>
            <div class="social-messages">
                <div class="line"></div>
                <p class="message">Login with social accounts</p>
                <div class="line"></div>
            </div>
            <div class="icons">
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-github"></i>
            </div>
            <p class="sign-up">Don't you have an account?
                <a href="#">Sign up</a>
            </p>
        </form>
</div>
    </>
  )
}

export default Login