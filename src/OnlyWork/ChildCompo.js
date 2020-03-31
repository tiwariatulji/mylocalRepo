




const error ={    
    color: 'red',    
    fontWeight:'bold',    
    fontSize:'14'    
}   






















// // import React, { Component } from 'react'

// // export default class ChildCompo extends Component {
// //    render() {
// //       var i = 2;
// //       var Mystyle = {
// //          fontSize: 50,
// //          color: "#FF0000"
// //       }
// //       return (
// //          <div>
// //             <h1>{i == 1 ? "true" : "false"}</h1>
// //             <h2>{i === 2 ? "True" : "False"}</h2>
// //             <h1 style={Mystyle}>Hello India</h1>
// //             <ChildCom/>
// //          </div>
// //       )
// //    }
// // }

import React, { Component } from 'react'

export default class ChildCompo extends Component {
   constructor(props){
      super(props);
      this.state={
         username:[]
      }
   }
   handleClick =()=>{
       var item = "set state"
       var myArry = this.state.username.slice();
         myArry.push(item)
         this.setState({username:myArry})
      }
   render() {
      return (
         <div>
            <h1>Hello {this.state.username}</h1>
            <button onClick={this.handleClick}>Click here</button>
         </div>
      )
   }
}



