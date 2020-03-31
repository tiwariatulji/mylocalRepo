// import React, { Component } from 'react'

// export default class ApiExample extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             users:[]
//         }
//     }
//     componentDidMount(){
//         fetch('http://www.json-generator.com/api/json/get/ceTdePCxfm?indent=2').then((resp)=>
//         resp.json().then((result)=>{
            
//             this.setState({users:result})
//         })
//         )
//     }

//     render() {
        
//         console.log(this.state);
//         return (
//             <div>
//                 <h1>Data details</h1>
//                 <table>
//                     <tr>
//                         <th>Name</th>
//                         <th>age</th>
//                         <th>id</th>
//                         <th>school</th>
//                         <th>mobile_number</th>
//                     </tr>
                
//                 <div>
//                 {this.state.users.map((item,i)=>
//                  <tr>
//                      <td>{item.name}</td>
//                      <td>{item.age}</td>
//                      <td>{item.id}</td>
//                      <td>{item.school}</td>
//                      <td>{item.mobile_number}</td>
//                      <td></td>
                     
//                  </tr>
                     
//                 )}

//                 </div>
//                 </table>  
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import{Button,Badge} from "reactstrap";

export default class ApiExample extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        fetch('http://www.json-generator.com/api/json/get/cqLOcLajtu?indent=2').then((response)=>
        response.json().then((result)=>{
            this.setState({user:result})
        }
        )
        
        )
    }
    

     detail(param){
         switch (param) {
            case "active": 
                         return <Button style={{color:"green"}}>Active</Button>;
                         case "deleted": 
                         return <Button  style={{color:"red"}}>Deleted</Button>;
                         case 0:
                            return <Badge style={{color:"blue"}}>performed</Badge>;         
                      
                 
                       case 1:
                             return <Badge style={{color:"green"}}>performed</Badge>;
                             
                     default:
                        return <Badge style={{color:"Violet"}}>UnderProcess</Badge>
                  
             
         }
     }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>this is normal api</h1>
                <table>
                    <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>address</th>
                    <th>email</th>
                    </tr>
                    {this.state.user.map((item,i)=>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.company}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{this.detail(item.Status)}</td>
                    </tr>
                    
                    )}
                </table>
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import InfoUser from './JsonExample';
// import { Badge, Button } from 'reactstrap';
// export default class ApiExample extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             color:"",
//             user:[]
//         }
        
//     }

//  detail(param){
//      switch (param) {
//          case "active": 
//              return <Button style={{color:"green"}}>Active</Button>;
//              case "deleted": 
//              return <Button  style={{color:"red"}}>Deleted</Button>;
//              case 0:
//                  return <Badge style={{color:"blue"}}>performed</Badge>;
//           
//      }
//  }             case 1:
//                  return <Badge style={{color:"green"}}>performed</Badge>;
                 
//          default:
//             return <Badge style={{color:"Violet"}}>UnderProcess</Badge>
      

//     render() {
//         console.log(this.state)
//         return (
//             <div>
//                 <h1>User Information</h1>
//                 <table>
//                     <tr>                     
//                     <td>Name</td>
//                     <td>Id</td>
//                     <td>Age</td>
//                     <td>Mobile_number</td>
//                     <td>School</td>
//                     <td>Gender</td>
//                     <td>Company</td>
//                     <td>Adreess</td>    
//                     </tr>
//                     {InfoUser.employee.map((item,i)=>
//                     <tr>
//                         <td>{item.name}</td>
//                         <td>{item.id}</td>
//                         <td>{item.age}</td>
//                         <td>{item.mobile_number}</td>
//                         <td>{item.school}</td>
//                         <td>{item.gender}</td>
//                         <td>{item.Company}</td>
//                         <td>{item.Adreess}</td>
//                         <td>{this.detail(item.status)}</td>
//                     </tr>
                    
//                     )}
//                 </table>
//             </div>
//         )
//     }
// }

