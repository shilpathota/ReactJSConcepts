import React,{useState} from "react";

const initialState = {
    fname:'Shilpa',
    lname:'Thota'
}

export const ObjectUseState = ()=>{
    const [person, setPerson] = useState(initialState)

    const changeName = () =>{
        const newPerson = {...person}
        newPerson.fname = 'Something'
        newPerson.lname = 'Changed'
        setPerson(newPerson)
    }
    console.log('ObjectUSeState Render')
    return(
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>

    )
}