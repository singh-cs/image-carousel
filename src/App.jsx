import React from 'react'
import Next from './components/Next'
import Prev from './components/Prev'
import Frame from './components/Frame'
import data from './data'

function App() {
  const [counter, setCounter] = React.useState(0)
  console.log(counter)
  function handleClick(event, incDec){
    if(incDec>0){
      setCounter(old=>( old + incDec )%5)
    }
    else{
      setCounter(old=>(5+old+incDec)%5)
      // console.log(Math.abs( counter + incDec ))
    }
  }
  return (
   <section className='container'>
      <h1>Project 1: Carousel</h1>
      <Next 
        counter={counter}
        handleClick={handleClick}
      />
      <Frame 
        coverImg={data[counter].coverImg}
        counter={counter}
      />
      <Prev 
        counter={counter}
        handleClick={handleClick}
      />
   </section>
  )
}

export default App
