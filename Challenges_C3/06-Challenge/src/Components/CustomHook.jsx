import { useCounter } from "./useCounter";

export const CustomHook = ({value}) =>{
    const {counter,handleAdd,handleReset,handleSubsstract} = useCounter(value)

    return (
        <>
        <h1> Contador</h1>
   
        <button onClick={ handleAdd}>+1</button>
        <br></br>
        <br></br>
        <button onClick={ handleSubsstract}> -1</button>
        <br></br>
        <br></br>
        <button onClick={ handleReset}>resetear</button>
        <br></br>
        <br></br>
        <span>{ counter }</span>
        </>
    
    )
}