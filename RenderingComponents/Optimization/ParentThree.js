import React,{useState} from "react";

export const ParentThree = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Shilpa')

    console.log('ParentThree Render')

    return(
        <div>
            <button onClick={()=>setCount(c=>c+1)}>Count  -  {count}</button>
            <button onClick={()=>setName('Coding')}>Change Name</button>
            <MemoizedChildThree name = {name}></MemoizedChildThree>
        </div>
    )

}