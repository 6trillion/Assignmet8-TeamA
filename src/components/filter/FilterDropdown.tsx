import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { SEARCH_DROPDOWN_ITEMS } from '../../utils/constants';

interface FilterDropdownProps {
  dropdownName: string;
  setDropdownName: (e: any) => void;
  setInputValue: (e: any) => void;
  setDropdownItem: (e: any) => void;
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
      // onMouseLeave={() => setDropdownToggle(false)}
    >
      <DropdownBody>{dropdownName}</DropdownBody>
      <DropdownMenu isActive={dropdownToggle}>
        {SEARCH_DROPDOWN_ITEMS.map((data: any) => (
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

// import React, { useCallback, useState } from 'react';
// import styled from 'styled-components';
// import { SEARCH_DROPDOWN_ITEMS } from '../../utils/constants';

// const SearchDropdown = ({
//   dropdownName,
//   setDropdownItem,
//   setDropdownName,
//   setInputValue,
// }) => {
//   const [dropdownToggle, setDropdownToggle] = useState(false);

//   const onDropdownToggle = useCallback(() => {
//     setDropdownToggle((prev) => !prev);
//   }, []);

//   const onSelectDropdownItem = useCallback(
//     (data) => {
//       const { value, title } = data;
//       setDropdownItem(value);
//       setDropdownName(title);
//       setInputValue('');
//     },
//     [setDropdownItem, setDropdownName, setInputValue],
//   );

//   return (
//     <DropdownContainer
//       onClick={onDropdownToggle}
//       onMouseLeave={() => setDropdownToggle(false)}
//     >
//       <DropdownBody>{dropdownName}</DropdownBody>
//       <DropdownMenu isActive={dropdownToggle}>
//         {SEARCH_DROPDOWN_ITEMS.map((data) => (
//           <DropdownItem
//             key={data.id}
//             onClick={() => onSelectDropdownItem(data)}
//           >
//             <p>{data.title}</p>
//           </DropdownItem>
//         ))}
//       </DropdownMenu>
//     </DropdownContainer>
//   );
// };

// export default SearchDropdown;

// const DropdownContainer = styled.div`
//   color: white;
//   padding: 6px 0;
//   border-radius: 6px 0 0 6px;
// `;

// const DropdownBody = styled.p`
//   width: 150px;
//   height: 36px;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   cursor: pointer;
// `;

// const DropdownMenu = styled.ul<{ isActive: boolean }>`
//   display: ${(props) => (props.isActive ? `block` : `none`)};
//   position: absolute;
//   background-color: white;
//   width: 150px;
//   color: white;
//   border-radius: 0 0 6px 6px;
// `;

// const DropdownItem = styled.li`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 0;
//   cursor: pointer;
//   border-top: 1px solid white;
//   &:hover {
//     border-left: 1px solid white;
//     border-right: 1px solid white;
//   }
// `;
