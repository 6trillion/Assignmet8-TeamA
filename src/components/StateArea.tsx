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
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { todoState, nextIdState, increamentNextId, removeTodo, createTodo } =
    useTodo();

  const handleClick = useCallback(() => {
    setIsFormOpen((prev) => !prev);
  }, []);

  return (
    <>
      <StateHeader>
        <p>{tagName} </p>
        <p onClick={handleClick}>+</p>
      </StateHeader>
      <>
        <TodoList todos={todoState} />
      </>

      {isFormOpen && (
        <ToDoCreate
          userName={userName}
          nextId={nextIdState}
          createTodo={createTodo}
          increamentNextId={increamentNextId}
        />
      )}
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
