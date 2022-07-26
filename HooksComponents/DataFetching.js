import React, { useEffect } from "react";

function DataFetching(){
    const [ posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('url').then(response=>{console.log(response)
        setPosts(response.data)}
        )
        .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <ul>
                {
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching