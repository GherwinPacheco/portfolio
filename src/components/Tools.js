import React, { useState } from 'react';

const Tools = (props) => {
    const [hover, setHover] = useState(false);
    const defaultClassName = `
        inline-block 
        duration-300 
        rounded-xl
        border
        mx-3
        p-3
        bg-white
        
    `;
    const hoverEffect = hover ?
        'shadow-lg mx-5' : //hovered
        '';   //not hovered
    
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
