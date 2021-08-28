import React, { FC, useCallback, useState } from 'react';
import { FILTER_DROPDOWN_ITEMS } from 'utils/constants';
import { ReactComponent as ArrowSvg} from 'components/assets/svg/arrow.svg';
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
      <DropdownBody>{dropdownName}<ArrowSvg/></DropdownBody>
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
  height: 45px;
  border-radius: 10px 0 0 10px;
  background-color: white;
`;

const DropdownMenu = styled.ul<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  position: absolute;
  background-color: white;
  width: 150px;
  color: black;
`;

const DropdownBody = styled.p`
  width: 150px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  color: #4B5489;
`;

const DropdownItem = styled.li`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
