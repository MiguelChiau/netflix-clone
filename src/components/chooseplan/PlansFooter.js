import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const PlansFooter = () => {
    return (
        <FooterContainer style={{background: "#f3f3f3"}}>
                 <span style={{marginLeft: "17.5%", fontSize: "1.125rem", color: "#999"}}>
                    Questions? 
                    <Link style={{marginLeft: "0.5%"}}>
                    Call 1-877-742-1335
                    </Link>
                </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                       
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                       
                       
                    </ul>
                    <ul>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                    </ul>
                     <ul>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                    </ul>
                   

                </div>
                
                
                
            </FooterContainer>
    )
}

export default PlansFooter

const FooterContainer = styled.footer`
justify-content: center;
margin-top: 6rem;
position: relative;
z-index: 5;
padding-top: 3rem;
padding-bottom: 6rem;
color: #999;

.footer-columns{
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    color: #999;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr) 

}

ul li{
    list-style-type: none;
    line-height: 2.5;
}

a{
    color: #999
}

a:hover{
    text-decoration: underline;
    cursor: pointer;

}

.lang-btn{
    background: transparent;
    border: 0.9px solid #333;
    width: 9rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 40px 2rem;
}

.lang-toggle{
    margin-left: 15%;
    position: absolute;
}


`


