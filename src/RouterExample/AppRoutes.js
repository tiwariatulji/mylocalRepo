import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import "../App.css"
import Home from "../RouterExample/Home"
import User from "../RouterExample/User"
import ContactPage from "../RouterExample/ContactPage"
import HelpPage from "../RouterExample/HelpPage"
import PageNotFound from "../RouterExample/PageNotFound"
import "tachyons"
import "./RouterColor.css"
import RouterHeader from './RouterHeader'
import EditPage from './EditPage'




export default function AppRoutes() {
    return (

        <BrowserRouter>
            <RouterHeader />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/user" component={User} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditPage}/>
                <Route component={PageNotFound} />
            </Switch>

        </BrowserRouter>
    )
}
