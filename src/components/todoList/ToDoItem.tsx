import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useCallback,
} from 'react';
import Stars from 'components/common/Stars';
import Status from 'components/common/Status';
import Modal from 'components/common/Modal';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';
import { ITodo } from 'types/ITodo';
import { useTodosDispatch } from 'contexts/Todo/TodoStore';
import styled from 'styled-components';

interface ToDoItemProps {
  todo: ITodo;
  tagName: string;
  userName: string;
  setDragTodo: (e: ITodo | null) => void;
}

const ToDoItem = forwardRef<HTMLInputElement, ToDoItemProps>((props, ref) => {
  const dispatch = useTodosDispatch();
  const { todo, userName, setDragTodo } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(todo.status);
  const [starIndex, setStarIndex] = useState(todo.importance);
  const [modalOpen, setModalOpen] = useState(false);

  const taskNameRef = useRef(null);
  useEffect(() => {
    const updateTasKName = taskNameRef.current! as HTMLElement;
    if (updateTasKName) updateTasKName.focus();
  }, [isEdit]);

  const handleRemove = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?'))
      return dispatch({
        type: 'REMOVE',
        id: id,
      });
  };

  const handleToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleEdit = () => {
    if (userName !== todo.writer) return handleToggle();
    const updateTasKName = taskNameRef.current! as HTMLElement;
    const updateText = updateTasKName.innerText;

    if (isEdit && updateText !== '') {
      const updateTodo: ITodo = {
        id: todo.id,
        taskName: updateText,
        status: updateStatus,
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

  const handleDragStart = useCallback(
    (todo) => {
      setDragTodo(todo);
    },
    [setDragTodo],
  );

  const handleDragEnd = useCallback(() => {
    setDragTodo(null);
  }, [setDragTodo]);

  return (
    <>
      <TodoItemWrapper
        draggable
        ref={ref}
        onDragStart={() => handleDragStart(todo)}
        onDragEnd={handleDragEnd}
      >
        <TodoName
          ref={taskNameRef}
          contentEditable={isEdit}
          suppressContentEditableWarning={true}
        >
          {todo.taskName}
        </TodoName>
        <ImpWrap>
          <span>우선순위 :</span>{' '}
          <StarTag>
            <Stars
              isCreate={isEdit}
              starIndex={starIndex}
              setStarIndex={setStarIndex}
            />
          </StarTag>
        </ImpWrap>

        <WriterWrap>
          <span>작성자 : </span>
          <TagWriter>{todo.writer}</TagWriter>
        </WriterWrap>

        <TodoStatus>
          <span>진행상황 : </span>
          {isEdit ? (
            <Status
              updateStatus={updateStatus}
              setUpdateStatus={setUpdateStatus}
            />
          ) : (
            <StatusRes status={todo.status}>{todo.status}</StatusRes>
          )}
        </TodoStatus>

        <WriterWrap>
          <span>날짜 : </span>
          <DateStyle>{String(todo.createAt).split('T')[0]}</DateStyle>
        </WriterWrap>

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
});

const TodoItemWrapper = styled.div`
  margin-bottom: 5px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: lightgray;
  cursor: move;
  span {
    margin-left: 4px;
  }
`;

const TodoName = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const WriterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagWriter = styled.span`
  margin-right: 5px;
  margin-bottom: 4px;
  padding: 2px;
  background-color: aqua;
  border-radius: 5px;
`;

const DateStyle = styled.span`
  margin-right: 5px;
  margin-bottom: 4px;
  padding: 2px;
  border-radius: 5px;
`;

const ImpWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StarTag = styled.span`
  margin-right: 5px;
  margin-bottom: 4px;
  padding: 2px;
`;

const TodoStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StatusRes = styled.span<{ status: string }>`
  margin-right: 5px;
  margin-bottom: 4px;
  padding: 2px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.status === 'To Do'
      ? 'yellow'
      : props.status === 'In Progress'
      ? 'green'
      : 'red'};
`;

export default ToDoItem;
