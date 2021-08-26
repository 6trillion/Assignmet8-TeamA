import React,{useState} from 'react';
import { ReactComponent as StarSvg } from 'components/assets/svg/star.svg';
import { initStar } from 'utils/constants';

interface StarsProps {
  starIndex? : number;
  setStarIndex: (index: any) => void;
}
const Stars = (props: StarsProps) => {
  const { setStarIndex , starIndex } = props;
  const [stars, setStars] = useState(initStar);
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
      <label htmlFor="importance">중요도</label>
      {stars.map((item, index) => (
        <StarSvg
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
