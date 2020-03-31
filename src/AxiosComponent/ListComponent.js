import React, { Component } from 'react'
import Axios from 'axios';
const error ={
    color:"red",
    fontWieght:"bold",
    fontSize:"20"
}
export default class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            user:[],
            errorMessage:""
        }
    }
    componentDidMount(){
        Axios.get(`http://www.json-generator.com/api/json/get/bVfPTeRsOa?indent=2`).then(response=>{
            console.log(response.data.data)
            this.setState({user:response.data.data})
        })
        .catch(error=>{
            
            this.setState({errorMessage:"data fecthing Error "})
        })
    }
    render() {
        const {errorMessage,user}= this.state
        console.log(user.length)
        return (
            <div>
                <h1>Itservices India Employee List</h1>
                {
                 user.length ?
                 user.map(item=>  <div key={item.id}><img src={item.avatar} alt={item.first_}/><h4>{item.first_name +""+item.last_name}<br/>Email:{item.email}</h4> </div>)
                : null
                
                }
                {
                    errorMessage ? <div style={error}>{errorMessage}</div> : null
                    
                }
                <PostApi/>
            </div>
        )
    }
}
class PostApi extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name :"",
            Last_name :"",
            email:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
      
       handleChange(event){
           console.log(event.target.value)
           this.setState({[event.target.name] :event.target.value } )
       }
       onSubmitHandler(e){
           e.preventDefault();
           Axios.post('http://www.json-generator.com/api/json/get/bVfPTeRsOa?indent=2',this.state).then(
               response=>{
                   console.log(response.data)
               }
           )
           .catch(error=>{
               console.log(error)
           })
       }
render() {
    const{email,first_name,last_name} = this.state
    return (
        <div>
            
            <form onSubmit={this.handleSubmit} >
                <label>Email</label>
                <input type="text" value={email} name='email' onChange={this.handleChange}></input>
                <label>First Name</label>
                <input type="text" value={first_name} name="first_name" onChange={this.handleChange}></input>
                <label>LastName</label>
                <input type="text" value={last_name} name="last_name" onChange={this.handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}}