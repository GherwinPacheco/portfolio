export const HText = ({ children, className, size = 'md', ...rest }) => {

    var defaultClassName = `
        font-semibold
        block
        text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl
    `;

    switch (size) {
        case 'sm':
            defaultClassName = `
                font-semibold
                block
                text-sm sm:text-md md:text-md lg:text-lg xl:text-xl
            `;
            break;
        case 'lg':
            defaultClassName = `
                font-semibold
                block
                text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-4xl
            `;
            break;
        case 'xl':
            defaultClassName = `
                font-semibold
                block
                text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-6xl
            `;
            break;
        default:
            defaultClassName = defaultClassName;
    }


    return (
        <h1 className={`${defaultClassName} ${className}`} {...rest}>
            {children}
        </h1>
    );
};



export const PText = ({children, className, ...rest}) => {

    const defaultClassName = `
        block
        text-xs sm:text-sm md:text-sm lg:text-md xl:text-lg
    `;
  
    return (
        <p className={`${defaultClassName} ${className} text-xl`} {...rest}>{children}</p>
    );
};


export const SText = ({children, className, ...rest}) => {

    const defaultClassName = `
        block
        text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm
    `;
  
    return (
        <p className={`${defaultClassName} ${className} text-xl`} {...rest}>{children}</p>
    );
};

