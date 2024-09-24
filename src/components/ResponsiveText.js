export const LHText = ({children, className, ...rest}) => {

    const defaultClassName = `
        font-semibold
        block
        text-xl
        sm:text-2xl
        md:text-4xl
        lg:text-6xl
        xl:text-8xl
    `;
  
    return (
        <h1 className={`${defaultClassName} ${className} text-xl`}>{children}</h1>
    );
};

export const HText = ({children, className, ...rest}) => {

    const defaultClassName = `
        font-semibold
        block
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-4xl
        xl:text-6xl
    `;
  
    return (
        <h1 className={`${defaultClassName} ${className} text-xl`}>{children}</h1>
    );
};

export const SHText = ({ children, className, ...rest }) => {

    const defaultClassName = `
        font-semibold
        block
        text-base
        sm:text-lg
        md:text-xl
        lg:text-2xl
        xl:text-3xl
    `;

    return (
        <h2 className={`${defaultClassName} ${className}`} {...rest}>
            {children}
        </h2>
    );
};



export const PText = ({children, className, ...rest}) => {

    const defaultClassName = `
        block
        text-xs
        sm:text-sm
        md:text-md
        lg:text-lg
        xl:text-xl
    `;
  
    return (
        <p className={`${defaultClassName} ${className} text-xl`} >{children}</p>
    );
};




