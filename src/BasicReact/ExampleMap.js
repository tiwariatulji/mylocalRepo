// import React, { Component } from 'react'

// export default class ExampleMap extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             data:[
//             {"id":1,
//              "Name":"Atul",
//              "Age":"20",       
//            },
//            {
//                "id":2,
//                "Name":"Vipul",
//                "Age":"15",
//            },

//            {
//                "id":3,
//                "Name":"Rajat",
//                "Age":"16",
//            }

//             ]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <table>
//                 <tbody>{this.state.data.map((person,i)=><TableRow key={i}
//                  data={person}/>)}
//                </tbody>
//              </table>   
//             </div>
//         )
//     }
// }
// class Header extends Component{
//     render(){
//         return(
//         <div>
//             <h1>Map Example</h1>
//         </div>
//         )
        
//     }
// }
// class TableRow extends Component{
//     render(){
//         return(
//             <div>
//                  <td>
//                      <tr>{this.props.data.id}</tr>
//                      <tr>{this.props.data.Name}</tr>
//                      <tr>{this.props.data.Age}</tr>
//                  </td>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class ExampleMap extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {Name:"Atul Tiwari",
                  id:1,
                   Age:27,
                   Address:"Varansi",               
                },
                {
                    Name:"Kalpesh Patel",
                    id:2,
                    Age:25,
                    Address:"Ahemdabad",
                },
                {
                    Name:"Mayank Patel",
                    id:3,
                    Age:30,
                    Address:"Ahemdabad"
                },
            ]
        };        
    }
    render() {
        return (
            <div>
                <StudentName/>
                <ul>
                   {this.state.data.map((person,i)=><TabelList key={i}data={person}/>)}
                </ul>
                <ExampleStudent/>
            </div>
        )
    }
}
class StudentName extends Component{
    render(){
        return(
            <div>
                <h1 className="studentName">IT services Employee Details</h1>
            </div>
        )
    }
}
class TabelList extends Component{
    render(){
        return(
            <div>
                <div>
                    <h1>
                    <ul>
                    <li>{this.props.data.Name}</li>
                    <li>{this.props.data.Age}</li>
                    <li>{this.props.data.Address}</li>
                    <li>{this.props.data.id}</li>
                    </ul>
                    </h1>
                </div>
                
            </div>
        )
    }
}




 class ExampleStudent extends Component {
    constructor(){
        super();
        this.state ={
            data:[
                {Component:"First.....",
                 id:1111
                  },
                  {Component:"Second...",
                 id:2222
                    },
                    {Component:"Third....",
                      id:3333          }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.data.map((realComponent ,i)=><Content key={i} ComponentData={realComponent}/>)}</div>
            </div>
        )
    }
};
class Content extends Component{
    render(){
        return(
            <div>
                
                <div>
                  <h1> {this.props.ComponentData.Component}</h1> 
                </div>
                <div>
                    <h1>{this.props.ComponentData.id}</h1>
                </div>
            </div>
        )
    }
}
}