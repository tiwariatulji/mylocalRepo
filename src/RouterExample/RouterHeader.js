import React from 'react'
import { BrowserRouter,Route ,Switch, Link,NavLink} from 'react-router-dom'
export default function RouterHeader() {
    return (
        <div>
            <div className="router_color" >
            <h1 className="router_color tc">Welcome Page</h1>
            <ul>
            <li><NavLink to="/" activeClassName="is-active"  >Home</NavLink></li> 
            <li><NavLink to="/user"activeClassName="is-active">User</NavLink></li>
            <li><NavLink to="/contact"activeClassName="is-active">Contact</NavLink></li>
            <li><NavLink to="/help"activeClassName="is-active">Help</NavLink></li>
                              
            </ul>
            <hr/>
        </div>
        </div>
    )
}



