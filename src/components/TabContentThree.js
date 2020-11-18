import React from 'react'
import styled from "styled-components"

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

 function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: "1.5rem"}}> 
                        Choose one plan and watch everything on Netflix
                    </span>
                    <button style={{background: "var(--main-red)", border: "none",
                     outline: "none", color: "#fff", padding: "1rem", fontSize: "1.5rem", margin: "2rem", width: "10rem"}}>Try it now</button>
                </div>

                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    Basic
                                </th>
                                <th>
                                    Standard
                                </th>
                                <th>
                                    Premium
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td>
                                    <CloseIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>Ultra HD available</td>
                                <td>
                                    <CloseIcon/>
                                </td>
                                <td>
                                    <CloseIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Screens you can watch on at the same time
                                </td>
                                <td>
                                    1
                                </td>
                                <td>
                                    2
                                </td>
                                <td>
                                    4
                                </td>
                            </tr>
                              <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                            </tr>

                            
                              <tr>
                                <td>Watch on your laptop</td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                            </tr>

                            
                              <tr>
                                <td>Cancel anytime</td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                                <td>
                                    <CheckIcon/>
                                </td>
                            </tr>


                        </tbody>
                    </table>

                </div>
            
            </div>

        </TabContainer>
        
    )
}

export default TabContentThree

const TabContainer = styled.div`
background: var(--main-deep-dark);

.tab-content{
   margin: 0 15%;
   padding-bottom: 1%; 
}

.tab-top-content{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-content: center;
    align-items: center;
    padding: 3rem 0 0;

}

span{
    grid-column: 3/9;
}

.tab-bottom-content{
    margin: 2rem auto;
}

table{
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
}

table thead th{
    text-transform: uppercase;
    padding: 0.8rem;
}

table tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

table tbody tr td{
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;

}

table tbody tr td:first-child{
    text-align: left;
}

table tbody tr:nth-child(even){
    background: #222;

}

`