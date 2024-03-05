import React from 'react'
import { TodoContext, usetodo } from '../Api/TodoContext'
function TodoItem() {
    const todoitem = usetodo(TodoContext)
    return (
        <div className='flex gap-4 w-full text-black'>

            <div>
                {todoitem.map((todo,id) => {
                    <div key={id}>
                        <p className='text-black'>{todo.id}</p>
                        <p className='text-black'>{todo.title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoItem
