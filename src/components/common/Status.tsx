import React, { useState } from 'react';
import styled from 'styled-components';
import { tagStates } from '../../utils/constants';

interface StatusProps {
  status: string;
  setStatus: (status: string) => void;
}

const Status = (props: StatusProps) => {
  const { status, setStatus } = props;
  const [updateStatus, setUpdateStatus] = useState(status);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdateStatus(value);
    setStatus(value);
  };
  return (
    <StatusWrapper>
      <StatusItems>
        {tagStates.map((item, index) => (
          <StatusItem key={index}>
            <Radio
              type="radio"
              name="status"
              value={item}
              checked={item === updateStatus}
              onChange={handleChange}
            />
            <label>{item}</label>
          </StatusItem>
        ))}
      </StatusItems>
    </StatusWrapper>
  );
};

const StatusWrapper = styled.div``;

const StatusItems = styled.div`

`;

const StatusItem = styled.div`
`;

const Radio = styled.input``;

export default Status;
