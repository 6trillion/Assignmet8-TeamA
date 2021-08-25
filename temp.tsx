import React, { FC, useRef } from 'react';
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
  const { todoState, nextIdState, increamentNextId, removeTodo, createTodo } =
    useTodo();

  const [draggableIndex, setDraggableIndex] = useState<number>(0);
  const AreaRef = useRef<HTMLDivElement>(null);
  const ListRef = useRef<HTMLDivElement[]>([]);

  console.log(ListRef.current);

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const getDragAfterElement = useCallback(
    (y: any) => {
      const draggableElements = [...ListRef.current.splice(draggableIndex, 1)];

      return draggableElements.reduce(
        (closest: any, child: any) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;

          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY },
      ).element;
    },
    [draggableIndex],
  );

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(e.clientY);
      const draggable = ListRef.current[draggableIndex];

      if (AreaRef.current) {
        if (afterElement === undefined && draggable) {
          console.log(AreaRef.current);
        }
      }
    },
    [getDragAfterElement, draggableIndex],
  );

  const handleDragStart = useCallback((index) => {
    setDraggableIndex(index);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggableIndex(0);
  }, []);

  return (
    <div onDragOver={handleDragOver} ref={AreaRef}>
      <StateHeader>
        <p>{tagName} </p>
        <p onClick={handleClick}>+</p>
      </StateHeader>

      {todoState?.map((todo, index) => (
        <TodoItem
          key={todo.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnd={handleDragEnd}
          ref={(r: any) => (ListRef.current[index] = r)}
        >
          <div>{todo.taskName}</div>
          <p>{todo.importance}</p>
        </TodoItem>
      ))}

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

const TodoItem = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
  cursor: move;
`;
