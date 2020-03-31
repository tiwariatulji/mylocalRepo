import React, { Component } from 'react'

export default class propsExam extends Component {
    constructor(){
        this.state={
            name:'',
        }
    }
    render() {
        return (
            <div>
               <JTP jtpProp={this.state.name}/>
            </div>
        )
    }
}
class JTP extends Component{
    render(){
        return(
            <div>
                <h1>State &Props Example</h1>
                <p>Welcome to{this.props.jtpProp}</p>
                <p>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p>  
            </div>
        )
    }
}
====================================================================================