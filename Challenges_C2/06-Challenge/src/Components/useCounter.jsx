
import { useState } from 'react'


export const useCounter = (value) => {

    const [counter, setCounter] = useState(value)
    
    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubsstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value)
    }

    return {
            handleAdd,
            handleSubsstract,
            handleReset,
            counter
        }

} 


