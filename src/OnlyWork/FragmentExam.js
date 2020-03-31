import React, { Component } from 'react'
import { Button } from 'reactstrap';
// msg Componnet

function Message (props){
    if(props.isLoggedIn)
    return <h1>Welcome Back !!!</h1>;
    else
    return <h1>Please Login First!!!</h1>;
}
// login component
function Login (props){
    return(
        <Button onClick={props.ClcikInfo}>Login</Button>
    );
}

// logout component
function Logout (props){
    return(
        <Button onClick={props.ClcikInfo}>Logout</Button>
    );
}
export default class Ifelse extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoggedIn : false
        }
    }
    handleLogin=()=>{
        this.setState({ isLoggedIn:true});
    }
    handleLogout=()=>{
        this.setState({isLoggedIn : false});
    }
    render() {
        return (
            <div>
                <h1>It is Condition rendering </h1>
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                {
                 (this.state.isLoggedIn) ? (<Logout ClcikInfo={this.handleLogout}/>) :(<Login ClcikInfo={this.handleLogin}/>)

                }
            </div>
        )
    }
}



























// import React, { Component } from 'react'

// export default class FragmentExam extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             company:''
//         }
//     }
//     handelChaneg =(event)=>{
//         this.setState({company:event.target.value})
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Simple Event Example</h1>
//                 Enter Your Company
//                 <input type="text" value={this.state.company} onChange={this.handelChaneg}/>
//                 <h2>Your Company Name{this.state.company}</h2>
//             </div>
//         )
//     }
// }













// import React from 'react'

// export default function FragmentExam(props) {
//     return (
//         <div>
//             <h3>Friends</h3>
//             <ul>
//                 {props.someValue.map((friend) => <li>{friend}</li>)}
//                 <h2>Company</h2>
//                 {props.name.map((company) => <li>{company}</li>)}
//             </ul>
//         </div>
//     )
// }






















// // import React from 'react'

// // export default function FragmentExam() {
// //     return (
// //         <>
// //         <h1>Hello atul Tiwari </h1>
// //         <table>
// //             <tr>
// //             <th>Class</th>
// //             <th>company</th>
// //             <th>Addrees</th>
// //             </tr>
// //             <td>22</td>
// //             <td>Itservices</td>
// //             <td>ahemdabd</td>
// //         </table>
// //         </>
// //     )
// // }