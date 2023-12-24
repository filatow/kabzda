import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    toggle: (value: boolean) => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClick={() => props.toggle(!props.collapsed)}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
