import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTodosDispatch, Todo } from 'contexts/Todo/TodoStore';
import { initStar } from 'utils/constants';
import Stars from '../common/Stars';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';
import Status from '../common/Status';

interface ToDoItemProps {
  todo: Todo;
  tagName: string;
}

const ToDoItem = (props: ToDoItemProps) => {
  const dispatch = useTodosDispatch();
  const { todo, tagName } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState('');
  const [starIndex, setStarIndex] = useState(1);

  const tasKNameRef = useRef(null);
  useEffect(() => {
    const updateTasKName = tasKNameRef.current! as HTMLElement;
    if (updateTasKName) updateTasKName.focus();
  }, [isEdit]);

  const newStars = (index: number) =>
    initStar.map((_, i): boolean => i < index);

  const handleRemove = (id: number) => {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  };

  const handleEdit = () => {
    const updateTasKName = tasKNameRef.current! as HTMLElement;
    const updateText = updateTasKName.innerText;

    if (isEdit && updateText !== '') {
      const updateTodo: Todo = {
        id: todo.id,
        taskName: updateText,
        status: status,
        importance: starIndex === 0 ? 1 : starIndex,
        writer: todo.writer,
        createAt: todo.createAt,
        updateAt: new Date(),
      };
      dispatch({ type: 'UPDATE', updateTodo: updateTodo });
    }
    if (updateText === '') {
      updateTasKName.innerText = todo.taskName;
    }
    setIsEdit((prev) => !prev);
  };

  return (
    <TodoItemWrapper>
      <div
        ref={tasKNameRef}
        contentEditable={isEdit}
        suppressContentEditableWarning={true}
      >
        {todo.taskName}
      </div>
      <p>
        {isEdit ? (
          <Stars setStarIndex={setStarIndex} />
        ) : (
          newStars(todo.importance).map((item: boolean, index: number) =>
            item ? <StarSvg key={index} fill="gold" /> : '',
          )
        )}
      </p>
      <p>{todo.writer}</p>
      {isEdit ? (
        <Status status={todo.status} setStatus={setStatus} />
      ) : (
        <p>{todo.status}</p>
      )}
      {isEdit ? (
        <p onClick={handleEdit}>저장</p>
      ) : (
        <EditSvg onClick={handleEdit} />
      )}
      <DeleteSvg onClick={() => handleRemove(todo.id)} />
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;

export default ToDoItem;
