import React, { useCallback, useRef, useState } from 'react';
import { throttle } from 'utils/throttle';
import ToDoItem from 'components/todoList/ToDoItem';
import { useTodosState, useTodosDispatch, Todo } from 'contexts/Todo/TodoStore';

interface TodoListProps {
  tagName: string;
  userName: string;
}

const TodoList = (props: TodoListProps) => {
  const { tagName, userName } = props;
  const todos = useTodosState();
  const dispatch = useTodosDispatch();
  const [dragTodo, setDragTodo] = useState<Todo | null>(null);

  const AreaRef = useRef<HTMLDivElement>(null);
  const ListRef = useRef<HTMLDivElement[]>([]);

  const getDragAfterElement = useCallback((y: any) => {
    const draggableElements = [
      ...ListRef.current.filter((v) => v !== undefined),
    ];

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
          const nextState = [...todos];
          const index = nextState.indexOf(dragTodo);
          nextState.splice(index, 1);
          nextState.push(dragTodo);

          dispatch({
            type: 'SAVE',
            saveTodo: nextState,
          });
        } else {
          const nextState = [...todos];
          const index = nextState.indexOf(dragTodo);
          nextState.splice(index, 1);
          nextState.splice(afterElement, 0, dragTodo);

          dispatch({
            type: 'SAVE',
            saveTodo: nextState,
          });
        }
      }
    },
    [getDragAfterElement, dragTodo, dispatch, todos],
  );

  const handleThrottleDragOver = throttle(handleDragOver, 300);

  return (
    <div onDragOver={handleThrottleDragOver} ref={AreaRef}>
      {todos.length > 0 &&
        todos
          ?.filter((todo) => todo?.status === tagName)
          .map((todo, index) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              tagName={tagName}
              userName={userName}
              setDragTodo={setDragTodo}
              ref={(r: any) => (ListRef.current[index] = r)}
            />
          ))}
    </div>
  );
};

export default React.memo(TodoList);
