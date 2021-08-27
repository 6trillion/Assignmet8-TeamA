import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ModalProps {
  modalOpen: boolean;
  handleToggle: () => void;
  children?: JSX.Element;
}

const Modal = (props: ModalProps) => {
  const { modalOpen, children, handleToggle } = props;

  return (
    <>
      {modalOpen && (
        <ModalWrapper onClick={() => handleToggle()}>
          <div>
            {children}
            <button onClick={handleToggle}>확인</button>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 50px 30px;
    width: 800px;
  }

  button {
    margin-top: 20px;
  }
`;
