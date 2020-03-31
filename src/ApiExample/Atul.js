import React, { Component } from 'react';

class Atul extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <header id="header" className="fixed-top">
                <div className="container">
                <div className="logo float-left">
                    <h1 className="text-light"><a href="#header"><span>Pantheon</span></a></h1>
                    <a href="#intro" className="scrollto"><img src="img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <nav className="main-nav float-right d-none d-lg-block">
                    <ul>
                    <li className="active"><a href="#intro">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    
                    <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
                
                </div>
            </header>
        )
    }
}

export default Atul;