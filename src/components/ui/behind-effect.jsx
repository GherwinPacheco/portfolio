const BehindEffect = ({ className, children, distance = 10, enabled = false, direction = 'left' }) => {
    // Determine the direction for translation
    const translateX = direction === 'left' ? `-${distance}%` : `${distance}%`;
    const translateY = direction === 'left' ? `-${distance}%` : `${distance}%`;

    // Construct the hover or static translation based on `enabled`
    const animationClass = enabled
        ? `relative translate-x-[var(--x)] translate-y-[var(--y)] transition-transform duration-200`
        : `relative hover:translate-x-[var(--x)] hover:translate-y-[var(--y)] transition-transform duration-200`;



    return (
        <div
            className={`relative w-fit overflow-visible ${className}`}
            style={{
                '--x': translateX,
                '--y': translateY,
            }}
        >
            <div className={animationClass}>
                {children}
            </div>
        </div>
    );
};

export default BehindEffect;
