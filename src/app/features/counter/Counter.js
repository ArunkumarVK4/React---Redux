import React, { useState } from 'react'
import { increment, decrement, reset, incrementAmount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()

    const [value, setValue] = useState(0)

    const resetAll = ()=>{
        setValue(0)
        dispatch(reset())
    }
    const addValue = Number(value) || 0
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>

        </div>
        <div>
            <input type="number" 
            value={value}
            onChange={e=> setValue(e.target.value)}
            />
            <button onClick={()=>dispatch(incrementAmount(addValue))}>Add</button>
            <button onClick={ resetAll}>Reset</button>
        </div>

    </section>
  )
}

export default Counter