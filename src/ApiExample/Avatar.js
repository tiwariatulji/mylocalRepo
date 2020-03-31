
import './projectstyle.css';
import "tachyons"
import { Button } from 'reactstrap';
import AvtarList from './AvtarList';
import Forms from "../Project.js/Forms"
import React, { Component } from 'react'


export default class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Welcome My Page",
        }

        this.handleClick = this.handleClick.bind(this)
       }

      handleClick() {
        this.setState({ name: "Wecome to Atul Tiwari Page" })
          };
    render() {

        const myArray = [
            {
                id: 1,
                name: 'Atul Tiwari',
                work: 'Trainee'
            },
            {
                id: 2,
                name: 'Kalpesh Patel',
                work: 'Web Devloper'
            },
            {
                id: 3,
                name: 'Ravi Singh',
                work: 'Trainee'
            },
            {
                id: 4,
                name: 'Mayank Patel',
                work: 'Trainee'
            }
        ]
        const myList = myArray.map((data, i) => {
            return <AvtarList id={myArray[i].name}
                name={myArray[i].name}
                work={myArray[i].work} />
        })

        return (
            <div>
                <h1>{this.state.name}</h1>
                {myList}
                <Button color="danger" onClick={this.handleClick}>Suscribe Me</Button>
                <Forms />

            </div>

        )
    }
}






























// const myArrayList = [
//     {
//         id: 1,
//         name: 'Atul Tiwari',
//         work: 'Trainee'
//     },
//     {
//         id: 2,
//         name: 'Kalpesh Patel',
//         work: 'Web Devloper'
//     },
//     {
//         id: 3,
//         name: 'Ravi Singh',
//         work: 'Trainee'
//     },
//     {
//         id: 4,
//         name: 'Ravi Singh',
//         work: 'Trainee'
//     }
// ];
// const MyList = myArrayList.map((Card,i)=>{
//     return <AvtarList id={myArrayList[i].name}
//     name={myArrayList[i].name}
//     work={myArrayList[i].work} />

// })

// export default function Avatar(props) {
//     return (
//         <div>
//              <h1 className="tc">Welcome to FaceBook</h1>
//             {MyList}


//             {/* <AvtarList id={myArray[1].name}
//                 name={myArray[1].name}
//                 work={myArray[1].work} />

//             <AvtarList id={myArray[2].name}
//                 name={myArray[2].name}
//                 work={myArray[2].work} />
//             <AvtarList id={myArray[3].name}
//                 name={myArray[3].name}
//                 work={myArray[3].work} /> */}
//             {/* <AvtarList id='2' name="Kalpesh Patel" work="Web Devloper"   />
//           <AvtarList id='3' name="Ravi Singh" work="Trainee" />
//           <AvtarList id='4' name="Mayank Patel" work="Software Developer"/> */}
//             <Button color="danger">Suscribe Me</Button>
//         </div>


//     )


// }
