import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"
// import {Icon} from "modulereact-icons-kit"
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


 class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                 <span style={{marginLeft: "17.5%", fontSize: "1.125rem"}}>
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
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Information </Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us </Link>
                        </li>
                       
                    </ul>
                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Redeem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                        
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices </Link>
                        </li>
                        
                    </ul>

                    <div className="lang-btn">
                        <LanguageIcon style={{marginRight: "0.5%"}}/>
                        English
                        <ArrowDropDownIcon/>

                    </div>

                </div>

                
            </FooterContainer>
        )
    }
}

export default Footer;

const FooterContainer = styled.footer`
background: var(--main-deep-dark);
padding-top: 10rem;
padding-bottom: 3rem;
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
    width: 8rem;
}



`


