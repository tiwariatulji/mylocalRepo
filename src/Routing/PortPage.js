import React from 'react'
import {Link} from "react-router-dom"
export default function PortPage() {
    return (
        <div>
            <h1>My Work</h1>
            <p>Checkout the stuff I hav done:</p>
            <Link to="/port/1">Item one</Link><br/>
            <Link to="/port/2">Item Two</Link>
        </div>
    )
}
