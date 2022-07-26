import React, { useReducer } from "react";

const initialState = {
    firstCounter:0,
    secondCounter:0
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {firstCounter:state.firstCounter-action.value}
            case 'increment2':
                return {secondCounter:state.secondCounter+action.value}
            case 'decrement2':
                return {secondCounter:state.secondCounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}
function HookCounterTwoReducer(){
    const [count,dispatch]=useReducer(reducer,initialState)

    
    return(
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button  onClick={()=>dispatch({type:'decrement',value:2})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment2</button>
            <button  onClick={()=>dispatch({type:'decrement2',value:2})}>Decrement2</button>
            <button  onClick={()=>dispatch({type:'reset'})}>Reset</button>

        </div>

    )
}

export default HookCounterTwoReducer