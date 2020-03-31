import React from 'react'

export default function EditPage(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello It is edit page </h1>
            Editing the expense with id of {props.match.params.id}  
        </div>
    );
};