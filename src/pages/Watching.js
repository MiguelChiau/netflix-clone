import React from 'react'
import styled from "styled-components"
import NetflixLogo from "../images/logo.png"
import {Link} from "react-router-dom"
import profiles from "../components/profiles/profiles.json"
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
                    Whos's watching?
                </span>

                </div>
                
                <div className="profiles">
                    <div className="profile">
                        <img src={profile1} className="image"/>
                        <span className="username">dad</span>
                    </div>
                    <div className="profile">
                        <img src={profile2} className="image"/>
                        <span className="username">kid-1</span>
                    </div>
                    <div className="profile">
                        <img src={profile3} className="image"/>
                        <span className="username">kid-2</span>
                    </div>
                    <div className="profile">
                        <img src={profile4} className="image"/>
                        <span className="username">mom</span>
                    </div>
                    
                </div>
                <div>
                    <button>
                    Manage Profiles
                </button>

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
}

.title{
    font-size: 60px;
}

.username{
    color: var(--main-grey)
}

.image{
   Width: 200px;
   height: 200px; 
}
`