import React from 'react'
import { BrowserRouter, Route, Switch,  NavLink, Link } from 'react-router-dom'

export default function PortHeader() {
    const datacount = 4545;
    return (
        <div className="router_design"  >
            <header>
                <ul>
                    <li><NavLink to="/" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/contact">PortContact</NavLink></li>
                    <li><NavLink to={`/item/${datacount}`}>item</NavLink> </li>
                    <li><NavLink to="/page">Page</NavLink> </li>
                    <li><Link exact={true} to="/list">It services Employee</Link></li>
                    <hr/>
                </ul>
            </header>
        </div>
    )
}
