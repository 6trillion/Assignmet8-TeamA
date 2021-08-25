import React, { useState } from 'react';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';
import ToDoCreate from 'components/common/ToDoCreate';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';

interface TodoListProps {
  todos: Itodo[];
  tagName: string;
  removeTodo: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, tagName, removeTodo } = props;
  const [edit, setEdit] = useState(false);
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
    setEdit(true);
  };

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos
          ?.filter((todo) => todo.status === tagName)
          .map((todo) => (
            <TodoItem key={todo.id}>
              <div>{todo.taskName}</div>
              <p>
                {todo.importance.map((item) =>
                  item ? <StarSvg fill="gold" /> : '',
                )}
              </p>
              <p>{todo.writer}</p>
              <p>{todo.status}</p>
              <EditSvg onClick={() => handleEdit(todo.id)} />
              <DeleteSvg onClick={() => handleRemove(todo.id)} />
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
