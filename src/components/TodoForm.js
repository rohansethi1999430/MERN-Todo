import React, { useState } from 'react'
import './TodoForm.css';
function TodoForm() {
    const [text,setText] = useState("");

    const onFormSubmit = () =>{

    }

   const onInputChange = (e) =>{
     setText(e.target.value);
    }
  return (
    <div className='form'>
    <form onSubmit={onFormSubmit}>
  <label>
    <input type="text" name="name" placeholder='Enter Todo..' className='inputText' onChange={onInputChange}/>
  </label>

  <input type="submit" value="Add Todo" className='subitButton'/>
  </form>
    </div>
  )
}

export default TodoForm