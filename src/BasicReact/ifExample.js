import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
      {header}
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}
export default MyForm;

===========================================================================================
// import React from 'react'
// const user =[{name:"Atul" ,age:28}]
// export default function ChildCompo({list}) {
//     if(!user){
//         return null;
//     }
//     if(!user.length){
//         return<p>Sorry, the list is empty.</p>
//     }
//     return (
//         <div>
//             {user.map((item=><Item item={item}/>))}
//         </div>
//     );
// }
// function Item ({item}){
//     return(
//         <>
//         <li>{item.name}</li>
//         <li>{item.age}</li>
//         </>
//     )
// }