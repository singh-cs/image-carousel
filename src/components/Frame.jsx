import React from 'react'

export default function Next(props){

    return (
        <div className='frame'>
            <img src={props.coverImg} className="slide-img" />
            <h2 className='img-num'>{props.counter+1}</h2>
        </div>
    )
}