import React from 'react';
import styled from 'styled-components';
import { Itodo } from 'utils/todoService';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as ReviseSvg } from 'components/assets/svg/revise.svg';

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
        todos?.map((todo) => (
          <TodoItem key={todo.id}>
            <div>{todo.taskName}</div>
            <p>
              {todo.importance.map((item) =>
                item ? <StarSvg fill="gold" /> : '',
              )}
            </p>
            <p>{todo.writer}</p>
            <p>{todo.status}</p>
            <ReviseSvg />
            <DeleteSvg />
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
