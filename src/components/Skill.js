import React, {useState} from 'react';

const Skill = ({skillName, image, className, imageClassName, ...rest}) => {

    const skillImage = image ? require(`../img/skills/${image}`) : '';

    const defaultClassName = `
        inline-block 
        px-3 py-2 
        shadow-lg 
        border 
        rounded-md 
        font-semibold
        bg-white 
        text-bodytext
        whitespace-nowrap 
        overflow-hidden overflow-ellipsis
    `;

    const defaultImageClassName = `
        inline 
        mr-3 
        w-4 h-4
        sm:w-5 sm:h-5 
        md:w-6 md:h-6 
        lg:w-7 lg:h-7
        lg:w-8 lg:h-8
    `;

    return (
        <div 
            className={`${defaultClassName} ${className}`} 
            {...rest}
        >
            <img className={`${defaultImageClassName} ${imageClassName}`} src={skillImage}/>
            {skillName}
        </div>
    );
};

export default Skill;
