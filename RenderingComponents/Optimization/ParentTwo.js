import React,{useState} from "react";

export const ParentTwo = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Shilpa')

    console.log('ParentTwo Render')

    return(
        <div>
            <button onClick={()=>setCount(c=>c+1)}>Count  -  {count}</button>
            <button onClick={()=>setName('Coding')}>Change Name</button>
            <ChildTwo name = {name}/>
        </div>
    )

}