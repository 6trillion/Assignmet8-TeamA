import React from 'react';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';

interface TodoListProps {
  todos: Itodo[];
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props;
  console.log(todos);
  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem key={todo.id}>
            <div>{todo.taskName}</div>
            <p>{todo.importance}</p>
          </TodoItem>
        ))}
    </>
  );
};

export default React.memo(TodoList);

const TodoItem = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;
