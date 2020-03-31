import React from 'react'

export default function (props) {
    console.log(props)
    return (
        <div>
            <h1>A thing I have Done</h1>
     <p>This Page is for the item with the id {props.match.params.id}</p>
        </div>
    )
}
