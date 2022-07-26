import React,{Component } from 'react';

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    increment(){
        //without using setState
        this.state.count = this.state.count + 1
        console.log(this.state.count) //1 but the UI has 0 because react do not rerender

        //using setState
        this.setState({
            count: this.state.count + 1
        },
        ()=>{
            console.log('callback value',this.state.count)
        })
        //using previous State
        this.setState(prevState =>({
            count:prevState.count + 1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()//output would be 1 and not 5
    }
    render(){
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={()=>{this.incrementFive()}}>Increment</button>
            </div>
        )

    }
}

export default Counter;