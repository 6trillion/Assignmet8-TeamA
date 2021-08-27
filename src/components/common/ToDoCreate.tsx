import React, { useState, useRef } from 'react';
import { TodoCreateBox } from '../TodoCreateBox';
import styled from 'styled-components';
import Stars from './Stars';
import {
  useTodosDispatch,
  increamentNextId,
  nextIdState,
  Todo,
} from 'contexts/Todo/TodoStore';
import Modal from './Modal';

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
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [todo, setTodo] = useState<Todo>();

  const handleSave = () => {
    if (inputTask === '') {
      handleToggle();
      return;
    }
    setTodo({
      id: nextIdState,
      taskName: inputTask,
      status: tagName,
      importance: starIndex,
      writer: userName ? userName : 'anonymous',
      createAt: new Date(),
      updateAt: new Date(),
    });
  };

  const handleToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleSubmit = () => {
    if (todo) {
      dispatch({
        type: 'CREATE',
        createTodo: todo,
      });
    }
    setIsOpen(false);
    increamentNextId();
    setInputTask('');
    setStarIndex(0);
  };

  const handleCancel = (isCreate: boolean) => {
    isCreate ? setIsOpen(false) : setEdit(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  return (
    <>
      <TodoCreateBox open={open}>
        <TodoCreateForm onSubmit={handleSubmit}>
          <label htmlFor="taskName">할 일</label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="할 일을 적어주세요"
            name="taskName"
            value={inputTask}
          />
          <Stars setStarIndex={setStarIndex} />
          <button onClick={handleSave}>저장</button>
          <button onClick={() => handleCancel(isCreate)}>취소</button>
        </TodoCreateForm>
      </TodoCreateBox>
      <Modal modalOpen={modalOpen} handleToggle={handleToggle}>
        <p>내용을 입력해 주세요📝</p>
      </Modal>
    </>
  );
};

const TodoCreateForm = styled.form`
  border: 1px solid black;
`;

export default ToDoCreate;
