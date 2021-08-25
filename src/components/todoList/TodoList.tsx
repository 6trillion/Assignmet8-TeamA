import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';

interface TodoListProps {
  todos: Itodo[];
}

const TodoList = forwardRef<HTMLDivElement[], TodoListProps>(
  (props: TodoListProps, ref) => {
    const { todos } = props;

    return (
      <>
        {todos &&
          todos.length > 0 &&
          ref &&
          todos.map((todo, index) => (
            <TodoItem key={todo.id} draggable>
              <div>{todo.taskName}</div>
              <p>{todo.importance}</p>
            </TodoItem>
          ))}
      </>
    );
  },
);

export default TodoList;

const TodoItem = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
  cursor: move;
`;
