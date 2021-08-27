import React, { useCallback, useState, useEffect } from 'react';
import { getTodoStorage } from 'utils/localStorage';
import FilterDropdown from 'components/filter/FilterDropdown';
import { useTodosDispatch } from 'contexts/Todo/TodoStore';
import { ITodo } from 'types/ITodo';
import styled from 'styled-components';

const FilterInput = () => {
  const getTodos = getTodoStorage();
  const dispatch = useTodosDispatch();
  const [inputValue, setInputValue] = useState('');
  const [dropdownName, setDropdownName] = useState('생성일');
  const [dropdownItem, setDropdownItem] = useState('createAt');
  const [copiedTodos] = useState<ITodo[] | null>(getTodos);
  const [originalTodos] = useState<ITodo[]>(getTodos);

  useEffect(() => {
    const valueLen = inputValue.length;
    if (copiedTodos) {
      dispatch({
        type: 'FILTER',
        copiedTodos: copiedTodos,
        length: valueLen,
        value: inputValue,
        Item: dropdownItem,
      });
    }
  }, [inputValue, copiedTodos, dropdownItem, originalTodos, dispatch]);

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
