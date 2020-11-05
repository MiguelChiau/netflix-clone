
import React, {useEffect, useState} from "react";
import "./Nav.css"

function Nav() {

    //Scroll listener to bring in and out the nav bar background-color
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
       window.scrollY > 100 ? setNavbar(true) : setNavbar(false)
    }
window.addEventListener('scroll', changeBackground)

    return (
        <div className={navbar ? "nav active" : "nav" }>

            <img
            className="nav__logo"
            src="
            https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
            "
            alt="Netflix Logo"
            />

            <img
            className="nav__avatar"
            src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
            alt="Netflix Avatar"
            />
            
        </div>
    )
}

export default Nav
