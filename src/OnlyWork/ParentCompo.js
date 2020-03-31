import React, { Component } from 'react'
import ChildCompo from "./ChildCompo";
export default class ParentCompo extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[
                 {name:"Atul",
                  company:"Itservices India" },
                 {name:"Vishal",
                 company:"Jira"}
                   
                  
                              
            ]
        }
    }
    render() {
        return (
            <div>
                <ChildCompo someValue={this.state.user}/>
            </div>
        )
    }
}


// import React from 'react'

// export default function ChildCompo(props) {
//     return (
//         <div>
//             <ul>{props.someValue.map((item,i)=><li>{item.name}{item.company}</li>)}</ul>
            
//             {props.someValue[1].name}
//         </div>
//     )
// }