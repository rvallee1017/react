import React, { useState } from 'react'

function Counter() {
   const [arr, setArr] = useState([])

   function addPlus() {
    setArr(["+"])
   }


   function addMinus() {
    setArr(["-"])
   }

    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    )
}

export default Counter

