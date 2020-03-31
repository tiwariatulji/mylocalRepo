import React, { Component } from 'react';  
import PropTypes from 'prop-types';  
class App extends React.Component {  
   constructor() {  
      super();        
      this.state = {  
          msg: "Welcome to React"  
      };      
      this.updateSetState = this.updateSetState.bind(this);  
   }  
   updateSetState() {  
       this.setState({  
          msg:"Hello Mr.Atul Tiwari"  
       });  
   }  
   render() {  
      return (  
         <div>  
             <h1>{this.state.msg}</h1>  
             <button onClick = {this.updateSetState}>SET STATE</button>  
         </div>  
      );  
   }  
}  
export default App;  



import React, { Component } from 'react'

export default class stateExam extends Component {
   constructor(props){
      super(props);
      this.State = {
         msg:"Welcome to react",
      }
   }
   updateSetState=()=>{
      this.setState({msg:"Hello Atul Tiwari"});
   }
   render() {
      return (
         <div>
            <h1>{this.state.msg}</h1>
            <button onClick={this.updateSetState}>Set State</button>
         </div>
      )
   }
}




================================================================================
import React, { Component } from 'react'
import { Button,FormGroup,Input, Label } from 'reactstrap';

export default class ChildCompo extends Component {
  constructor(props){
    super(props);
    this.state={
          X:"hello india",
          Y: "Hello Bharat",
          email:'',
          Password:""
    }
    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(){
    this.setState({X:"Hello Atul", Y:"Hello Atul"})
  }
  render() {
    
    let X1 = this.state.X
    let Y1 = this.state.Y
    return (
      
      <div>
       <h1>{X1}</h1> 
       <h1>{Y1}</h1> 
        <FormGroup>
        <Label for="Email">Email</Label>
        <Input type="text" name="Email" ></Input>
        <Label for="Email">Password</Label>
        <Input type="text" name="Password"  required autoFocus></Input>
        </FormGroup>
        <Button color="danger" onClick={this.handleChange}>Click here</Button>
      </div>
    )
  }
}
========================================================================================
import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class ChildCompo extends Component {
  constructor(props){
    super(props);
    this.state={
      age:28,
    }
   
  }
  ageGrow(){
    this.setState({age:this.state.age+1});
  }
  render() {
    return (
      <div>
        <h1>My Age :{this.state.age}</h1>
        <Button color="Primary" onClick={()=>this.ageGrow()}>Grow My age</Button>
      </div>
    )
  }
}
==============================================================================================

import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Ifelse extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[],
         }
    }
    updateSate =()=>{
        var list = "SetState......"
        var myArry = this.state.data.slice()
        myArry.push(list);
        this.setState({data:myArry})
     }
        render() {
        return (
            <div>
                <Button onClick={this.updateSate}>SET STATE</Button>
                <h1>
                    State Array {this.state.data}
                </h1>
            </div>
        )
    }
}
