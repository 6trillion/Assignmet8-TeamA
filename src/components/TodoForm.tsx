import React, {useState, useEffect} from 'react';
import {useTodosDispatch, increamentNextId} from '../contexts/Todo/Store';


function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();
  useEffect(() => {
    dispatch({
        type: 'LOAD_DATA',
      });
  }, []);
  const _onChange = (e: any) => { 
    setValue(e.target.value);
  }
  const _onClick = (e: any) => { 
    increamentNextId();
    dispatch({
      type: 'CREATE',
      taskName: value,
      writer:'gg'
    });
    setValue('') 
  }
  return (
    <div>
      <input value={value} onChange={_onChange}></input>
      <button onClick={_onClick}>create</button></div>
  );
}

export default TodoForm;