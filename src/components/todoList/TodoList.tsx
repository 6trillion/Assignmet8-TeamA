import React, { useRef } from 'react';
import { useTodosState } from 'contexts/Todo/TodoStore';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';

interface TodoListProps {
  tagName: string;
}
// interface TodoListProps {
//   todos: Itodo[];
//   setTodoState: (e: Itodo[]) => void;
// }

const TodoList = (props: TodoListProps) => {
  const { tagName } = props;
  const todos = useTodosState();




// const TodoList = (props: TodoListProps) => {
//   const { todos, setTodoState } = props;

  const draggingItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (position: number) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (position: number) => {
    dragOverItem.current = position;

    const todosCopy = todos && [...todos];

    const draggingItemContent = todosCopy[draggingItem.current!];
    todosCopy.splice(draggingItem.current!, 1);
    todosCopy.splice(dragOverItem.current!, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    // setTodoState(todosCopy);
  };

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos
          ?.filter((todo) => todo.status === tagName)
          .map((todo) =>
          <ToDoItem key={todo.id} todo={todo} tagName={tagName} />
      )}
        {/* todos?.map((todo, index) => (
          <TodoItem
            key={todo.id}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragOver={(e) => e.preventDefault()}
            draggable
          >
            <div>{todo.taskName}</div>
            <p>{todo.importance}</p>
          </TodoItem>
        ))} */}
    </>
  );
};

export default React.memo(TodoList);
