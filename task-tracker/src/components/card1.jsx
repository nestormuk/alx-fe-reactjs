import React from 'react'
import useCounterStore from '../store/store'

function Card1() {

    const { count, increment, decremenet } = useCounterStore();

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decremenet}>-</button>
      
    </div>
  )
}

export default Card1;
