import React from 'react'
import styled from "styled-components"
import NetflixLogo from "../images/logo.png"
import {Link} from "react-router-dom"
import profile1 from "../images/profile-1.png"
import profile2 from "../images/profile-2.png"
import profile3 from "../images/profile-3.png"
import profile4 from "../images/profile-4.png"


 function Watching() {
    return (
        <WatchingContainer >
            <Link to="/">
            <img src={NetflixLogo} className="watching-logo"  alt=""/>
            </Link>
            <div className="watching-content" >
                <div>
                    <span className="title">
                    Who's watching?
                </span>

                </div>
                
                <div className="profiles">
                    <div className="profile">
                        <Link to="/browse">
                        <img src={profile1} className="image"/>
                        </Link>
                        <span className="username">dad</span>
                    </div>
                    <div className="profile">
                        <Link to="/browse">
                        <img src={profile2} className="image"/>
                        </Link>
                        <span className="username">kid-1</span>
                    </div>
                    <div className="profile">
                        <Link to="/browse">
                        <img src={profile3} className="image"/>
                        </Link>
                        <span className="username">kid-2</span>
                    </div>
                    <div className="profile">
                        <Link to="/browse">
                        <img src={profile4} className="image"/>
                        </Link>
                        <span className="username">mom</span>
                    </div>
                    
                </div>
                <div>
                    <button style={{color: "var(--main-grey)", background: "var(--main-dark)", border: "2px solid var(--main-grey)",
                     outline: "none", padding: "1rem", fontSize: "1.5rem", width: "20rem"}}>Manage Profiles</button>

                </div>
                

            </div>
            
        </WatchingContainer>
    )
}

export default Watching;

const WatchingContainer = styled.div`

.watching-logo{
    position: absolute;
    top: 2%;
    left: 4.5%;
    width: 11rem;
}

.watching-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
}

.profiles{
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
}

.profile{
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    &:hover{
        color: white;
    }
}

.title{
    font-size: 60px;
}

.username{
    color: var(--main-grey);
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
}

.profile:hover .username{
color: white;
text-transform: uppercase;
cursor: pointer;


}

.profile:hover .image{
    transform: scale(1.1);
    transition: all .5s;
    transition-timing-function: ease-out;
    cursor: pointer;
    border: 3px solid blue;
}

.image{
   Width: 200px;
   height: 200px; 
   margin: 0px 15px;
}
`