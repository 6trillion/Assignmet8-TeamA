import React,{useRef, useState, useEffect} from 'react';
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
  tagName:string;
}

const ToDoItem = (props: ToDoItemProps) => {
  const dispatch = useTodosDispatch();
  const { todo, tagName } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState('');
  const [starIndex, setStarIndex] = useState(initStar);


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
      dispatch({type: 'UPDATE',
      updateTodo: updateTodo,});
    }
    if (updateText === "") {
      updateTasKName.innerText = todo.taskName;
    }
    setIsEdit((prev) => !prev);
  };

  return (
    <TodoItemWrapper>
      <TodoName ref={tasKNameRef} contentEditable={isEdit} suppressContentEditableWarning={true}>{todo.taskName}</TodoName>
      <ImpWrap>
      <span>우선순위 :</span> <StarTag>
        {newStars(todo.importance).map((item: boolean, index: number) =>
          item ? <StarSvg key={index} fill="gold" /> : '',
        )}</StarTag>
      </ImpWrap>
      
      <WriterWrap>
      <span>작성자 : </span><TagWriter>{todo.writer}</TagWriter>
      </WriterWrap>
      
      <TodoStatus>
      <span>진행상황 : </span>{isEdit ? <Status status={todo.status} setStatus={setStatus}/> : 
      <StatusRes status={todo.status}>{todo.status}</StatusRes>}
      </TodoStatus>
      {isEdit ? <p onClick={handleEdit}>저장</p> : <EditSvg onClick={handleEdit} />}
      <DeleteSvg onClick={() => handleRemove(todo.id)} />
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  margin-bottom: 5px;
  border: 1px solid black;
  border-radius:4px;
  background-color:lightgray;
`;

const TodoName = styled.div`
display:flex;
justify-content:center;
`

const WriterWrap = styled.div`
display: flex;
justify-content:space-between;
`

const TagWriter = styled.span`
margin-right:5px;
margin-bottom:4px;
padding:2px;
background-color:aqua;
border-radius:5px;`

const ImpWrap = styled.div`
display: flex;
justify-content:space-between;
`
const StarTag = styled.span`
margin-right:5px;
margin-bottom:4px;
padding:2px;`

const TodoStatus = styled.div`
display: flex;
justify-content:space-between;
`
const StatusRes = styled.span<{status:string}>`
margin-right:5px;
margin-bottom:4px;
padding:2px;
background-color:${props=>props.status==="To Do"?'yellow':props.status==="In Progress"?"green":"red"}
`


export default ToDoItem;
