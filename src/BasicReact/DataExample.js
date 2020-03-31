import React, { Component } from 'react'
import UserDetail from "./JsonExample";
import { Badge, Table } from "reactstrap";
export default class HooksExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            response:[],
        }
    }
    
    
    renderSwitch(param) {
        console.log(param);
        switch (param) {
            case 'active':
                return <Badge style={{ color: "red" }}>delete</Badge>;
            case 'deleted':
                return <Badge style={{ color: "green" }}>Active</Badge>;
            default:
                return <Badge style={{ color: "yellow" }}>default</Badge>;
        }
    }
    render() {
        const tempvalue = this.state.response
        return (
            <div>
                <h1>User Inf</h1>
               <div></div> 
                <Table>
                    <tr>
                        <th>User Id </th>
                        <th>Name </th>
                        <th>Age </th>
                        <th>School </th>
                        <th>mobile_number </th>
                    </tr>

                    {UserDetail.employee.map((data, i) =>
                    
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.school}</td>
                            <td>{data.mobile_number}</td>
                            
                            <td>{this.renderSwitch(data.status)}</td>
                        </tr>)}
                </Table>
            </div>

        )
    }
}