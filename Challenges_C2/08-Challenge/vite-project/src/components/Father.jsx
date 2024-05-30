import React, {useState, useCallback} from "react";
import {Son} from "./Son";

export const Father = () => { 
    const list = [2,4,6,8,10];
    const[valor,setValor] = useState(0);

    const increment = useCallback((num) => {
        setValor( valor + num );
    }, []);

    return (
        <div>
            <h1>Padre</h1>
            <h2>total: {valor}</h2>
            <hr/>
            {
                list.map((n,idx)=>{
                    return <Son key={idx} num={n} increment={increment}/>
                })
            }
        </div>
    )}