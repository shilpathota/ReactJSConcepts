import React, {useState} from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./Parent";

export const GrandParent = () => {
    const [newCount,setNewCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setNewCount(nc => nc+1)}>Grand Parent Count - {newCount}</button>
            <ParentOne newCount={newCount}/>
            <ChildOne />
        </div>

    )
}