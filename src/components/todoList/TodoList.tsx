import React from 'react';
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
          <div key={todo.id}>
            <div>{todo.taskName}</div>
            <p>{todo.importance}</p>
          </div>
        ))}
    </>
  );
};

export default React.memo(TodoList);
