import React from 'react'
import styled from "styled-components"
import NetflixLogo from "../images/logo.png"
import {Link, NavLink} from "react-router-dom"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "../components/Button"
import FooterChoosePlan from "../components/chooseplan/PlansFooter"

 const ChoosePlan = () => {
    return (
        <MainContainer>
            <div className="header-top">
                <Link to ="/">
                    <img src={NetflixLogo} className="plans-logo" alt=""/>
                </Link>
                <NavLink to="/login" className="singIn-btn" style={{margin: "1.5625rem 3% 0",
    padding: "0.4375rem 1.0625rem",
    fontWeight: "bold",
    color: "var(--main-dark)",
    fontSize: "700",
    right: "0",
    position: "absolute",
    cursor: "pointer"
    }}>
                    Sign In
                </NavLink>
            </div>
            <div className="header-content">
                <CheckCircleOutlineIcon style={{color: "red", margin: "6.25rem auto 1.875rem", fontSize: "40"}} className="checkmark-logo"/>
                <p>Step <strong>1</strong> of <strong>3</strong></p>
                <h2>Choose your plan.</h2>
                <div className="checked-list">
                    <div className="bullet">
                        No commitments, cancel anytime.
                    </div>
                    <div className="bullet">
                        Everything on Netflix for one low price.
                    </div>
                    <div className="bullet">
                        Unlimited viewing on all your devices.
                    </div>
                </div>
                <button className="btn-plans">See the plans</button>
            </div>
            <FooterChoosePlan/>
            
        </MainContainer>
    )
}

export default ChoosePlan


const MainContainer = styled.div`
background: #fff;
.header-top{
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6
}

.header-content{
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-direction: column;
    z-index: 2;

}

.btn-plans{
    background: var(--main-red);
  text-transform: uppercase;
  border: none;
  outline: none;
  margin-bottom: 5%;
  margin-top: 5%;
  padding: 1rem;
  border-radius: 0.1875rem;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  cursor: pointer;
  color: #fff
}

.checkmark logo{
    width: 3rem;
    margin-top: 3.125rem;
    margin-bottom: 2rem;
}

.plans-logo{
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50%, -50%);
    margin-left: 0;

}

.checked-list{
    text-align: left;
    margin: 1rem auto 3rem;
    padding-left: 1.5625rem;
    width: 85%;
    font-size: 17px;
    padding: auto;
}

.bullet{
    margin-top: 1rem;
    margin-left: 1rem;
    text-indent: -1rem;
    line-height: 1.2rem; 
}

.checked-list .bullet::before{
    color: transparent;
    display: inline-block;
    position: relative;
    height: 0.3rem;
    width: 0.8rem;
    content: "";
    left: -0.9375rem;
    bottom: 0.1875rem;
    border-bottom: 1px solid #e50914;
    border-left: 1px solid #e50914;
    transform: rotate(-45deg)
}

.signIn-btn{
    &:hover{
        text-decoration: underline;
    }
    
}

`

