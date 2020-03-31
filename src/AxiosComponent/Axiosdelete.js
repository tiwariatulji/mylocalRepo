// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     id: '',
//   }

//   handleChange = event => {
//     this.setState({ id: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person ID:
//             <input type="text" name="id" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'
import Axios from 'axios'

export default class Axiosdelete extends Component {
  state={
    id:''
  }
  handldeChange=(event)=>{
    this.setState({id:event.target.value})

  }
  handleSubmit=(event)=>{
    event.preventDefault();
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)  
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>This is Axios delete</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Id:
            <input type="text"onChange={this.handldeChange}></input>
            <button type="delete">Delete</button>
          </label>
        </form>
      </div>
    )
  }
}
