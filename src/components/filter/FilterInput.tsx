import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown';

const FilterInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownName, setDropdownName] = useState('생성일');
  const [dropdownItem, setDropdownItem] = useState('name');

  const onInputValue = useCallback((e) => {
    const word = e.target.value;
    setInputValue(word);
  }, []);

  return (
    <SearchBoxContainer>
      <FilterDropdown
        dropdownName={dropdownName}
        setDropdownName={setDropdownName}
        setInputValue={setInputValue}
        setDropdownItem={setDropdownItem}
      />
      <SearchInput
        placeholder={
          dropdownName === '생성일'
            ? `${dropdownName}를 입력해주세요. 예) 2021-08-26 `
            : `${dropdownName}를 입력해주세요`
        }
        onChange={onInputValue}
        type="text"
        value={inputValue}
      />
    </SearchBoxContainer>
  );
};

export default FilterInput;

const SearchBoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 30%;
  padding: 0 12px;
  border: 1px solid black;
  
  :focus {
    outline: 0;
  }

  background-color: #fff;
`;
