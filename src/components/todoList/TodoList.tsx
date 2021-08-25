import React, { useCallback, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';

interface TodoListProps {
  todos: Itodo[];
  isDragging: boolean[];
  setIsDragging: (e: any) => void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, isDragging, setIsDragging } = props;

  useEffect(() => {
    setIsDragging(Array.from({ length: todos.length }).fill(false));
  }, [setIsDragging, todos.length]);

  const handleDragStart = useCallback(
    (id) => {
      setIsDragging(isDragging.map((_, i) => (i + 1 === id ? true : false)));
    },
    [setIsDragging, isDragging],
  );

  const handleDragEnd = useCallback(
    (id) => {
      setIsDragging(isDragging.fill(false));
    },
    [isDragging, setIsDragging],
  );

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            draggable
            onDragStart={() => handleDragStart(todo.id)}
            onDragEnd={() => handleDragEnd(todo.id)}
          >
            <div>{todo.taskName}</div>
            <p>{todo.importance}</p>
          </TodoItem>
        ))}
    </>
  );
};

export default TodoList;

const TodoItem = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
  cursor: move;
`;
