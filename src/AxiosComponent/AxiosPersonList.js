import React, { Component } from 'react'
import axios from 'axios';
export default class AxiosPersonList extends Component {
    constructor(props){
        super(props);
        this.state={
            person:[]
        }
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=> {
             const person = res.data;
             this.setState({person})
            // this.setState({person:res.data})
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>This is Axiox based Api</h1>
                <table>
                    <tr>
                    <th>Name </th>
                     <th>Email </th>
                    </tr>
                    {this.state.person.map((item=>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>))}
                </table>
                
            </div>
        )
    }
}




