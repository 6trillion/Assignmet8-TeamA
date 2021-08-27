import React, { useState } from 'react';
import { initStar } from 'utils/constants';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import styled from 'styled-components';

interface StarsProps {
  starIndex?: number;
  setStarIndex: (index: number) => void;
  isCreate?: boolean;
}
const Stars = (props: StarsProps) => {
  const starArr = (index: number) => initStar.map((_, i): boolean => i < index);
  const { starIndex, setStarIndex, isCreate } = props;
  const [stars, setStars] = useState(starArr(starIndex!));

  const onClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    index: number,
  ) => {
    const newStars = starArr(index!);
    setStars(newStars);
    setStarIndex(index);
  };

  const createStar = () => {
    return (
      <>
        <StarLabel htmlFor="importance">중요도</StarLabel>
        {stars.map((item, index) => (
          <StarSvg
            key={index}
            onClick={(e) => {
              onClick(e, index + 1);
            }}
            name="importance"
            fill={item ? 'gold' : 'lightgray'}
          />
        ))}
      </>
    );
  };

  const renderingStar = () => {
    return starArr(starIndex!).map((item: boolean, index: number) =>
      item ? <StarSvg key={index} fill="gold" /> : '',
    );
  };

  return <>{isCreate ? createStar() : renderingStar()}</>;
};
const StarLabel = styled.label`
  padding: 10px;
`;

export default Stars;
