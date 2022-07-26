import React, { useEffect } from "react";

function DataFetchingusingID(){
    const [ post,setPost] = useState({})
    const[id,setId] = useState(0)

    useEffect(()=>{
        axios.get(`url/${id}`).then(response=>{console.log(response)
        setPost(response.data)}
        )
        .catch(err=>console.log(err))
    },[id])
    return(
        <div>
            <input type='text' value={id}
            onChange = {e=>{
                setId(e.target.value)
            }}/>
            <ul>
                {
                    <li key={post.id}>{post.title}</li>
                }
            </ul>
        </div>
    )
}

export default DataFetchingusingID