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
        inline-block px-3 py-2 shadow-lg border rounded-md font-semibold
        bg-white whitespace-nowrap overflow-hidden overflow-ellipsis
    `;

    return (
        <div 
            className={`${defaultClassName} ${className}`} 
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest}
        >
            <img className={`w-8 h-8 inline mr-3 ${imageClassName}`} src={skillImage}/>
            {children}
        </div>
    );
};

export default Skill;
