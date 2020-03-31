import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import PortHome from './PortHome'
import PortContact from './PortContact'
import PortItem from './PortItem'
import PortPage from './PortPage'
import PortHeader from './PortHeader'
import Forms from "../Project.js/Forms"
import Avatar from "../ApiExample/Avatar"
import "./PortDesign.css";
import ListComponent from '../AxiosComponent/ListComponent'



export default function Portfolio() {
    
    return (
        <BrowserRouter>
        <h1>Welcome Portfolio Web Page</h1>
        <PortHeader/>
        <Switch>
            <Route path="/" exact={true} component={PortHome}/>
            <Route path="/contact" component={PortContact}/>
            <Route path="/item/:id" component ={PortItem}/>
            <Route path="/page" exact={true} component={PortPage} />
            <Route path="/list" component={ListComponent}/>
            <Route path="/port/1" component={Forms}/>
            <Route path="/port/2" component={Avatar}/>
        </Switch>
        </BrowserRouter>
    )
}
