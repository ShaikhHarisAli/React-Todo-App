import React,{useEffect} from 'react';
import {v4 as uuidV4} from 'uuid';


function Form({input,setInput, todos ,setTodos,editTodo ,setEditTodo}) {
    const updateTodo = (title,id,completed)=>{
        const newTodo = todos.map((todo)=> {
          return  todo.id === id ? {title,id,completed}: todo

        })
        setTodos(newTodo);
        setEditTodo('');
    };
    useEffect(()=>{
        if (editTodo){
            setInput(editTodo.title);
        } else{
            setInput('');
        }
    },[setInput,editTodo]);
    const onInputChange =(event)=>{setInput(event.target.value)}
    const onFormSubmit =(event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:uuidV4,title:input,completed:false}]);
        setInput('');
        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }
        
    }

  return (
    <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter a todo ..........' className='task-input' required value={input} onChange={onInputChange}/>
        <button type='submit' className='button-add'>{editTodo ? "OK":"Add"}</button>
    </form>
  )
}

export default Form
