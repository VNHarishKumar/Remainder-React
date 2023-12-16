import React, {useState,useEffect} from 'react';
import './CardHolder.scss';
import axios from 'axios';

const  CardHolder = function(props) 
{   

    const[todos,setTodos]=useState([]);

  useEffect(()=>
  {
      fetch('http://localhost:9000/todos')
      .then((response)=> response.json() )
      .then((data)=> setTodos(data))
      .catch((error)=> console.error(error));
  }, []);

    

    const  handleCheckboxChange = (event,id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id)
            {
                return {...todo,completed: event.target.checked};
            }
            else
            {
                return todo;
            }
        });
        setTodos(updatedTodos);
    }

    const  handleDescription = (event,id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id)
            {
                return {...todo,comp: event.target.checked};
            }
            else
            {
                return todo;
            }
        });
        setTodos(updatedTodos);
    }

    const handleDelete = (id,_id) => {
       
        fetch(`http://localhost:9000/todos/`+_id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => { 
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    })
    .catch(error => console.error(error));
  
       
      };
    
    
    return (
        <div className='card' >
            {
                todos.map((todo) => (
                  
                    <div className='cardid' >
                        <div className='r-id'>{todo.id}</div>
                        <div className='r-name'>{todo.title}</div>

                        {/* <div className='r-description'> {todo.description}</div> */}
                        <div className='r-description'>
                        {props.name}<input type='checkbox' checked={todo.comp}
                            onChange={(event) => handleDescription(event,todo.id)} />
                           
                        </div>
                        <div> {todo.comp ? todo.description : '...'} </div>

                        <div className='r-time'>{todo.schedule && todo.schedule.startdate}</div>
                        <div className='r-checkbox'>
                            <p>Action Needed:<input type='checkbox'  checked={todo.completed} 
                            onChange={(event) => handleCheckboxChange(event,todo.id)} /></p>
                        </div>   

                        <div className='r-completed'>{todo.completed ? 'Completed' : ''}</div>
                        <button className='btn-delete' onClick={() => handleDelete(todo.id,todo._id)}>Delete</button>
                    </div>


                        // </div>
                ))}
        </div>
    );
}

export default CardHolder;
