import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
const pageTitle = <span>Welcome React Page</span>

function evaluate(a,b) {
    if(a>b){
    return <span className="subtract">{a-b}</span>
    }
    return <span classname="addition">{a+b}</span>
}
export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
       
        return (
            <div className='header'>
                <h1>{pageTitle}</h1>
                <p> this Page Contain</p>
                
                <Router>
                <nav>
                    <ul>
                        <li>
                          <li><Link to='/home'>Home</Link></li>  
                           <li> <Link to = "/Contact">Contact</Link></li>
                            <li><Link to ="/User">User</Link></li>
                        </li>
                    </ul>
                </nav>
                </Router>
                <div>
            <h1>evaluate two number{evaluate(40,20)}</h1>
           
            </div>
            </div>
            
        );
    }
}