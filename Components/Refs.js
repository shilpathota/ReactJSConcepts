import React, {Component} from 'react'

class Refs extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCBRef = (element)  => {
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        //this.inputRef.current.focus()

    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCBRef}/>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs