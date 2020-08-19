import React from 'react';
import { Card } from './Card';
import { InputText } from './InputText';
import { InputDropdown } from './InputDropdown';


function AddEducation( props ) {

    return (
        <Card>
            <InputDropdown options={['Grundschule', 'Realschule', 'Gymnasium', 'Berufsausbildung']}/>
            <div className="form-group">
                <InputText value={props.school} placeholder="Name der Schule"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <InputText value={props.from} placeholder="Von"/>
                </div>
                <div className="form-group col-md-4">
                    <InputText value={props.to} placeholder="Bis"/>
                </div>
                <div className="form-group col-md-4">
                    <InputText value={props.average} placeholder="Notendurchschnitt"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Speichern</button>
            <button type="submit" className="btn btn-primary ml-2">Abbrechen</button>
        </Card>
    );
}

export { AddEducation };
