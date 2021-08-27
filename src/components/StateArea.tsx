import React, { FC, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from 'components/todoList/TodoList';
import ToDoCreate from 'components/common/ToDoCreate';
import {useTodosDispatch
} from 'contexts/Todo/TodoStore';

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
  }, []);

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
        open={open}
        tagName={tagName}
        userName={userName}
        setIsOpen={setIsOpen}
      />
      <TodoList
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
