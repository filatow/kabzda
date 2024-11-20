import React from 'react';

type StarProps = {
  selected: boolean
  value: RatingValue
  setValue: (value: RatingValue) => void
}

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
  value: RatingValue
  onClick: (value: RatingValue) => void
}

export function Rating(props: RatingProps) {
  return (
    <div>
      <Star selected={props.value > 0} setValue={props.onClick} value={1}/>
      <Star selected={props.value > 1} setValue={props.onClick} value={2}/>
      <Star selected={props.value > 2} setValue={props.onClick} value={3}/>
      <Star selected={props.value > 3} setValue={props.onClick} value={4}/>
      <Star selected={props.value > 4} setValue={props.onClick} value={5}/>
    </div>
  );
}

function Star(props: StarProps) {
  const styles = {
    cursor: 'pointer'
  }

  return (
    <span onClick={() => props.setValue(props.value)} style={styles}>
      {props.selected ? <b> star </b> : ' star '}
    </span>
  )
}
