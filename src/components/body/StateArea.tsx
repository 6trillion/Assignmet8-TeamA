import React, { FC, useCallback, useState, useEffect } from 'react';
import TodoList from 'components/todoList/TodoList';
import ToDoCreate from 'components/common/ToDoCreate';
import { useTodosDispatch } from 'contexts/Todo/TodoStore';
import styled from 'styled-components';

interface StateAreaProps {
  tagName: string;
  userName: string;
}

const StateArea: FC<StateAreaProps> = ({ tagName, userName }) => {
  const dispatch = useTodosDispatch();
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'LOAD_DATA',
    });
  }, [dispatch]);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <StateHeader>
        <p>{tagName} </p>
        <button onClick={handleClick}>+</button>
      </StateHeader>

      <ToDoCreate
        isCreate={true}
        open={open}
        tagName={tagName}
        userName={userName}
        setIsOpen={setIsOpen}
      />
      <TodoList tagName={tagName} userName={userName} />
    </>
  );
};

export default StateArea;

const StateHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;

  p {
    cursor: pointer;
  }
  button {
    border-radius: 25%;
    &:hover {
      background-color: aqua;
      cursor: pointer;
    }
  }
`;
