import React, { useState } from 'react';
import { saveTodoStorage } from '../../utils/localStorage';
import { Status } from '../../utils/constants';

//저장 버튼 누르면 todo에 추가 + save Storage
//취소버튼 누르면 modal 닫기

export type Itodo = {
  id?: number;
  taskName?: string;
  status?: Status;
  priority?: number;
  createAt?: string;
  updateAt?: string;
};

interface ModalProps {
  open: boolean;
  handleToggle: () => void;
  children?: JSX.Element;
}

const Modal = (props: ModalProps) => {
  const { open, handleToggle, children } = props;
  const [todoState, setTodoState] = useState({});

  const handleSave = () => {
    handleToggle();
    saveTodoStorage(todoState);
  };

  const handleCancle = () => {
    handleToggle();
  };

  return (
    <>
      {open && (
        <div>
          {children}
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancle}>취소</button>
        </div>
      )}
    </>
  );
};

export default Modal;
