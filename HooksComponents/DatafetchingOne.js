import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne(){
    const [loading,setLoading] = useState(true)
    const [error,setError]=useState('')
    const[post,setPost]= useState({})

    useEffect(()=>{
        axios.get(`url`).then(res=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        }).catch(err=>{console.log(err)
        setLoading(false)
            setError(err)
        setPost({})})
    },[])

    return(
        <div>
            {post.title}
            {loading ? <div>loading...</div>:null}
            {
                error
            }
        </div>

    )
}

export default DataFetchingOne