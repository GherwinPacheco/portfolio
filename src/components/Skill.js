import React, {useState} from 'react';

const Skill = ({children, image, className, imageClassName, ...rest}) => {

    const importImage = (img) => {
        try {
            return require(`../img/skills/${img}`); // Adjust the extension as needed
        } catch (error) {
            console.error("Image not found:", error);
            return null;
        }
    };

    const skillImage = importImage(image);

    const [isHovered, setIsHovered] = useState(false);
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
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest}
        >
            <img className={`${defaultImageClassName} ${imageClassName}`} src={skillImage}/>
            {children}
        </div>
    );
};

export default Skill;
