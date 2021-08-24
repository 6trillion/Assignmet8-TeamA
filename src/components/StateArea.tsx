import React, { FC } from 'react';
import TodoItem from 'components/TodoItem';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import CreateForm from 'components/CreateForm';

const StateArea: FC = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsFormOpen(true);
  }, []);

  return (
    <>
      <StateHeader>
        {children}
        <p onClick={handleClick}>+</p>
      </StateHeader>
      <>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        {isFormOpen && <CreateForm />}
      </>
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
