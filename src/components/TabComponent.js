import React, { Component } from 'react'
import {Tab, Tabs, TabList, TabPanel} from "react-tabs"
import TabDoor from "../components/tabs_nav/TabDoor"
import TabDevices from "../components/tabs_nav/TabDevices"
import TabPrice from "../components/tabs_nav/TabPrice"

import TabContentOne from "./TabContentOne"
import TabContentTwo from "./TabContentTwo"
import TabContentThree from "./TabContentThree"


import "../css/TabsNav.css"


 class TabComponent extends Component {

    state={
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList style={{listStyleType: "none"}} className="tab-nav-container">
                        <Tab style={{outline: 0}} className={`${this.state.tabIndex === 0 ? "tab-selected active" : null}`}>
                            <TabDoor />
                            <p style={{marginBottom: '1.875rem'}}>
                                <strong>
                                    No Commitments<br/>
                                    Cancel online at anytime
                                </strong>
                            </p>
                        </Tab>
                        <Tab style={{outline: 0}} className={`${this.state.tabIndex === 1 ? "tab-selected active active" : null}`}>
                            <TabDevices/>
                            <p>
                                <strong>
                                    Watch anywhere
                                </strong>
                            </p>
                        </Tab>
                        <Tab style={{outline: 0}} className={`${this.state.tabIndex === 2 ? "tab-selected active active" : null}`}>
                            <TabPrice/>
                            <p>
                                <strong>
                                    Pick your price
                                </strong>
                            </p>
                        </Tab>
                    </TabList>
                    
                    <TabPanel>
                        <TabContentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree/>
                    </TabPanel>
                </Tabs>
                
            </div>
        )
    }
}

export default TabComponent;