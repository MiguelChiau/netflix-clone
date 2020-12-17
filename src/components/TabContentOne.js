import React from 'react'
import styled from "styled-components"
import Button from "./Button"
import tab1 from "../images/tab-1-Cancel.png"
import {Link} from "react-router-dom"

function TabContentOne() {
    return (
        <TabContentContainer>
            <div>
            <div className="container">
                <div className="tab-content">
                    <div>
                         <span style={{marginBottom: "2rem"}}> If you decide Netflix isn't for you - no problem. No commitment.
				        Cancel online anytime.
                    </span>
                    <br/>
                    <Link to="/choose-plan">
                     <button style={{background: "var(--main-red)", border: "none",
                     outline: "none", color: "#fff", padding: "1rem", fontSize: "1.5rem", margin: "2rem"}}>Try it now</button>
                    </Link>
                    </div>
                   
                    {/* <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="t"  />    */}
                    <img src={tab1} alt="t"  />   


                </div>

            </div>
            
        </div>

        </TabContentContainer>
        
    )
}

export default TabContentOne;


const TabContentContainer = styled.div`
background: var(--main-deep-dark);

.container{
    margin: 0 10%;
}
img{
    width: 31.875rem;
}

.tab-content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
}

`