import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { initStar } from 'utils/constants';

interface StarsProps {
  starIndex?: number;
  setStarIndex: (index: any) => void;
}
const Stars = (props: StarsProps) => {
  const [stars, setStars] = useState(initStar);
  const { setStarIndex, starIndex } = props;

  const onClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    index: number,
  ) => {
    const newStars = stars.map((_, i): boolean => i < index);

    setStars(newStars);
    setStarIndex(index);
  };
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
const StarLabel = styled.label`
  padding: 10px;
`;

export default Stars;
