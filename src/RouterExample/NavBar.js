import React, { Component } from 'react'
import { ButtonToolbar, Button, FormGroup, Form, Label, Input, Col } from 'reactstrap'
import TaskList from '../TodoList/todo';

export default class NavBar extends Component {
  constructor(prosp) {
    super(prosp);
    this.state = {
      username: [],
      X: "Hello Mr Atul",
      Y: "Hello Mr Kalpesh Patel",
      Fullname: "Atul Tiwari",
      Email: "atul@itservicesindia.com",
      mobile: "9580081866",
      message: "Hello Itservices Indai"

    }
    this.handleChange = this.handleChange.bind(this);
    this.ChangeClick = this.ChangeClick.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.formSubmit = this.formSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ username: event.target.value })
  }
  ChangeClick() {
    this.setState({ X: "GoodMorning", Y: "Good Noon" })
  }
  updateForm(event) {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }
  formSubmit(event) {
    // // alert(`My Name is ${this.state.Fullname}
    // //        my Email is ${this.state.Email}
    // //        my Mobile numbere is ${this.state.mobile}
    // //        my Message is ${this.state.message}      `)
    alert(JSON.stringify(this.state))
    console.log(JSON.stringify(this.state))
    event.preventDefault();

  }



  render() {
    console.log(this.state.username)
    let X1 = this.state.X
    let Y1 = this.state.Y
    console.log(this.state)
    return (

      <div>
        <Api/>
        {/* <h1>{this.state.X}<br/>{this.state.Y}</h1> */}
        <h1>{X1}<br />{Y1}</h1>
        <h1>Hello {this.state.username}</h1>
        <label>Enter your name</label>
        <input type="text" value={this.state.username} onChange={this.handleChange}></input>
        <Button color="danger" onClick={this.ChangeClick}>Click here</Button>
        <FormGroup>
          <Form onSubmit={this.formSubmit} >
            <Label sm={2}>FullName</Label>
            <Col sm={8}>
              <Input type="text" name="Fullname" value={this.state.Fullanme} onChange={this.updateForm} ></Input><br />
            </Col>

            <Label sm={2} >Email</Label>
            <Col sm={8}>
              <Input type="email" name="Email" value={this.state.Email} onChange={this.updateForm} ></Input><br />
            </Col>

            <Label sm={2} >MobileNumber</Label>
            <Col sm={8}>
              <Input type="number" name="mobile" value={this.state.mobile} onChange={this.updateForm} ></Input><br />
            </Col>

            <Label sm={2} >Message</Label>
            <Col sm={8}>
              <textarea name="message" value={this.state.message} onChange={this.updateForm}   ></textarea>
              <input type="submit" value="send"></input>
            </Col>
          </Form>
        </FormGroup>

      </div>
    )
  }
}



 class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: [],
    }
  }
  componentDidMount() {
    fetch(`http://www.json-generator.com/api/json/get/cqLOcLajtu?indent=2`).then(resp => resp.json()).then((res) => {
      console.log(res);
      this.setState({ username: res })
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Its is noemal api</h1>
        <ul>
          {this.state.username.map((item,i)=>
          <li>{item.name}{item.company}{item.gender}</li>,
          
            )}
          <Mhaha/>
        </ul>

      </div>
    )
  }
}

function Message(props) {
  if(props.isLoggedIn)
  return <h1>Welcome back!!!</h1>
  else 
  return <h1>Please Login First!!!</h1>  
}
function Login(props) {
  return(
    <button onClick={props.ClickInfo}>Login</button>
  )
  
}
function LogOut (props){
  return(
    <div>
      <button onClick={props.ClickInfo}>LogOut</button>
    </div>
  )
}
class Mhaha extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false
  }
}

handleLogin=()=>{
  this.setState({isLoggedIn:true})
}
handleLogout=()=>{
  this.setState({isLoggedIn:false})
}
render() {
  return (
    <div>
      <h1>hkfhfdfhkjdf</h1>
      <Message isLoggedIn={this.state.isLoggedIn}/>
       {
        (this.state.isLoggedIn) ? (<LogOut ClickInfo={this.handleLogout}/>) : (<Login ClickInfo={this.handleLogin}/>)
      }
      
    </div>
  )
}
}



