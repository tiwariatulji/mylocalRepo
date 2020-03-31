import React, { Component } from 'react'

export default class FragmentExam extends Component {
     constructor(props){
         super(props)
         this.state={
             isLoggedIn:""
         }
     }
     
     render() {  
        const isLoggedIn = this.state.isLoggedIn;  
        return (  
          <div>  
            Welcome {isLoggedIn ? 'Back' : 'Please login first'}.  
          </div>  
        );  
        }}





// import React from 'react'
// export default function FragmentExam() {
//     return (
//         <div>
//             {/* {(10>2)&& alert("this alert will be Shown")} */}
//            {(("atul"==="atul") && alert ('hello Atul tiwari'))}
//             <FragmentVB/>
//         </div>
//     )
// }


// function FragmentVB(props) {
//     var i = 1
//     return (
//         <div>
//             {i===2 ? "true!":"False" }
//         </div>
//     )
// }
