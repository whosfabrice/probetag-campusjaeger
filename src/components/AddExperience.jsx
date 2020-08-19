import React from 'react';
import { Card } from './Card';
import { InputText } from './InputText';
import { InputDropdown } from './InputDropdown';


function AddExperience( props ) {

    return (
        <Card>
            <InputDropdown options={['Programmieren', 'Design', 'Audio', 'Video']}/>
            <div className="form-group">
                <InputText value={props.company} placeholder="Name des Betriebs"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <InputText value={props.from} placeholder="Von"/>
                </div>
                <div className="form-group col-md-4">
                    <InputText value={props.to} placeholder="Bis"/>
                </div>
                <div className="form-group col-md-4">
                    <InputText value={props.notes} placeholder="Anmerkungen"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Speichern</button>
            <button type="submit" className="btn btn-primary ml-2">Abbrechen</button>
        </Card>
    );
}

export { AddExperience };
