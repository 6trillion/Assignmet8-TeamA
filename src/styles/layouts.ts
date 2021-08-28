import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background : 
    linear-gradient(
      217deg, 
      rgba(130, 157, 200, 0.8), 
      rgba(228, 228, 241, 0.8) 
    ),
    linear-gradient(
      127deg, 
      rgba(228, 228, 241, 0.8), 
      rgba(171, 184, 213, 0.8) 

    ),
    linear-gradient(
      336deg, 
      rgba(255, 255, 255, 0.8), 
      rgba(130, 157, 200, 0.8) 
    );
  `,

  Header: styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    background-color: rgba(255,255,255,0.3);
    border-radius: 4px;
    z-index: 10;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    span {
      white-space: nowrap;
    }
    `,

  Body: styled.div`
    width: 100%;
    height: 100%;
    margin-top: 80px;

  `,

  Main: styled.main`
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `,

  Section: styled.section`
    width: 32%;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.2);
  `,
};
