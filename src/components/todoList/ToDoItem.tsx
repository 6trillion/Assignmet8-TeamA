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
import { ReactComponent as CheckSvg} from 'components/assets/svg/check.svg';
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
        <ImpWrap>
          <StarTag>
            <Stars
              isCreate={isEdit}
              starIndex={starIndex}
              setStarIndex={setStarIndex}
            />
          </StarTag>

          <ButtonWrap>
              {isEdit ? (
              <CheckSvg onClick={handleEdit} />
            ) : (
              <EditSvg onClick={handleEdit} />
            )}
            <DeleteSvg onClick={() => handleRemove(todo.id)} />
          </ButtonWrap>
        </ImpWrap>

        <TodoName
          ref={taskNameRef}
          contentEditable={isEdit}
          suppressContentEditableWarning={true}
        >
          {todo.taskName}
        </TodoName>

        <TodoStatus>
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
          <DateStyle>createAt {String(todo.createAt).split('T')[0]}</DateStyle>
          <TagWriter>{todo.writer}</TagWriter>
        </WriterWrap>

      </TodoItemWrapper>
      <Modal modalOpen={modalOpen} handleToggle={handleToggle}>
        <p>생성자가 같지 않아 수정이 불가합니다</p>
      </Modal>
    </>
  );
});

const TodoItemWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  padding: 25px 15px;
  border-radius: 10px;
  background-color: #FFFFFF;
  cursor: pointer;
`;

const ImpWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const StarTag = styled.span`
  margin-right: 5px;
  padding: 2px;
`;

const TodoName = styled.div`
  margin-bottom: 8px;
  padding: 2px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  svg+svg{
    margin-left: 5px;
    margin-right: 3px;
  }
  svg{
    fill: #AAAAAA;
    &:hover{
      fill: #4B5489;
    }
  }
`;

const TodoStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2px;
  margin-bottom: 35px;
`;


const WriterWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  margin-bottom: 25px;
  font-size: 0.8rem;
  color: #333333;
`;

const DateStyle = styled.span`
  margin-right: 5px;
  padding: 2px;
  border-radius: 5px;
  font-size: 0.8rem;
  color: #777777;
`;

const TagWriter = styled.span`
  margin-right: 35px;
  padding: 2px;
  font-size: 0.8rem;
  border-radius: 5px;
`;

const StatusRes = styled.span<{ status: string }>`
  margin-right: 5px;
  margin-bottom: 4px;
  padding: 5px 9px;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.status === 'To Do'
      ? '#9895E0'
      : props.status === 'In Progress'
      ? '#4A94F8'
      : '#56C991'};
`;

export default ToDoItem;
