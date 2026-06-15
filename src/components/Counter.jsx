import React, { useState } from 'react'

function Counter() {
   const [arr, setArr] = useState([])

   function addPlus() {
    setArr(prevValue => [ ...prevArr, "+"])
   }


   function addMinus() {
    setArr(prevValue => [ ...prevArr, "-"])
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

