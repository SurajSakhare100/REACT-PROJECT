import React, { createContext, useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { TodoContextProvider, usetodo, TodoContext } from '../Api/TodoContext';
import TodoItem from '../Component/TodoItem';
function Todo() {
    const todoinput = useRef(null);
    const [todos, setTodo] = useState([]);
    console.log(todos)
    const addTodo=(todo) => {
        setTodo((prev)=>[{id:Date.now(),...todo},...prev])
     }
    const updateTodo=(id) => {
        (prev)=>prev.map((prevTodo)=>prevTodo.id==id?todo:prevTodo)
     }
    const deleteTodo=(id)=>{
        console.log(id)
        setTodo((prev)=>prev.filter((todo)=>{return todo.id!=id}))
    }
    const toggleComplete=(id)=>{
        
        setTodo((prev)=>prev.map((prevTodo)=>prevTodo.id==id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }
    useEffect(() => {
        // const todost=JSON.parse(localStorage.getItem("todos"))
        // if(todos && todos.length>0){
        //     setTodo(todost)
        // }
    }, [])
    useEffect(() => {
        // localStorage.setItem('todos',JSON.stringify(todos))
    }, [setTodo])
    
    return (
        <>
            <TodoContextProvider value={{todos,deleteTodo,toggleComplete,addTodo,updateTodo}}>
                <div className='bg-[#111943] w-full h-screen '>
                <h2 className='w-100 text-white text-center text-4xl font-bold mb-2 py-2'>Todo App</h2>
                <div className='flex gap-4 justify-center items-center w-full flex-col'>
                    <div className='w-1/2 m-auto flex gap-2 justify-center'>
                    <input ref={todoinput} type="text" placeholder='Add todo' className='border-2 text-white outline-none px-2 w-4/5 py-2 border-none bg-[#ffffff39] rounded-lg' />
                    <button onClick={() => {addTodo({id:Date.now(),title:todoinput.current.value,completed:true})}} className='bg-green-400 px-4 w-1/5  py-2 rounded-lg'>Add Todo</button>
                    </div>
                <TodoItem />
                </div>
                </div>
            </TodoContextProvider>
        </>
    )
}

export default Todo
