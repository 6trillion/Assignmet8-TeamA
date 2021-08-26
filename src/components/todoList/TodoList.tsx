import React, { useRef } from 'react';
import { useTodosState, useTodosDispatch } from 'contexts/Todo/TodoStore';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';

interface TodoListProps {
  tagName: string;
}

const TodoList = (props: TodoListProps) => {
  const { tagName } = props;
  const todos = useTodosState();
  const dispatch = useTodosDispatch();

  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (position: number) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (position: number) => {
    dragOverItem.current = position;

    const todosCopy = todos && [...todos];

    const draggingItemContent = todosCopy[draggingItem.current!];
    todosCopy.splice(draggingItem.current!, 1);
    todosCopy.splice(dragOverItem.current!, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    console.log(todosCopy);
    dispatch({
      type: 'SAVE',
      saveTodo: todosCopy,
    });
  };

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos
          ?.filter((todo) => todo.status === tagName)
          .map((todo, index) =>
          <div key={todo.id} 
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragOver={(e) => e.preventDefault()}
            draggable>
            <ToDoItem  todo={todo} tagName={tagName} 
              />
          </div>
      )}
    </>
  );
};

export default React.memo(TodoList);
