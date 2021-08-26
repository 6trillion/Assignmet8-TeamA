import React, { FC } from 'react';
// import TodoItem from 'components/TodoItem';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import { useTodo } from 'utils/todoService';
import ToDoCreate from 'components/common/ToDoCreate';
import TodoList from 'components/todoList/TodoList';

interface StateAreaProps {
  tagName: string;
  userName: string;
}

const StateArea: FC<StateAreaProps> = ({ tagName, userName }) => {
  const [open, setIsOpen] = useState(false);

  const { todoState, nextIdState, setTodoState, increamentNextId, removeTodo, createTodo } =
    useTodo();

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <StateHeader>
        <p>{tagName} </p>
        <p onClick={handleClick}>+</p>
      </StateHeader>
      <TodoList todos={todoState} setTodoState={setTodoState} />
      <ToDoCreate
        userName={userName}
        nextId={nextIdState}
        createTodo={createTodo}
        increamentNextId={increamentNextId}
        open={open}
        setIsOpen={setIsOpen}
      />
    </>
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
