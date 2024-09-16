import React, { useState } from 'react';

const Tools = (props) => {
    const [hover, setHover] = useState(false);
    const defaultClassName = `
        inline-block 
        duration-300 
        rounded-xl
        border
        m-3
        p-3
        
    `;
    const hoverEffect = hover ?
        'bg-white shadow-lg' :
        'bg-transparent';
    
    return (
        <div
            className={`${defaultClassName} ${hoverEffect} ${props.className}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={props.src} style={{width: "50px", height: "50px"}}/>
        </div>
    );
};

export default Tools;
