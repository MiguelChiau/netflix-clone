import React, { Component } from 'react'
import {Link} from 'react-router-dom'


 class Footer extends Component {
    render() {
        return (
            <div>
                 <span>
                    Questions? 
                    <Link>
                    Call 1-877-742-1335
                    </Link>
                </span>
                <div>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                    </ul>

                </div>

                
            </div>
        )
    }
}

export default Footer;


