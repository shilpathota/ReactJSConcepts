import React from "react";

export const ChildThree = () => {

    console.log('ChildThree renders')
    return(
        <div>
            ChildThree Component
        </div>
    )
}

export const MemoizedChildThree = React.memo(ChildThree)