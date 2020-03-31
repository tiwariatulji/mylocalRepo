
import React from 'react'
const user =[
    {id:1 ,FirstName:"Atul ", LastName:"Tiwari"},
    {id:2 ,FirstName:"Kalpesh  ", LastName:"Patel"}
]
export default function mapIfEls(props) {
    return (
        <div>
            <h1> Its is Conditional Renderning</h1>
            <List list={user}/>
        </div>
    )
}
function List({list}) {
    if (!list) {
        return null;
    }
    return(
        <ul>
           {list.map((item,i)=><Item key={item.id} item={item}></Item>)}
        </ul>
    )
    
}
function Item({item}) {
    return(
        <ul>
           <h1>{item.FirstName}{item.LastName}</h1> 
        </ul>
    )
    
}


// import React, { Component } from 'react'

// export default class ParentCompo extends Component {
//   constructor(props){
//       super(props);
//       this.state={
//           user:"Hello Atul Tiwari"
//       }
//   }
//   profileChange(){
//       this.setState({user:"Hello Mr Kalpesh Patel"})
//   }
//     render() {
//         return (
//             <div>
//                 {this.state.user}
//                 <button onClick={()=>this.profileChange()}>Click Here</button>
//             </div>
//         )
//     }
// }
