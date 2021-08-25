import React, { FC } from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import { Itodo } from 'utils/todoService';
import ToDoCreate from 'components/common/ToDoCreate';
import TodoList from 'components/todoList/TodoList';

interface StateAreaProps {
  tagName: string;
  userName: string;
  nextId: number;
  createTodo: (todo: Itodo) => void;
  increamentNextId: () => void;
  removeTodo: (id: number) => void;
  todoState: Itodo[];
}

const StateArea: FC<StateAreaProps> = ({
  tagName,
  userName,
  nextId,
  createTodo,
  increamentNextId,
  todoState,
  removeTodo,
}) => {
  const [open, setIsOpen] = useState(false);

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
        isCreate={true}
        status={tagName}
        userName={userName}
        nextId={nextId}
        createTodo={createTodo}
        increamentNextId={increamentNextId}
        open={open}
        setIsOpen={setIsOpen}
      />
      <TodoList tagName={tagName} todos={todoState} removeTodo={removeTodo} />
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
