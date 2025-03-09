import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  stagger = false,
}) => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`reveal-on-scroll ${stagger ? 'stagger-children' : ''} ${className}`}
    >
      {children}
    </section>
  );
};