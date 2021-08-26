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

// import React, { useCallback, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import FilterDropdown from './FilterDropdown';

// const FilterInput = ({ setUserData, copiedData, setCurrentPage }) => {
//   const [dropdownItem, setDropdownItem] = useState('name');
//   const [dropdownName, setDropdownName] = useState('이름');
//   const [inputValue, setInputValue] = useState('');

//   const onInputValue = useCallback((e) => {
//     const word = e.target.value;
//     setInputValue(word);
//   }, []);

//   useEffect(() => {
//     if (inputValue !== '') {
//       const valueLen = inputValue.length;
//       const filterdData = copiedData.filter(
//         (data) =>
//           String(data[dropdownItem]).substring(0, valueLen) === inputValue,
//       );

//       setUserData(filterdData);
//       setCurrentPage(1);
//     } else {
//       setUserData(copiedData);
//       setCurrentPage(1);
//     }
//   }, [inputValue, setUserData, copiedData, dropdownItem, setCurrentPage]);

//   return (
//     <SearchBoxContainer>
//       <FilterDropdown
//         dropdownName={dropdownName}
//         setDropdownItem={setDropdownItem}
//         setDropdownName={setDropdownName}
//         setInputValue={setInputValue}
//       />
//       <SearchInput
//         placeholder={`${dropdownName}을 입력해주세요.`}
//         onChange={onInputValue}
//         type="text"
//         value={inputValue}
//       />
//       <SearchButton>
//         <p>검색</p>
//       </SearchButton>
//     </SearchBoxContainer>
//   );
// };

// export default FilterInput;

// const SearchBoxContainer = styled.div`
//   margin: 20px auto;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid black;
//   border-left: none;
//   font-size: 14px;
//   border-radius: 6px;
// `;

// const SearchInput = styled.input`
//   width: calc(100% - 48px);
//   min-width: calc(300px - 48px);
//   padding: 0 12px;
//   border-radius: 6px 0 0 6px;
//   border: none;
//   :focus {
//     outline: 0;
//   }
//   background-color: #fff;
// `;

// const SearchButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   float: right;
//   top: unset;
//   width: 48px;
//   padding: 15px 0;
//   border-radius: 0 6px 6px 0;
//   cursor: pointer;
// `;
