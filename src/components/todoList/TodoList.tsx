import React, { useState } from 'react';
import { Itodo } from 'utils/todoService';
import ToDoCreate from 'components/common/ToDoCreate';
import ToDoItem from './ToDoItem';

interface TodoListProps {
  todos: Itodo[];
  tagName: string;
  removeTodo: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, tagName, removeTodo } = props;

  console.log(todos);

  const handleRemove = (id: number) => {
    removeTodo(id);
  };

  //React.MouseEventHandler<SVGSVGElement>
  const handleEdit = (id: number) => {
    //const updateTodos = todos.map((todo) =>
    //  todo.id === id ? (
    //    <ToDoCreate todo={todo} status={tagName} userName={todo.writer} />
    //  ) : (
    //    todo
    //  ),
    //);
    //console.log('updateTodos>>>', updateTodos);
    // setTodos(updateTodos);
  };

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos
          ?.filter((todo) => todo.status === tagName)
          .map((todo) => (
            <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
    </>
  );
};

export default React.memo(TodoList);
