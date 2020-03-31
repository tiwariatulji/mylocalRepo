import React from 'react'

export default function AvtarList(props) {
    return (
        <div className="projectstyle ma4 bg-light-purple dib pa4 grow shadow-4 tc ">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Atul Pic" />
            <h1>{props.name}</h1>
            <p> {props.work}</p>

        </div>
    )
}
