import React from "react";

function HookCounter(){
    const [count,setCount] = useState<number>(0)
    return(
        <div onClick={setCount(count+1)}>Count {count}</div>
    )
}

export default HookCounter