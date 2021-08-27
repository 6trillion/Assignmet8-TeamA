import React from 'react';

interface TodoCreateBoxProps {
  open: boolean;
  children?: JSX.Element;
}

const TodoCreateBox = (props: TodoCreateBoxProps) => {
  const { open, children } = props;

  return <>{open && <div>{children}</div>}</>;
};

export default TodoCreateBox;
