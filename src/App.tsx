import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValue} from './components/Raiting/Rating';
import {Accordion} from './components/Accordion/Accordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

type PageTitlePropsType = {
  title: string
}

const cities = [
  {title: 'Москва', id: 1},
  {title: 'Киев', id: 2},
  {title: 'Минск', id: 3},
]


function App() {
  const [controlledRatingValue, setControlledRatingValue] = useState<RatingValue>(0);
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
        titleValue={'Cities'}
        items={cities}
        collapsed={controlledAccordionCollapsed}
        onToggle={setControlledAccordionCollapsed}
        onItemClick={() => {}}
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
