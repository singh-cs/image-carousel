import React from 'react'

export default function Next(props){

    return (
        <img src="/circle-right-solid.svg" className="next-btn" onClick={event => props.handleClick(event, 1)}/>
    )
}