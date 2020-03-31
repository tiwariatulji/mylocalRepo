// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
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
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }





import React, { Component } from 'react'
import Axios from 'axios';
export default class Axiosdelete extends Component {
  state = {
    name: ''
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });

  }
  handelSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name

    }
    Axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>This is Post Api</h1>
        <form onSubmit={this.handelSubmit}>
          <label>
            id
            <input type="text" onChange={this.handleChange}></input>
            <button type="submit" >Add here</button>
          </label>
        </form>
      </div>
    )
  }
}

