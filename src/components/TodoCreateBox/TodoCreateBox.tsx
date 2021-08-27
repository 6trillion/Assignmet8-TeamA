import React from 'react';
import { Status } from 'utils/constants';

export type Itodo = {
  id?: number;
  taskName?: string;
  status?: Status;
  priority?: number;
  createAt?: string;
  updateAt?: string;
};

interface TodoCreateBoxProps {
  open: boolean;
  children?: JSX.Element;
}

const TodoCreateBox = (props: TodoCreateBoxProps) => {
  const { open, children } = props;

  return <>{open && <div>{children}</div>}</>;
};

export default TodoCreateBox;
