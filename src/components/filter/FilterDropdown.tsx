import React, { FC, useCallback, useState } from 'react';
import { FILTER_DROPDOWN_ITEMS } from 'utils/constants';
import styled from 'styled-components';

interface FilterDropdownProps {
  dropdownName: string;
  setDropdownName: (e: string) => void;
  setInputValue: (e: string) => void;
  setDropdownItem: (e: string) => void;
}

const FilterDropdown: FC<FilterDropdownProps> = ({
  dropdownName,
  setDropdownName,
  setInputValue,
  setDropdownItem,
}) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const onDropdownToggle = useCallback(() => {
    setDropdownToggle((prev) => !prev);
  }, []);

  const onSelectDropdownItem = useCallback(
    (data) => {
      const { value, title } = data;
      setDropdownItem(value);
      setDropdownName(title);
      setInputValue('');
    },
    [setDropdownItem, setDropdownName, setInputValue],
  );

  return (
    <DropdownContainer
      onClick={onDropdownToggle}
      onMouseLeave={() => setDropdownToggle(false)}
    >
      <DropdownBody>{dropdownName}</DropdownBody>
      <DropdownMenu isActive={dropdownToggle}>
        {FILTER_DROPDOWN_ITEMS.map((data: any) => (
          <DropdownItem
            key={data.id}
            onClick={() => onSelectDropdownItem(data)}
          >
            <p>{data.title}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default FilterDropdown;

const DropdownContainer = styled.div`
  color: black;
  border-radius: 6px 0 0 6px;
  background-color: white;
`;

const DropdownMenu = styled.ul<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  position: absolute;
  background-color: white;
  width: 150px;
  color: black;
  border: 1px solid black;
`;

const DropdownBody = styled.p`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
