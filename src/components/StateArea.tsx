import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import TodoList from 'components/todoList/TodoList';

interface StateAreaProps {
  tagName: string;
  userName: string;
}

const StateArea: FC<StateAreaProps> = ({ tagName, userName }) => {
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
      <TodoList
        open={open}
        setIsOpen={setIsOpen}
        tagName={tagName}
        userName={userName}
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
