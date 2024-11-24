import React, {useReducer} from 'react';
import {Action, reducer} from './reducer';

type UncontrolledAccordionProps = {
  titleValue: string
}

type UncontrolledAccordionTitleProps = {
  title: string
  onToggle: () => void
}


function UncontrolledAccordion(props: UncontrolledAccordionProps) {
  const [state, dispatch] = useReducer(reducer, {collapsed: false})

  const onToggle = () => dispatch({type: Action.TOGGLE_COLLAPSED});
  const styles = {
    margin: '30px auto',
  }

  return (
    <div style={styles}>
      <AccordionTitle
        title={props.titleValue}
        onToggle={onToggle}
      />
      {state.collapsed && <AccordionBody/>}
    </div>
  );
}

function AccordionTitle(props: UncontrolledAccordionTitleProps) {
  const styles = {
    cursor: 'pointer',
    color: 'darkblue'
  }

  return (
    <h3 onClick={() => props.onToggle()} style={styles}>{props.title}</h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default UncontrolledAccordion;
