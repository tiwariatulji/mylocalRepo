import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            data:[
                {name:"Atul"},
                {name:"Kumar"},
                {name:"Tiwari"}
            ]
        }
    }
    render() {
        return (
            <div>
                <StudentName/>
                <ul>
                {this.state.data.map((item)=><List data={item}/>)}
                </ul>
            </div>
        )
    }
}
class StudentName extends Component{
    render(){
        return(
            <div>
                <h1>StudentName</h1>
            </div>
        )
    }
}
class List extends Component{
    render(){
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        )
    }
}
