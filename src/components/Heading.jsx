import React from 'react';


function Heading( props ) {
  return (
    <div className="form-group">
        <h2> { props.text } </h2>
    </div>
  );
}

export { Heading };
