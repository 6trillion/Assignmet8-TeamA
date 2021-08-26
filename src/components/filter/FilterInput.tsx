import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown';
import { useTodosState, Todo, useTodosDispatch } from 'contexts/Todo/TodoStore';
import { getTodoStorage } from 'utils/localStorage';


const FilterInput = () => {
  const todos = useTodosState();
  const dispatch = useTodosDispatch();
  const [inputValue, setInputValue] = useState('');
  const [dropdownName, setDropdownName] = useState('생성일');
  const [dropdownItem, setDropdownItem] = useState('createAt');
  const [copiedTodos, setCopiedTodos] = useState<Todo[]>();
  const [originalTodos, setOriginalTodos] = useState<Todo[]>();

  useEffect(()=>{
    setCopiedTodos(getTodoStorage());
    setOriginalTodos(getTodoStorage());
  },[dropdownName])

  useEffect(()=>{
    if (copiedTodos && inputValue !== "") {
      const valueLen = inputValue.length;
      const filterdData = copiedTodos.filter(
        (data:any) => String(data[dropdownItem]).substring(0, valueLen) === inputValue,
      );
      dispatch({
        type: 'SAVE',
        saveTodo:filterdData
      });
    } else if (originalTodos){
      dispatch({
        type: 'SAVE',
        saveTodo:originalTodos
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
