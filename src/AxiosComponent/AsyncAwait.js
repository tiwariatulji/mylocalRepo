// import React, { Component } from 'react'

// export default class AsyncAwait extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             user:[]
//         }
//     }
//     async componentDidMount (){
//         const response= await fetch(`https://api.com/v1/ticker/?limit=10`)
//         const json = await response.json()
//         this.setState({user:json})        
//     }
//     render() {
//         console.log(this.state)
//         return (
            
//             <div>
//                 <h1>This is AsyncAwait data</h1>
//               <ul>{this.state.user.map(itme=><li>{itme.name}</li>)} </ul>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class AsyncAwait extends Component {
//     constructor (props){
//         super(props);
//         this.state={
//             user:[]
//         }
//     }
//     async componentDidMount (){
//         try{
//             const response = await fetch(`https://api.com/v1/ticker/?limit=10`)
//             const json = await response.json();
//             this.setState({user:json})
//         }
//         catch(err){
//             console.log(err)
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>This is AsyncAwait data</h1>
//                 <ul>{this.state.user.map(item=><li>{item.name}</li>)}</ul>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'



// export default class AsyncAwait extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             person:[]
//         }
//     }

//     // async componentDidMount (){
//     //     try {
//     //         const response = await fetch(`http://httpstat.us/500`);
//     //         if (!response.ok) {
//     //           throw Error(response.statusText);
//     //         }
//     //       } catch (error) {
//     //         console.log(error);
//     //       }
//     // }
//     async componentDidMount (){
//         try{

//             const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
//             const json = await response.json();
//             this.setState({person:json})
//         }
//         catch(error){
//             console.log(error)
//         }
       
//     }
//     render() {
       
//         return (
            
//             <div>
//                 <h1>this is AsyncAwait </h1>
//                 <ul>{this.state.person.map((item,i)=><li>{item.name}</li>)}        </ul>
//             </div>
//         )
//     }
// }






import React, { Component } from 'react'

export default class AsyncAwait extends Component {
    constructor(props){
        super(props);
        this.state={
            person:[]
        }
    }
    async componentDidMount (){
        try{const response = await fetch(`http://www.json-generator.com/api/json/get/cqLOcLajtu?indent=2`)
        const json = await response.json();
        this.setState({person:json})
    
        if(!response.ok){
            throw Error (response.statusText)
        }
                
    }
        catch(error){
            console.log(error)
        }
        
    }
    render() {
        console.log(this.state)
        return (
            <div>
                  <h1> this is AsyncAwait Api</h1>
                    <table>
                       <tr>
                       <th>Name</th>
                        <th>Company</th>
                       </tr>
                       {this.state.person.map((item,i)=>
                       <tr key={i}>
                           <td>{item.name}</td>
                           <td>{item.company}</td>
                       </tr>
                       )}
                                          
                        </table> 
            </div>
        )
    }
}
