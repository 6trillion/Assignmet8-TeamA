import React, { FC } from 'react';
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

  const { todoState, nextIdState, increamentNextId, removeTodo, createTodo } =
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
      <ToDoCreate
        status={tagName}
        userName={userName}
        nextId={nextIdState}
        createTodo={createTodo}
        increamentNextId={increamentNextId}
        open={open}
        setIsOpen={setIsOpen}
      />
      <TodoList todos={todoState} removeTodo={removeTodo} />
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
