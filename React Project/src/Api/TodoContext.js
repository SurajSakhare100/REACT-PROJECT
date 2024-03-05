import React, { createContext, useState } from 'react'
import { useContext } from 'react'

export const TodoContext = createContext({
    todos:[{
        id:1,
        title:'',
        completed:false
    }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});
export const TodoContextProvider=TodoContext.Provider;

export const usetodo=()=>{
    return useContext(TodoContext)
}