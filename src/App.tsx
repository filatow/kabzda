import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Raiting/Rating';
import Accordion from './components/Accordion/Accordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

type PageTitlePropsType = {
    title: string
}

function App() {
    const [controlledRatingValue, setControlledRatingValue] = useState<RatingValueType>(0);
    const [controlledAccordionCollapsed, setControlledAccordionCollapsed] = useState(false);
    const [controlledOnOffIsOn, setControlledOnOffIsOn] = useState(true);
    const [UncontrolledOnOffState, setUncontrolledOnOffState] = useState(false);

    return (
        <div className={'App'}>
            <PageTitle title={'This is App component'}/>
            Article 1
            <Rating
                value={controlledRatingValue}
                onClick={setControlledRatingValue}
            />
            <Accordion
                titleValue={'Menu'}
                collapsed={controlledAccordionCollapsed}
                onToggle={setControlledAccordionCollapsed}
            />
            <OnOff
                isOn={controlledOnOffIsOn}
                onToggle={setControlledOnOffIsOn}
            />
            <hr/>
            Article 2
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledOnOff onChange={setUncontrolledOnOffState}/>
            <p>UncontrolledOnOff is on: {String(UncontrolledOnOffState)}</p>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;
