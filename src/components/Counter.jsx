import React, { useState } from 'react'

function Counter() {
    const [counter, setConter] = useState(0)
    function incrementCounter() {
        setCounter(() => counter + 1)
    }

    function decrementCounter() {
        setCounter(counter - 1)
    }
    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            {counter}
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}

export default Counter