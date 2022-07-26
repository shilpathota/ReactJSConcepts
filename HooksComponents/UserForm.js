import useInput from "../Hooks/useInput"

function UserForm(){

    const [firstName,resetFirstName,bindFirstName] = useInput('')
    const [lastName,resetLastName,bindLastName] = useInput('')
    
    const submitHandler = e =>{
        e.preventDefault()
        alert(firstName + ' ' + lastName)
        resetFirstName()
        resetLastName()
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type='text'
                    {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text'
                        {...bindLastName}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UserForm