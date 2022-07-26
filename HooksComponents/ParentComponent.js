import React, {useState,useCallback} from "react";

function ParentComponent(){
    const [ age,setAge] = useState(25)
    const [ salary,setSalary] = useState(50000)

    const incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary+1)
    },[age])

    return(
        <div>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={incrementSalary}>Increment Salary</button>
        </div>
    )
}

export default ParentComponent