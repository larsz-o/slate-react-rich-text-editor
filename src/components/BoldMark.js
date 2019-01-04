import React from 'react'; 

const BoldMark = props => (
    <strong>
    {/* put all props.children inside these tags */}
        {props.children}
    </strong>
);

export default BoldMark; 