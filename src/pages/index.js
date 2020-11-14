 /*This is the main component to render all other components
 This is a stateful component (rcc)*/ 

import React, { Component } from 'react'
import Header from "../components/Header"

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

export default Main