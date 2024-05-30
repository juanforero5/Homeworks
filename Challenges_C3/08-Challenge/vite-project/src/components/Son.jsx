import React from "react";

export const Son = ({num, increment}) => {
    console.log('again reloaded....');
    return (
        <button onClick={()=>increment(num)}>+{num}</button>
    )}