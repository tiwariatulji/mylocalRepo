import React, { Component } from 'react'
import userDetail from './JsonExample';
import {Badge} from 'reactstrap';
export default class Mapagain extends Component {
    constructor(props){
        super(props)
        this.state={
            color:""
        }
    }
    renderSwitch(param) {
        switch(param) {
          case 0:
            return  <Badge style={{color: "red"}}>delete</Badge>;;
            case 1:
            return  <Badge style={{color: "green"}}>Active</Badge>;;
          default:
            return  <Badge style={{color: "yellow"}}>Inactive</Badge>;
        }
      }
      
      
    render() {
        return (
            <div>
                <h1>UserList</h1>
                
                    {userDetail.employee.map((data,i)=>
                   <ul> <li>{data.id}</li>
                    <li>{data.name}</li>
                    <li>{data.age}</li>
                    <li>{data.mobile_number}</li>
                    <li>{data.school}</li>
                    </ul>
                    )}
                
            
    <table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>age</th>
    <th>Mobile Number</th>
    <th>school Name</th>
  </tr>
  {userDetail.employee.map((data,i)=>      
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.age}</td>
    <td>{data.mobile_number}</td>
    <td>{data.school}</td>
  <td > {this.renderSwitch(data.status)}</td>
  {/* <td > {data.status === 1?  <Badge style={{color: "green"}}>Active</Badge>: <Badge style={{color: "red"}}>delete</Badge>}</td> */}
  </tr>
  
  )}
  
 
</table>
            </div>
        )
    }
}
