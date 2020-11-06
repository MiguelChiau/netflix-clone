import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import "./Landing.css"

export default function Landing() {
    return (
        <div className="land" style={{
            backgroundColor: " #111;"
        }}>
<div className="showcase"
style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://i.ibb.co/vXqDmnh/background.jpg")`,
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center",
        height: "93vh",
      }}>
           
              <div className="showcase-top">
                  
            <img
            // className="nav__logo"
            src="
            https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
            "
            alt="Netflix Logo"
            />

            <a href="#" className="btn btn-rounded"> Sign Up</a>

              </div>

              <div className="showcase-content">
                  <h1>See what's next</h1>
                  <p>Watch anywhere. Cancel anytime</p>
                  <a href="#" className="btn btn-xl"> Watch Free For 30 Days <FontAwesomeIcon icon="chevron-right"/></a>

              </div>
        </div>
        </div>

        
    )
}
