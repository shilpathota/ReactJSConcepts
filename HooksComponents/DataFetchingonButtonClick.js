import React, { useEffect } from "react";

function DataFetchingonButtonClick(){
    const [ post,setPost] = useState({})
    const[id,setId] = useState(1)
    const [ idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleButtonClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`url/${idFromButtonClick}`).then(response=>{console.log(response)
        setPost(response.data)}
        )
        .catch(err=>console.log(err))
    },[idFromButtonClick])
    return(
        <div>
            <input type='text' value={id}
            onChange = {e=>{
                setId(e.target.value)
            }}/>
            <button type="button" onClick={handleButtonClick}>Fetch Post</button>
            <ul>
                {
                    <li key={post.id}>{post.title}</li>
                }
            </ul>
        </div>
    )
}

export default DataFetchingonButtonClick