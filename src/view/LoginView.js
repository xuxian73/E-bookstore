import React from 'react'
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom'
import LoginForm from '../component/LoginForm'
import '../css/Login.css'

class LoginView extends React.Component {
    state = {
        isLogin: true,
    }
    handleRegClick = () =>{
        var reg = document.getElementsByClassName('register-form');
        var log = document.getElementsByClassName("login-form");
        reg[0].style.display = "block";
        log[0].style.display = "none";
        this.setState(
            {isLogin: false}
        )
    }
    handleLogClick = () =>{
        var reg = document.getElementsByClassName('register-form');
        var log = document.getElementsByClassName("login-form");
        reg[0].style.display = "none";
        log[0].style.display = "block";
        this.setState(
            {isLogin: true}
        )
    }
    render() {
        return (
            <div class="login-page">
                <div class="form">
                    <form class="register-form">
                        <h1>Register</h1>
                        <input type="text" placeholder="name" id="reg-name" />
                        <input type="password" placeholder="password" id="reg-pwd" />
                        <input type="password" placeholder="input password again" id="reg-pwd2" />
                        <input type="email" placeholder="email address" id="reg-email" required/>
                        <button id="reg-button">create</button>
                        <p class="message">Already registered? <a href="#" onClick={this.handleLogClick}>Sign In</a></p>
                    </form>
                    <form class="login-form">
                        <h1>Login</h1>
                        <input type="text" placeholder="username" id="log-name" />
                        <input type="password" placeholder="password" id="log-pwd" />
                        <div><input type="checkbox" class="check" /><span class="remember">Remember me?</span></div>
                        <Link to="/book"><button>login</button></Link>
                        <p class="message">Not registered? <a href="#" onClick={this.handleRegClick}>Create an account</a></p>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(LoginView);