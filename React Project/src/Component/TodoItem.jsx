import React, { useState } from 'react'
import { TodoContext, usetodo } from '../Api/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCableCar, faDumpster, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons'
function TodoItem() {
    const { todos, deleteTodo, addTodo, updateTodo,toggleComplete } = usetodo()
    const [editable,seteditable]=useState(true)
    const [completed,setcompleted]=useState(false)
    function editTodo() {
        updateTodo(todos.id,{...todos,todos})
        seteditable(false)
    }
    return (
        <div className='flex gap-4 w-1/2 m-auto text-black'>
            <div className='w-full h-full rounded-lg my-2 '>
                {todos.map((todo, id) => (
                    <div key={id} className={`w-full my-2 py-2 px-4 ${todo.completed?'bg-slate-400':'bg-pink-200'} rounded-xl flex items-center justify-between`}>
                        <div className='flex gap-2 items-center'>
                            <input 
                            type="checkbox"
                            className='cursor-pointer'
                            checked={todo.completed} 
                            onChange={toggleComplete(todo.id)}/>
                            <input 
                            className={`text-black text-md bg-transparent outline-none border-none ${todo.completed?'line-through':''}`} 
                            readOnly={editable}
                            value={todo}
                             />
                        </div>
                        <div className='flex items-center gap-2  '>
                            <div onClick={() => { editTodo() }} className={`w-[40px] h-[40px] cursor-pointer rounded-lg ${editable?'bg-white':'bg-[#ffffffa2]'} flex items-center justify-center`}>
                                {/* <FontAwesomeIcon icon={faPencil} /> */}
                                <p className={`text-[18px] }`} onClick={()=>{seteditable((a)=>!a)}}>✏️</p>
                            </div>
                            <div onClick={() => { deleteTodo(todo.id) }} className='w-[40px] cursor-pointer h-[40px] rounded-lg bg-white flex items-center justify-center'>
                                <FontAwesomeIcon icon={faXmark} className='text-red-600 text-2xl'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoItem
