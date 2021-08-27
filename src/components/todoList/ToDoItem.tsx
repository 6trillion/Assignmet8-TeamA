import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTodosDispatch, Todo } from 'contexts/Todo/TodoStore';
import { initStar } from 'utils/constants';
import Stars from '../common/Stars';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';
import Status from '../common/Status';
import Modal from 'components/common/Modal';

interface ToDoItemProps {
  todo: Todo;
  userName: string;
}

const ToDoItem = (props: ToDoItemProps) => {
  const dispatch = useTodosDispatch();
  const { todo, userName } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState('');
  const [starIndex, setStarIndex] = useState(initStar);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleEdit = () => {
    if (userName !== todo.writer) return handleToggle();
    const updateTasKName = tasKNameRef.current! as HTMLElement;
    const updateText = updateTasKName.innerText;
    if (isEdit) {
      const updateTodo: Todo = {
        id: todo.id,
        taskName: updateText,
        status: status,
        importance: todo.importance,
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
    <>
      <TodoItemWrapper>
        <div
          ref={tasKNameRef}
          contentEditable={isEdit}
          suppressContentEditableWarning={true}
        >
          {todo.taskName}
        </div>
        <p>
          {newStars(todo.importance).map((item: boolean, index: number) =>
            item ? <StarSvg key={index} fill="gold" /> : '',
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
      <Modal modalOpen={modalOpen} handleToggle={handleToggle}>
        <p>생성자가 같지 않아 수정이 불가합니다</p>
      </Modal>
    </>
  );
};

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;

export default ToDoItem;
