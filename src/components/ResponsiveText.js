export const HText = ({ children, className, size = 'md', ...rest }) => {

    var defaultClassName = `
        font-semibold
        block
        text-base
        sm:text-lg
        md:text-xl
        lg:text-2xl
        xl:text-3xl
    `;

    switch (size) {
        case 'sm':
            defaultClassName = `
                font-semibold
                block
                text-sm
                sm:text-md
                md:text-lg
                lg:text-xl
                xl:text-2xl
            `;
            break;
        case 'lg':
            defaultClassName = `
                font-semibold
                block
                text-md
                sm:text-lg
                md:text-xl
                lg:text-2xl
                xl:text-4xl
            `;
            break;
        case 'xl':
            defaultClassName = `
                font-semibold
                block
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-4xl
                xl:text-6xl
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
        text-xs
        sm:text-sm
        md:text-md
        lg:text-lg
        xl:text-xl
    `;
  
    return (
        <p className={`${defaultClassName} ${className} text-xl`} {...rest}>{children}</p>
    );
};

