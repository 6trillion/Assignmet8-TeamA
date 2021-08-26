import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  `,

  Filter: styled.div`
    width: 100%;
    margin-bottom: 30px;
  `,

  Header: styled.header`
    width: 100%;
    // 임시 height
    height: 10vh;
    border: 1px solid black;
    margin-bottom: 30px;
  `,

  Main: styled.main`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  Section: styled.section`
    width: 30%;
    // 스크롤 위한 임시 height
    height: 200vh;
    padding: 10px;
    border: 1px solid black;
  `,
};
