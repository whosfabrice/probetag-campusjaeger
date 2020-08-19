import React from 'react';
import { Heading } from './Heading';
import { AddEducation } from '../components/AddEducation';
import { Card } from './Card';


function Educations( props ) {

    return (
        <Card>
            <Heading text="Ausbildung"/>
            <a onClick={props.addEducation}>+ Ausbildung hinufügen</a>
            {props.educations.map( (education, index ) => {

                return <AddEducation {...education} key={index}/>;
            })}
        </Card>
    );
}

export { Educations };
