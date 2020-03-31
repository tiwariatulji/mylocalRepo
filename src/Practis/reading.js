// import React ,{useState} from "react";
// import {
//     BrowserRouter as Router,Switch,Route,prompt,Link } from "react-router-dom";

//     const reading=()=>{
//         return(
//             <Router>
//             <ul>
//                 <li>
//                     <Link to ="/">Form</Link>
//                 </li>
//                 <li>
//                     <Link to ="one">One</Link>
//                 </li>
//                 <Link to ="/two">Two</Link>
//             </ul>
//             <Switch>
//                 <Route path="/" exact children={<blokingForm/>}/>
//                 <Route path="/one" exact childeren ={<h3>One</h3>}/>
//                 <Route path ="/two" childern ={<h3> Two</h3>}/>
//             </Switch>
//             </Router>
//         )
//     }
//     function BlockingForm(){
//         let[isBloking,setIsBloking]= useState(false);
//         return(
//             <from onsubmit={event=>{
//                 event.preventDefault();
//                 event.target.reset();
//                 setIsBloking(false);
//             }}
//             >
//                <prompt
//                 when={isBloking}
//                 message={location=> `Are you sure want go to ${location.pathname}`}
//               />
//               <p>
//                   Blocking{""}
//                   {isBloking? "yes, click a link or the back button":"Nope"}
//               </p>
//               <input size="50" placeholder="type something to block transitions"
//               onchange={event=>{setIsBloking(event.target.vaule.length>0);}}
//               />
//               <p></p>
//               <button>Submit to stop blocking</button>
//               </from>

//         );
//     }
//     export default reading;



import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";