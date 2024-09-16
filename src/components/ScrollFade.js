import React, { useEffect, useState, useRef } from 'react';
import '../index.css'; // Import the CSS file where keyframes are defined

const ScrollFade = ({ children, direction = 'left', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const isInView = rect.top <= viewHeight && rect.bottom >= 0;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the animation classes based on direction and visibility
  const animationClass = isVisible
    ? direction === 'top'
      ? 'fade-in-from-top'
      : direction === 'left'
      ? 'fade-in-from-left'
      : direction === 'bottom'
      ? 'fade-in-from-bottom'
      : direction === 'right'
      ? 'fade-in-from-right'
      : ''
    : direction === 'top'
    ? 'fade-out-to-top'
    : direction === 'left'
    ? 'fade-out-to-left'
    : direction === 'bottom'
    ? 'fade-out-to-bottom'
    : direction === 'right'
    ? 'fade-out-to-right'
    : '';

  return (
    <div
      ref={containerRef}
      className={`transition-opacity duration-1000 ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollFade;
