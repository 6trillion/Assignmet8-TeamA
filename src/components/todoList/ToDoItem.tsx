import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';
import TaskForm from 'components/common/TaskForm';
import { Itodo } from 'utils/todoService';

interface ToDoItemProps {
  edit: boolean;
  setEdit: any;
  todo: any;
  isCreate: boolean;
  removeTodo: (id: number) => void;
  stars: boolean[];
  setStars: (star: boolean[]) => void;
  setStarIndex: (starIndex: number) => void;
  handleEdit: any;
  handleSave: (e: any, isCreate: boolean, todo: Itodo) => void;
  handleCancel: (isCreate: boolean) => void;
  inputTask: string;
  setInputTask: (inputTask: string) => void;
}

const ToDoItem = (props: ToDoItemProps) => {
  const {
    edit,
    setEdit,
    todo,
    removeTodo,
    stars,
    setStars,
    setStarIndex,
    handleEdit,
    handleSave,
    handleCancel,
    inputTask,
    setInputTask,
  } = props;

  //  const handleEdit = (id: number) => {
  //    console.log(id);

  //    setEdit(true);
  //  };

  const handleRemove = (id: number) => {
    removeTodo(id);
  };
  return (
    <TodoItemWrapper>
      <div>{todo.taskName}</div>
      <p>
        {todo.importance.map((item: boolean, index: number) =>
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
