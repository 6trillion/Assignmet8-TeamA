import React, { useState } from 'react';
import { Status } from '../../utils/constants';
import { ReactComponent as StarSvg } from './star.svg';
import Modal from '../../component/modal/Modal';

interface TodoCreateProps {
  id?: number;
  taskName?: string;
  status?: Status;
  priority?: number;
  createAt?: string;
  updateAt?: string;
}

// 제목,중요도 입력 => 제목 input?, 중요도는 inpu? or selectBox?
// 생성자, 생성일 자동으로 =>date()?
// 별점

// 1. +버튼을 누르면 모달이 텨나온다.
// 2. 제목, 중요도, default = (상태, 날짜)
// 3. 확인을 누르면 로컬스토리지에 저장, 취소를 누르면 날라감

const ToDoCreate = () => {
  const [stars, setStars] = useState([false, false, false, false, false]);
  const [starIndex, setStarIndex] = useState(0);
  const [open, setOpen] = useState(true);
  const handleToggle = () => {};

  const onCreate = (e: any) => {
    setOpen((open) => !open);
  };

  const onClick = (e: any, index: number) => {
    console.log(e);
    console.log(typeof e);
    console.log(e.target.value);
    const newStars = stars.map((_, i): boolean => i < index);

    setStars(newStars);
    setStarIndex(index);
    console.log(stars);
  };

  return (
    <>
      <button onClick={onCreate}>+</button>
      <Modal open={open} handleToggle={handleToggle}>
        <form>
          <label htmlFor="taskName">할 일</label>
          <input type="text" placeholder="할 일을 적어주세요" name="taskName" />
          <label htmlFor="priority">중요도</label>
          <StarSvg
            onClick={(e) => {
              onClick(e, 1);
            }}
            name="priority"
            fill={stars[0] ? 'gold' : 'lightgray'}
          />
          <StarSvg
            onClick={(e) => {
              onClick(e, 2);
            }}
            name="priority"
            fill={stars[1] ? 'gold' : 'lightgray'}
          />
          <StarSvg
            onClick={(e) => {
              onClick(e, 3);
            }}
            name="priority"
            fill={stars[2] ? 'gold' : 'lightgray'}
          />
          <StarSvg
            onClick={(e) => {
              onClick(e, 4);
            }}
            name="priority"
            fill={stars[3] ? 'gold' : 'lightgray'}
          />
          <StarSvg
            onClick={(e) => {
              onClick(e, 5);
            }}
            name="priority"
            fill={stars[4] ? 'gold' : 'lightgray'}
          />
        </form>
      </Modal>
    </>
  );
};

// 다 짜고 나서 리팩토링할 부분
// 1. 이벤트 버블링
// 2. map으로 돌려서 렌더링

export default ToDoCreate;
