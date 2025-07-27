import React from 'react'

const CreateTodo = () => {
    return (
        <div>
            <input type="text" placeholder="Title" /><br/>
            <input type="text" placeholder="Description" /><br/>
            <input type="checkbox" /> Completed<br/>

            <button type="submit">Add a Todo</button>
        </div>
    )
}

export default CreateTodo
