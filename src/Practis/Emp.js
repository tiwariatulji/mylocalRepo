// import React from 'react';
// import {useState,useEffect} from 'raect';
// const Empolyee=(props)=>{
//     [count, setCount] = useState(0);

//      var setC
         
//     return(
//         <div>
//             <button onclick={()=>setCount=(count+1)}>Count</button>
//         </div>
    

//     )
// ;
// const Example =(props)=>{
//     return(
//         <div>
//             <h1>
//                 hello Employee
//         </h1>
//         <h1>Name:{props.name}</h1>
//         <h1>Id:{props.id}</h1>
//         </div>
//     )
// }
// export default Empolyee;


// import React, { Component } from "react";
// export default class Button extends Component {
//   constructor() {
//     super();
//     this.state = { buttonText: "Click me, please" };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(() => {
//       return { buttonText: "Thanks, been clicked!" };
//     });
//   }
//   render() {
//     const { buttonText } = this.state;
//     return <button onClick={this.handleClick}>{buttonText}</button>;
//   }
