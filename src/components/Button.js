import React, {useState} from 'react';
const Button = ({children, className, onClick = () => {}}) => {

    const [isClicked, setIsClicked] = useState(false);
    const defaultClassName = `
        px-5
        py-2
        rounded-md
        font-semibold
        duration-300
    `;

    const handleClick = () => {
        setIsClicked(true);

        setTimeout(() => {
            setIsClicked(false);
        }, 200);
    }
  
    return (
        <button 
            className={`${defaultClassName} ${className}`} 
            onClick={() => {
                handleClick();
                onClick();
            }}>

            {children}
        </button>
    );
};

export default Button;
