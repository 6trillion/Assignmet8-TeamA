import React, { FC, useRef } from 'react';
// import TodoItem from 'components/TodoItem';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import { useTodo } from 'utils/todoService';
import { getDragAfterElement } from 'utils/getDragAfterElement';
import ToDoCreate from 'components/common/ToDoCreate';
import TodoList from 'components/todoList/TodoList';

interface StateAreaProps {
  tagName: string;
  userName: string;
}

const StateArea: FC<StateAreaProps> = ({ tagName, userName }) => {
  const [open, setIsOpen] = useState(false);
  const { todoState, nextIdState, increamentNextId, removeTodo, createTodo } =
    useTodo();

  const [isDragging, setIsDragging] = useState([]);
  const AreaRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div onDragOver={handleDragOver} ref={AreaRef}>
      <StateHeader>
        <p>{tagName} </p>
        <p onClick={handleClick}>+</p>
      </StateHeader>
      <TodoList
        todos={todoState}
        isDragging={isDragging}
        setIsDragging={setIsDragging}
      />
      <ToDoCreate
        userName={userName}
        nextId={nextIdState}
        createTodo={createTodo}
        increamentNextId={increamentNextId}
        open={open}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default StateArea;

const StateHeader = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

  p {
    cursor: pointer;
  }
`;
