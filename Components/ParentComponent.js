import React, {Component} from 'react'
import ChildComponent from './ChilcComponent'

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childname){
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }
    render(){
        console.log("Parent Component Render")
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent;