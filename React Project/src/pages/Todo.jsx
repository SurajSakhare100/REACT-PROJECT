import React, { createContext, useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { TodoContextProvider, usetodo, TodoContext } from '../Api/TodoContext';
import TodoItem from '../Component/TodoItem';
function Todo() {
    const todoinput = useRef(null);
    const [todos, setTodo] = useState([]);
    const addTodo=(todo) => {
        setTodo((prev)=>[{id:Date.now(),...todo},...prev])
     }
    const updateTodo=(todo,id) => {
        (prev)=>prev.map((prevTodo)=>prevTodo.id==id?todo:prevTodo)
     }
    const deleteTodo=(id)=>{
        setTodo((prev)=>prev.filter((todo)=>todo.id!==id))
    }
    const toggleComplete=(id)=>{
        (prev)=>prev.map((prevTodo)=>prevTodo.id==id?{...prevTodo,completed:!prevTodo.completed}:prevTodo)
    }
    return (
        <>
            <TodoContextProvider value={todos}>
                <h2 className='w-100 text-center text-2xl '>Todo App</h2>
                <div className='flex gap-4 justify-center items-center'>
                    <input ref={todoinput} type="text" placeholder='Add todo' className='border-2 px-2 py-1 w-1/2 border-black rounded-lg' />
                    <button onClick={() => {addTodo({id:Date.now(),title:todoinput.current.value,completed:true})}} className='bg-green-300 px-4 py-1 rounded-lg'>Add Todo</button>
                </div>
                <TodoItem />
            </TodoContextProvider>
        </>
    )
}

export default Todo
