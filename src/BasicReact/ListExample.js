import React from 'react'

export default function App() {
    const myList =[
        {id:"a",value:"Apple"},
        {id:"b",value:"mango"},
        {id:"c",value:"orange"},
    ]
    const ListInfo = myList.map((item)=><li key={item.id}>{item.value}</li>)
    return (
        <div>
            {ListInfo}
            <Welcome name="Atul"/>
        </div>
    )
}



 function Welcome (props) {

    return (
        <div>
          <h1>{props.name}</h1>
        </div>
    )
}

