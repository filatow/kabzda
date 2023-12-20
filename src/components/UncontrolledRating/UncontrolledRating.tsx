import React, {useState} from 'react';

type UncontrolledRatingPropsType = {}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0} onClick={() => setValue(1)}/>
            <Star selected={value > 1} onClick={() => setValue(2)}/>
            <Star selected={value > 2} onClick={() => setValue(3)}/>
            <Star selected={value > 3} onClick={() => setValue(4)}/>
            <Star selected={value > 4} onClick={() => setValue(5)}/>
        </div>
    );
}

function Star(props: StarPropsType) {
    const styles = {
        cursor: 'pointer'
    }

    return (
        <span onClick={props.onClick} style={styles}>
           {props.selected ? <b> star </b> : ' star '}
        </span>
    )
}

export default UncontrolledRating;