import React from 'react'
import styled from "styled-components"


 function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: "1.5rem"}}> 
                        Watch TV shows and movies anytime, anywhere - personalized for you.
                    </span>
                    <button style={{background: "var(--main-red)", border: "none",
                     outline: "none", color: "#fff", padding: "1rem", fontSize: "1.5rem", margin: "2rem", width: "10rem"}}>Try it now</button>
                </div>

                <div className="tab-bottom-content">
                    <div >
                      <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" style={{width: "18.75rem", paddingTop:"0.625rem" }}/>
                      <h3>
                          Watch on your TV
                      </h3>
                      <p>
                          Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray Players and more.
                      </p>
                    </div>

                    <div >
                      <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" style={{width: "18.75rem"}}/>
                      <h3>
                         Watch instantly or download for later
                      </h3>
                      <p>
                        Available on phone and tablet, wherever you go.
                      </p>
                    </div>

                    <div >
                      <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" style={{width: "18.75rem"}}/>
                      <h3>
                          Use any computer
                      </h3>
                      <p>
                          Watch right on Netflix.com.
                      </p>
                    </div>
                </div>
            </div>
        </TabContainer>
        
    )
}

export default TabContentTwo

const TabContainer = styled.div`
background: var(--main-deep-dark);

.tab-content{
    margin: 0 15%;
}

.tab-top-content{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;

}

span{
    grid-column: 1/8;
}

.tab-bottom-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
     
}

p{
    color: var(--main-grey);
}
h3{
    margin: 0.5rem 0;
}

`