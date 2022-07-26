import React, { useState} from "react";

function MouseContainer(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)


    const logMousePosition = e=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return(
        <div>
            <div> X - {x} Y - {y}</div>
        </div>
    )
}

export default MouseContainer