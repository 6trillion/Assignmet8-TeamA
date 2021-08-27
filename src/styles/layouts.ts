import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    display: flex;
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    padding-top: 60px;
    flex-direction: column;
  `,

  Filter: styled.div`
    width: 100%;
    margin-bottom: 30px;
  `,

  Header: styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    margin-bottom: 30px;
    background-color: mediumaquamarine;
    border-radius: 4px;
    span {
      white-space: nowrap;
      padding: 10px;
    }
  `,

  Main: styled.main`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  Section: styled.section`
    width: 30%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: ghostwhite;
  `,
};
