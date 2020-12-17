
import React, {useEffect, useState} from "react";
import "./Nav.css"
import NetflixLogo from "./images/logo.png"
import avatar from "./images/profileAvatar.png"
import {Link} from "react-router-dom"

function Nav() {

    //Scroll listener to bring in and out the nav bar background-color
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
       window.scrollY > 100 ? setNavbar(true) : setNavbar(false)
    }
window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? "nav active" : "nav" }>
            <Link to="/">
             <img
            className="nav__logo"
            src={NetflixLogo}
            alt="Netflix Logo"
            />
            </Link>
           
           <Link to="/watching">
           <img
            className="nav__avatar"
            src={avatar}
            alt="Netflix Avatar"
            />
           </Link>
            
        </div>
    )
}

export default Nav
