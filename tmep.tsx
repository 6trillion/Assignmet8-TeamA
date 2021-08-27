import React, { FC, useEffect, useRef } from 'react';
// import TodoItem from 'components/TodoItem';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import { Itodo, useTodo } from 'utils/todoService';
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

  const [newTodoState, setNewTodoState] = useState(todoState);
  const [dragTodo, setDragTodo] = useState<Itodo | null>(null);

  const AreaRef = useRef<HTMLDivElement>(null);
  const ListRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setNewTodoState(todoState);
  }, [todoState]);
  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, []);
  const getDragAfterElement = useCallback((y: any) => {
    const draggableElements = [...ListRef.current];

    return draggableElements.reduce(
      (closest: any, child: any, index) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child, index: index };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).index;
  }, []);

  const handleDragOver = useCallback(
    (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(e.clientY);
      console.log(afterElement);

      if (dragTodo) {
        if (afterElement === undefined) {
          setNewTodoState((prev) => {
            const nextState = [...prev];
            const index = nextState.indexOf(dragTodo);
            nextState.splice(index, 1);
            nextState.push(dragTodo);

            return nextState;
          });
        } else {
          setNewTodoState((prev) => {
            const nextState = [...prev];
            const index = nextState.indexOf(dragTodo);
            nextState.splice(index, 1);
            nextState.splice(afterElement, 0, dragTodo);
            return nextState;
          });
        }
      }
    },
    [getDragAfterElement, dragTodo],
  );

  const handleDragStart = useCallback((todo) => {
    setDragTodo(todo);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragTodo(null);
  }, []);

  return (
    <div onDragOver={handleDragOver} ref={AreaRef}>
      <StateHeader>
        <p>{tagName} </p>
        <p onClick={handleClick}>+</p>
      </StateHeader>

      {newTodoState?.map((todo, index) => (
        <TodoItem
          key={todo.id}
          draggable
          onDragStart={() => handleDragStart(todo)}
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
