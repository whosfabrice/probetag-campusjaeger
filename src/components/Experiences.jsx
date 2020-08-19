import React from 'react';
import { Card } from './Card';
import { Heading } from './Heading';
import { AddExperience } from '../components/AddExperience';


function Experiences( props ){

    return (
        <Card>
            <Heading text="Erfahrung"/>
            <a onClick={props.addExperience}>+ Erfahrung hinufügen</a>
            {props.experiences.map( (experience, index ) => {

                return <AddExperience {...experience} key={index}/>;
            })}
        </Card>
    );
}

export { Experiences };
