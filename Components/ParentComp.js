import React,{Component} from "react"
import MemoComp from "./MemoComp"
import PureComp from "./purecomponent"
import RegularComponent from "./RegualrComponent"

class ParentComp extends Component{
    constructor(props){
        super(props)

        this.state ={
            name:"Coding Concepts"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Coding Concpets"
            })
        },2000)
    }
    render(){
        console.log("Parent Component")
        return(
            <div>
                Parent Component
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp