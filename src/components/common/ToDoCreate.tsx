import React, { useState } from 'react';
import { Modal } from 'components/modal';
import styled from 'styled-components';
import Stars from './Stars';
import {
  useTodosDispatch,
  increamentNextId,
  nextIdState,
  Todo,
} from 'contexts/Todo/TodoStore';

interface TodoCreateProps {
  isCreate: boolean;
  todo?: Todo;
  open: boolean;
  tagName: string;
  userName: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToDoCreate = (props: TodoCreateProps) => {
  const { isCreate, open, tagName, userName, setIsOpen } = props;
  const dispatch = useTodosDispatch();

  const [edit, setEdit] = useState(false);
  const [starIndex, setStarIndex] = useState(1);
  const [inputTask, setInputTask] = useState('');

  const onCreate = () => {
    setIsOpen(false);
    const todo: Todo = {
      id: nextIdState,
      taskName: inputTask,
      status: tagName,
      importance: starIndex === 0 ? 1 : starIndex,
      writer: userName ? userName : 'anonymous',
      createAt: new Date(),
      updateAt: new Date(),
    };
    dispatch({
      type: 'CREATE',
      createTodo: todo,
    });
    increamentNextId();
    setInputTask('');
    setStarIndex(0);
  };

  const handleSave = () => {
    onCreate();
  };

  const handleCancel = (isCreate: boolean) => {
    isCreate ? setIsOpen(false) : setEdit(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  return (
    <Modal open={open}>
      <TodoCreateForm onSubmit={handleSave}>
        <label htmlFor="taskName">할 일</label>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="할 일을 적어주세요"
          name="taskName"
          value={inputTask || ''}
        />
        <Stars isCreate={true} setStarIndex={setStarIndex} />
        <button onClick={handleSave}>저장</button>
        <button onClick={() => handleCancel(isCreate)}>취소</button>
      </TodoCreateForm>
    </Modal>
  );
};

const TodoCreateForm = styled.form`
  border: 1px solid black;
`;

export default ToDoCreate;
