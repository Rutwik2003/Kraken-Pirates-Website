import { Variants } from 'framer-motion';

// Fade in animation with Y translation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scale animation for interactive elements
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Navbar link underline animation
export const navLinkUnderline: Variants = {
  initial: { width: '0%' },
  hover: {
    width: '100%',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Card tilt effect
export const cardTilt: Variants = {
  initial: { 
    rotateX: 0, 
    rotateY: 0,
    transformStyle: 'preserve-3d',
  },
  hover: {
    rotateX: [-2, 2],
    rotateY: [-3, 3],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Mobile menu animation
export const mobileMenu: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Section reveal animation
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Hero section parallax
export const heroParallax: Variants = {
  initial: { y: 0 },
  scroll: (scrollProgress: number) => ({
    y: scrollProgress * 0.5,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
    },
  }),
};

// Button gradient shift
export const buttonGradient: Variants = {
  initial: {
    backgroundPosition: '0% 50%',
  },
  hover: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};