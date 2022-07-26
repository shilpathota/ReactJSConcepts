import React,{Component} from "react";
import BThree from './BThree'
import UserContext from "./UserContext";

class BTwo extends Component{
    render(){
        return (<div>
            Component BTwo Context {this.context}
                <BThree />
        </div>)
    }
}

BTwo.contextType = UserContext

export default BTwo