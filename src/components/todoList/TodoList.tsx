import React from 'react';
import {useTodosState} from 'contexts/Todo/TodoStore';
import ToDoItem from './ToDoItem';

interface TodoListProps {
  tagName: string;
}

const TodoList = (props: TodoListProps) => {
  const { tagName } = props;
  const todos = useTodosState();

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos
          ?.filter((todo) => todo.status === tagName)
          .map((todo) =>
          <ToDoItem key={todo.id} todo={todo} tagName={tagName} />
      )}
    </>
  );
};

export default React.memo(TodoList);
