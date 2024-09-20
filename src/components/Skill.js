import React, {useState} from 'react';
const Skill = ({children, image, className, ...rest}) => {

    const [isHovered, setIsHovered] = useState(false);
    const defaultClassName = `
        inline-block px-3 py-2 shadow-lg border rounded-md font-semibold
        bg-white
    `;

    return (
        <div 
            className={`${defaultClassName} ${className}`} 
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest}
        >
            <img className='w-8 h-8 inline mr-3' src={`./img/${image}`}/>
            {children}
        </div>
    );
};

export default Skill;
