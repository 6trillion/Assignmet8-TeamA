import React from 'react';
import styled from 'styled-components';
import { useTodosState, useTodosDispatch, Todo } from 'contexts/Todo/TodoStore';

import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';
import { initStar } from 'utils/constants';

interface ToDoItemProps {
  handleEdit: (id: number) => void;
  todo: Todo;
}

const ToDoItem = (props: ToDoItemProps) => {
  const dispatch = useTodosDispatch();
  const { handleEdit, todo } = props;

  const newStars = (index: number) =>
    initStar.map((_, i): boolean => i < index);

  const handleRemove = (id: number) => {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  };

  return (
    <TodoItemWrapper>
      <div>{todo.taskName}</div>
      <p>
        {newStars(todo.importance).map((item: boolean, index: number) =>
          item ? <StarSvg key={index} fill="gold" /> : '',
        )}
      </p>
      <p>{todo.writer}</p>
      <p>{todo.status}</p>
      <EditSvg onClick={() => handleEdit(todo.id)} />
      <DeleteSvg onClick={() => handleRemove(todo.id)} />
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;

export default ToDoItem;
