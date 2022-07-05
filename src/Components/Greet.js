import React from 'react';


const Greet = (props) => {
    <div>
    <h1>Hello React Learners!!Start {props.name}</h1>
    {props.children}
    </div>
}
const GreetDestructuring = ({name,children})=>{
    <div>
    <h1>Hello React Learners!!Start {name}</h1>
    {children}
    </div>
}

export default Greet;