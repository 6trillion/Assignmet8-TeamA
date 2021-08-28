import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DATE_FORM, TIME_FORM } from 'utils/constants';

const Clock = () => {
  const [date] = useState(new Date().toLocaleDateString('kr-KR', DATE_FORM));
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('kr-KR', TIME_FORM),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('kr-KR', TIME_FORM));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <ClockWrapper>
        {date} {time}
      </ClockWrapper>
    </>
  );
};

const ClockWrapper = styled.span`
  padding: 25px;
`;

export default React.memo(Clock);
