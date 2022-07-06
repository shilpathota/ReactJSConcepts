import React, {Component} from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render(){
        this.state.isLoggedIn && <div>Welcome Notion Lovers!</div>
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Notion Lovers! </div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message
        
    }
}
export default UserGreeting