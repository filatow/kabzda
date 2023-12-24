import React, {useState} from 'react';

type UncontrolledRatingPropsType = {}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    );
}

function Star(props: StarPropsType) {
    const styles = {
        cursor: 'pointer'
    }

    return (
        <span onClick={() => props.setValue()} style={styles}>
           {props.selected ? <b> star </b> : ' star '}
        </span>
    )
}

export default UncontrolledRating;