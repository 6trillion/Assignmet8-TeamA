import React from 'react';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';

interface StarsProps {
  stars: boolean[];

  setStars: (stars: boolean[]) => void;
  setStarIndex: (index: number) => void;
}
const Stars = (props: StarsProps) => {
  const { stars, setStars, setStarIndex } = props;
  const onClick = (e: any, index: number) => {
    const newStars = stars.map((_, i): boolean => i < index);

    setStars(newStars);
    setStarIndex(index);
  };
  return (
    <>
      <label htmlFor="importance">중요도</label>
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

export default Stars;
