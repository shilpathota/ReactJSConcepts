import React,{Component} from "react";
import axios from 'axios'

class AddPost extends Component{
    constructor(props){
        super(props)

        this.state={
            userID:'',
            title:'',
            body:''
        }
    }
    changeHandler = e=>{
        this.setState({
            [e.targer.name]:e.target.value
        })
    }
    submitHandler = e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('url',this.state).then((response)=>console.log(response)).catch(error=>console.log(error))
    }
    render(){
        const {userID, title,body} = this.state
        return(
            <div>
                <form>
                    <div>
                        <input 
                        type = 'text' name='userID' 
                        value={userID}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input 
                        type = 'text' name='title' 
                        value={title}
                        onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input 
                        type = 'text' name='body' 
                        value={body}
                        onChange={this.changeHandler}/>
                    </div>
                    <button type='submit' onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPost