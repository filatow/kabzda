import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    onToggle: () => void
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed(!collapsed);
    const styles = {
        margin: '30px auto',
    }

    return (
        <div style={styles}>
            <AccordionTitle
                title={props.titleValue}
                onToggle={onToggle}
            />
            {collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    const styles = {
        cursor: 'pointer',
        color: 'darkblue'
    }

    return (
        <h3 onClick={props.onToggle} style={styles}>{props.title}</h3>
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
