import React from 'react';
import { InputText } from './InputText';
import { Heading } from './Heading';
import { Card } from './Card';


function Profile( props ) {

    return (
        <Card>
            <Heading text="Profil"/>
            <div className="form-group">
                <InputText value={props.prename} placeholder="Vorname"/>
            </div>
            <div className="form-group">
                <InputText value={props.surname} placeholder="Nachname"/>
            </div>
            <div className="form-group">
                <InputText value={props.country} placeholder="Land"/>
            </div>
            <div className="form-group">
                <InputText value={props.phone} placeholder="Telefon"/>
            </div>
            <div className="form-group">
                <InputText value={props.email} placeholder="Email"/>
            </div>
            <button type="submit" className="btn btn-primary">Speichern</button>
        </Card>       
    );
}

export { Profile };
