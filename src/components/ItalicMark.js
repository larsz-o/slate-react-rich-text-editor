import React from 'react'; 

const ItalicMark = props => (
    <em property="italic"> 
    {/* put all props.children inside these tags */}
        {props.children}
    </em>
)
export default ItalicMark; 