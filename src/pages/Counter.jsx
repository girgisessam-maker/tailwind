import { useState } from "react";

export default function Counter() {

    const[counter,setCounter]= useState(70);
    
    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if(counter>1){
            setCounter(counter - 1);
        }
        else{
            alert("counter cannot be less than 1");
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center gap-10">
            <button className="btn btn-soft btn-secondary" onClick={decrement}>
                -
            </button>
            <div className="badge badge-secondary">counter: {counter}</div>
            <button className="btn btn-soft btn-secondary" onClick={increment}>
                +
            </button>
        </div>
  )
}
