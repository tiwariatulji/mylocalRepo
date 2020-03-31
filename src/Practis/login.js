import React, { Component } from 'react'


export default class login extends Component {
   constructor(props) {
      super(props);

 this.state = {
    email: '',
   password: '',
      };

handleClick=()=>{
   alert('ThnaksFor LogIn')
}

handleChange=(event)=> {
   let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({
    [name]: value
  });
}
 }
     
      

  render(){
     return(
        <form onSubmit={this.handleSubmit}>
           <label>
         
          
              Email:
              <input type="Email" id="email" value={this.state.value} placeholder="email" />
              Password:
              <input type="Password" id="pass" value={this.state.value} placeholder="password" />
              <input type ="Button" value="submit" onClick={this.handleClick} />
              
           </label>

        </form>
     );
  }

      
  
         
