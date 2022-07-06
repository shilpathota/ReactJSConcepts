import React from 'react'

function ListRendering(){
    const names = [
        {name:'notion',id:1},
        {name:'myreact',id:2},
        {name:'coding concepts',id:3}]
    const nameList = names.map(name=><h2 key={name.id}>{name.name} is having ID: {name.id}</h2>)

    return <div>{nameList}</div>
}
export default ListRendering