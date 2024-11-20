import {action} from '@storybook/addon-actions';
import {Rating, RatingValue} from './Rating';
import React, {useState} from 'react';

export default {
  title: 'Rating',
  component: Rating,
};

const onClickHandler = action('onClick');

export const FullFeatured = () => {
  const [value, setValue] = useState<RatingValue>(0);

  return <Rating value={value} onClick={setValue}/>
}
export const Empty = () => <Rating value={0} onClick={onClickHandler}/>
export const OneStar = () => <Rating value={1} onClick={onClickHandler}/>
export const TwoStars = () => <Rating value={2} onClick={onClickHandler}/>
export const ThreeStars = () => <Rating value={3} onClick={onClickHandler}/>
export const FourStars = () => <Rating value={4} onClick={onClickHandler}/>
export const FiveStars = () => <Rating value={5} onClick={onClickHandler}/>

