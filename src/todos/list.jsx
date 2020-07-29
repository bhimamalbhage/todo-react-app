import React from 'react'

export const TodoList = ({className, todos, toggleTodo})=>{

    return( 
        <div className={className} >
   { todos.map((todo)=> (
        <div 
        className={
            "item " +
            todo.status
        }
        key={todo.id}
        style={{ textDecoration : todo.status === "COMPLETE" ? "line-through" : "none", }}
        onClick = {toggleTodo(todo.id)}>{todo.text}</div>
    ))}
    </div>
    );
}