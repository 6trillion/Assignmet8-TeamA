import React from 'react';
import { tagStates } from 'utils/constants';
import styled from 'styled-components';

interface StatusProps {
  updateStatus: string;
  setUpdateStatus: (status: string) => void;
}

const Status = (props: StatusProps) => {
  const { updateStatus, setUpdateStatus } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdateStatus(value);
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

const StatusItems = styled.div``;

const StatusItem = styled.div``;

const Radio = styled.input``;

export default Status;
