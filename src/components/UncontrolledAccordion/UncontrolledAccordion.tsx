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
    return (
        <>
            <h3>{props.title}</h3>
            <button onClick={props.onToggle}>TOGGLE</button>
        </>
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
