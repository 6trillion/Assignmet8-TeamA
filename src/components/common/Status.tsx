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

const StatusWrapper = styled.div`
  margin-top: 3px;
`;

const StatusItems = styled.div`
`;

const StatusItem = styled.div`
  margin-bottom: 5px;
`;

const Radio = styled.input`
  + label{
    padding: 3px 8px;
    font-size: 0.8rem;
  }

  &:checked + label{
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 0.8rem;
    background-color: ${(props) =>
    props.value === 'To Do'
      ? '#9895E0'
      : props.value === 'In Progress'
      ? '#4A94F8'
      : '#56C991'};
  }
`;

export default Status;
