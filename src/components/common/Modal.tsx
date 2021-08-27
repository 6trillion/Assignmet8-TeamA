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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.3);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    height: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 2001;
    background: #fff;
    opacity: 0.8;
  }

  button {
    margin-top: 20px;
  }
`;
