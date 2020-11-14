import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"

import ChevronRightIcon from '@material-ui/icons/ChevronRight';



import "../Landing.css"

 class Header extends Component {
    render() {
        return (
        /*<div className="showcase"
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.ibb.co/vXqDmnh/background.jpg")`,

        backgroundPosition: "center center",
        height: "95vh",
        }}>
           
              <div className="showcase-top">
                  
            <img
            // className="nav__logo"
            src="
            https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
            "
            alt="Netflix Logo"
            />

            <NavLink to ="/">
<a href="#" className="btn btn-rounded"> Sign In</a>
            </NavLink>

            

              </div>

              <div className="showcase-content">
                  <h1>See what's next</h1>
                  <p>Watch anywhere. Cancel anytime</p>
                  <a href="#" className="btn btn-xl"> Watch Free For 30 Days 
                  <ChevronRightIcon/>
                  </a>

              </div> 
              
        </div>*/

        <HeaderComponent className="header-container">
            <div className="header-top">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
                <NavLink to="/" className="signIn-btn">
                    Sign In
                </NavLink>
            </div>
            <div className="header-content">
                  <Title>See what's next.</Title>
                  <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
                  <button> Try it now 
                  <ChevronRightIcon/>
                  </button>
            </div>
        </HeaderComponent>

        )
    }
}

export default Header

//Styles for the header 
const HeaderComponent = styled.div`
.signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;

    &hover {
  opacity: 0.9;
  background: var(--main-red-hover);
}

},

.header-top {
  position: relative;
  height: 90px;
  z-index: 2;
}
.header-top img {
  width: 170px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
},

.header-container {
  width: 100vw;
  height: 90vh;
  position: relative;
  background-image: url("https://i.ibb.co/vXqDmnh/background.jpg");
  background-position: "center center";
  background-size: cover;
  
},

.header-content{
 
  position: relative;
  margin: 4.5rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  z-index: 2;
}


`;

//For the main title
const Title = styled.h1`
margin: 0 0 1.2rem;
font-size: 5rem;
font-weight: 700;
line-height: 1.1rem;
position: relative;
`;

const SubTitle = styled.h2`
font-weight: 400;
font-size: 1.875rem;
line-height: 1.25rem;
margin: 0 0 1.875rem;
text-transform: uppercase;
position: absolute;
`;