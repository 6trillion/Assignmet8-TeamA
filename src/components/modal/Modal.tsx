import React from 'react';
import { Status } from 'utils/constants';

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
  children?: JSX.Element;
}

const Modal = (props: ModalProps) => {
  const { open, children } = props;

  return <>{open && <div>{children}</div>}</>;
};

export default Modal;
