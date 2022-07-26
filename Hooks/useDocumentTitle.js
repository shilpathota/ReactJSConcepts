import React from "react";

function useDocumentTitle(count){

    useEffect(()=>{
        document.title = `Clicked ${count}`
    })
    return(
        <div>

        </div>
    )

}

export default useDocumentTitle