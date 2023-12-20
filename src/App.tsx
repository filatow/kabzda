import React from 'react';
import './App.css';
import Rating from "./components/Raiting/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className={'App'}>
            <PageTitle title={"This is App component"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <hr/>
            Article 2
            <UncontrolledRating />
            <UncontrolledAccordion titleValue={"Users"}/>
            <hr/>
            <OnOff on={true} />
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;
