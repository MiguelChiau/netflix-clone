import React, { Component } from 'react'
import styled from "styled-components"
import LoginForm from "../components/login/LoginForm"
import {NavLink} from "react-router-dom"


 class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <NavLink to="/">
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
                    </NavLink>
                </div>
                <LoginForm />
            </div>
        )
    }
}

export default Login;

const Logo = styled.img`
width: 11rem;
position: absolute;
top: 25%;
left: 11%;
transform: translate(-50%, -50%);
margin-left: 0
`
