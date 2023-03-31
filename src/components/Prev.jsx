import React from 'react'

export default function Next(props){

    return (
        <img src="/circle-left-solid.svg" className="prev-btn" onClick={event => props.handleClick(event, -1)}/>
    )
}