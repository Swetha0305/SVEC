import React,{useState} from 'react'

export default function StatesInFunctionalComponent() {
    let[count,updateCount]=useState(0);
        let [name,updateName]=useState("Srav");
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Srav S")}}
            onMouseLeave={()=>{updateName("Srav")}}>
                <button onClick={()=>{updateCount(count+1)}}>Increment Button</button>
                <button onClick={()=>{updateCount(count-1)}}>Decrement Button</button>
                <button onClick={()=>{updateCount(0)}}>Reset Button</button>
                {name}
                {count}
            </h1>
        </div>
    )
}

