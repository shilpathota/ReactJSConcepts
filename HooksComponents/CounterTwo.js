import React from "react";

function HookCounterTwo(){
    const initialCount=0
    const [count,setCount] = useState<number>(initialCount)
    incrementFive = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }

    return(

        <div>Count: {count}
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>{incrementFive}}>Increment 5</button>
        </div>
        
    )
}

export default HookCounterTwo