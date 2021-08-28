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
      <StateHeader tagName={tagName}>
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

const StateHeader = styled.div<{tagName: string}>`
  display: flex;
  margin-bottom: 25px;
  padding: 15px 10px;
  justify-content: space-between;
  color: #FFFFFF;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: ${(props) =>
    props.tagName === 'To Do'
      ? '#9895E0'
      : props.tagName === 'In Progress'
      ? '#4A94F8'
      : '#56C991'};

  p {
    margin-left: 10px;
    cursor: pointer;
  }
  button {
    margin-right: 5px;
    border-radius: 25%;
    &:hover {
      background-color: #4B5489;
      cursor: pointer;
    }
  }
`;
