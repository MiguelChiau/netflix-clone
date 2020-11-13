import React from 'react'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import TabletMacIcon from '@material-ui/icons/TabletMac'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import IconLabelTabs from "./IconLabelTabs"


import "./Landing.css"

export default function Landing() {
    return (
        <div >
        <div className="showcase"
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

            <a href="#" className="btn btn-rounded"> Sign In</a>

              </div>

              <div className="showcase-content">
                  <h1>See what's next</h1>
                  <p>Watch anywhere. Cancel anytime</p>
                  <a href="#" className="btn btn-xl"> Watch Free For 30 Days 
                  <ChevronRightIcon/>
                  </a>

              </div> 
              
        </div>

        <div className="tabs">  

        </div>
        <IconLabelTabs/>
        
        </div>

        
    )
}
