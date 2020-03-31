
   import React, { Component } from 'react'
   
   export default class Nav extends Component {
       constructor(props){
           super(props);
           this.state={
               data:[]
           }
       }
       handleClick =()=>{
           var list ="set state"
           var myarry = this.state.data.slice()
            myarry.push(list)
            this.setState({data:myarry})

       }
       render() {
           return (
               <div>
                  <h1>Hello {this.state.data}</h1>  
                  <button onClick={this.handleClick}>Click here</button>
               </div>
           )
       }
   }
   
