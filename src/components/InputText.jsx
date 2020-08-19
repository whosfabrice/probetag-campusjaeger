import React from 'react';


function InputText( props ) {

    return (
        <input type="text" className="form-control" placeholder={props.placeholder} defaultValue={props.value}/>
    );
}

export { InputText };
