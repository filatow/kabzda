import React from 'react';
import UncontrolledRating from './UncontrolledRating';

export default {
  title: 'Uncontrolled Rating',
  component: UncontrolledRating,
}

export const FullFeatured = () => <UncontrolledRating/>
export const WithDefaultValue = () => <UncontrolledRating defaultValue={3}/>
