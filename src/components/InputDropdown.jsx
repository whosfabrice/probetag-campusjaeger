import React from 'react';


function InputDropdown( props ){

    return(
        <div className="form-group">
            <select className="form-control">
            {props.options.map( ( option, index ) => {

                return <option key={index}>{option}</option>;
            })}
            </select>
        </div>
    );
}

export { InputDropdown };