import React, { useRef } from 'react';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';

interface TodoListProps {
  todos: Itodo[];
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props;

  const draggingItem = useRef<number|null>(null);
  const dragOverItem = useRef<number|null>(null);

  const handleDragStart = (e:any, position:any)=> {
    draggingItem.current = position;
   
  }

  const handleDragEnter = (e:any, position:any)=>{
    dragOverItem.current = position;
    
    const todosCopy = todos&&[...todos];
    
    const draggingItemContent = todosCopy[draggingItem.current!];
    todosCopy.splice(draggingItem.current!, 1);
    todosCopy.splice(dragOverItem.current!, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    
  }
  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos?.map((todo, index) => (
          <TodoItem key={todo.id} 
          onDragStart={(e) => handleDragStart(e, index)} 
          onDragEnter={(e) => handleDragEnter(e, index)} 
          onDragOver={(e) => e.preventDefault()} 
          draggable>
            <div>{todo.taskName}</div>
            <p>{todo.importance}</p>
          </TodoItem>
        ))}
    </>
  );
};

export default React.memo(TodoList);

const TodoItem = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;
