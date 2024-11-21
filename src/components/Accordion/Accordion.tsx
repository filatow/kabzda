import React from 'react';

type AccordionProps = {
  titleValue: string
  collapsed: boolean
  onToggle: (value: boolean) => void
  items: AccordionItem[]
  onItemClick: () => void
}

type AccordionItem = {
  id: number
  title: string
}

type AccordionTitleProps = {
  title: string
  onClick: () => void
}

export function Accordion(props: AccordionProps) {
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => props.onToggle(!props.collapsed)}
      />
      {!props.collapsed && <AccordionBody onClick={props.onItemClick} items={props.items}/>}
    </div>
  );
}

function AccordionTitle(props: AccordionTitleProps) {
  const styles = {
    cursor: 'pointer',
    color: 'darkblue'
  }

  return (
    <h3
      onClick={props.onClick}
      style={styles}
    >
      {props.title}
    </h3>
  );
}

type AccordionBodyProps = {
  items: AccordionItem[]
  onClick: (value: string) => void
}

function AccordionBody(props: AccordionBodyProps) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id} onClick={() => props.onClick(item.title)}>
          {item.title}
        </li>
      ))}
    </ul>
  )
}
