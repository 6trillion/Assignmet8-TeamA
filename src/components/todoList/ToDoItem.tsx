import React,{useRef,useState} from 'react';
import styled from 'styled-components';
import { useTodosDispatch, Todo } from 'contexts/Todo/TodoStore';

import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';

interface ToDoItemProps {
  todo: Todo;
  tagName:string;
}

const ToDoItem = (props: ToDoItemProps) => {
  const dispatch = useTodosDispatch();
  const { todo,tagName  } = props;
  const tasKNameRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleRemove = (id: number) => {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  };
  const handleEdit = () => {
    const updateTasKName = tasKNameRef.current! as HTMLElement;
    const updateText = updateTasKName.innerText;
    if (isEdit && updateText !== "") {
      const updateTodo: Todo = {
        id: todo.id,
        taskName: updateText,
        status: tagName,
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
      <div ref={tasKNameRef}>{todo.taskName}</div>
      <p>
        {/* {todo.importance.map((item: boolean, index: number) =>
          item ? <StarSvg key={index} fill="gold" /> : '',
        )} */}
        {todo.importance}
      </p>
      <p>{todo.writer}</p>
      <p>{todo.status}</p>
      <EditSvg onClick={handleEdit} />
      <DeleteSvg onClick={() => handleRemove(todo.id)} />
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 5px;
`;

export default ToDoItem;
