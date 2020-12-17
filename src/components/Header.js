import React, { Component } from 'react'
import {NavLink, Link} from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import bg from "../images/bg.jpg"
import NetflixLogo from "../images/logo.png"


//For the media query
import { generateMedia } from "styled-media-query";




 class Header extends Component {
    render() {
        return (
        <HeaderComponent className="header-container">
            <div className="header-top">
                <Link to="/">
                <img src={NetflixLogo}/>
                </Link>
                <NavLink to="/login" className="signIn-btn">
                    Sign In
                </NavLink>
            </div>
            <div className="header-content">
                  <Title className="header-content-top">See what's next!</Title>
                  <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
                  <Link to="/choose-plan">
                  <Button  className="main-offer-btn" primary> Try it now 
                  <ChevronRightIcon style={{ fontSize: "37", marginLeft: "1rem", verticalAlign: "bottom"  }}/>
                  </Button>
                  </Link>
                  
            </div>
        </HeaderComponent>

        )
    }
}

export default Header

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

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
${customMedia.lessThan('smTablet')`
margin-top: 1.25rem;
right: 5%;

`}

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
  ${customMedia.lessThan('tablet')`
  left: 20%;
  
  `}

},

.header-container {
  width: 100vw;
  height: 85vh;
  position: relative;
  // background-image: url("https://i.ibb.co/vXqDmnh/background.jpg");
  background-image: url(../images/bg.jpg)
  background-position: "center center";
  background-size: cover;

  
},
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
margin: 2.5rem 0 1.875rem;
text-transform: uppercase;


`;