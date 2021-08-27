import React, { useState } from 'react';
import Stars from 'components/common/Stars';
import TodoCreateBox from 'components/TodoCreateBox/TodoCreateBox';
import Modal from 'components/common/Modal';
import {
  useTodosDispatch,
  increamentNextId,
  nextIdState,
  Todo,
} from 'contexts/Todo/TodoStore';
import styled from 'styled-components';

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

  const [starIndex, setStarIndex] = useState(1);
  const [inputTask, setInputTask] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [checkLoginValid, setCheckLoginValid] = useState(false);

  const handleSave = () => {
    onCreate();
  };

  const checkLogin = () => {
    if (userName) {
      handleSave();
    } else {
      setCheckLoginValid(true);
    }
  };

  const onCreate = () => {
    if (inputTask === '') {
      handleToggle();
      return;
    }
    const todo: Todo = {
      id: nextIdState,
      taskName: inputTask,
      status: tagName,
      importance: starIndex === 0 ? 1 : starIndex,
      writer: userName,
      createAt: new Date(),
      updateAt: new Date(),
    };
    dispatch({
      type: 'CREATE',
      createTodo: todo,
    });
    setIsOpen(false);
    increamentNextId();
    setInputTask('');
    setStarIndex(0);
  };

  const handleToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleLoginCheckToggle = () => {
    setCheckLoginValid(!checkLoginValid);
  };

  const handleCancel = (isCreate: boolean) => {
    setIsOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  return (
    <>
      <TodoCreateBox open={open}>
        <TodoCreateForm onSubmit={handleSave}>
          <TodoName>
            <label htmlFor="taskName">할 일</label>
            <input
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="할 일을 적어주세요"
              name="taskName"
              value={inputTask}
            />
          </TodoName>
          <TodoControl>
            <Stars isCreate={true} setStarIndex={setStarIndex} />

            <button type="button" onClick={checkLogin}>
              저장
            </button>
            <button onClick={() => handleCancel(isCreate)}>취소</button>
          </TodoControl>
        </TodoCreateForm>
      </TodoCreateBox>
      <Modal modalOpen={modalOpen} handleToggle={handleToggle}>
        <p>내용을 입력해 주세요📝</p>
      </Modal>
      <Modal modalOpen={checkLoginValid} handleToggle={handleLoginCheckToggle}>
        <p>로그인 후 작성할 수 있습니다</p>
      </Modal>
    </>
  );
};

const TodoCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
  input {
  }
`;
const TodoName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TodoControl = styled.div`
  button {
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 25%;
    &:hover {
      background-color: aqua;
      cursor: pointer;
    }
  }
`;
export default ToDoCreate;
