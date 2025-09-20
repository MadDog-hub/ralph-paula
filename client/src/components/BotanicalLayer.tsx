import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

interface BotanicalLayerProps {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  opacity?: number;
  zIndex?: number;
  variant?: 'idleFloat' | 'parallax' | 'static';
  hideBelow?: 'sm' | 'md' | 'lg';
  blend?: 'normal' | 'soft-light' | 'multiply';
  ariaHidden?: boolean;
  motionProps?: any;
  delay?: number;
  testId?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const BotanicalLayer = ({
  src,
  alt,
  srcSet,
  sizes,
  className = '',
  style = {},
  width = 'auto',
  height = 'auto',
  top,
  left,
  right,
  bottom,
  rotate = 0,
  opacity = 0.4,
  zIndex = 1,
  variant = 'static',
  hideBelow,
  blend = 'normal',
  ariaHidden = true,
  motionProps = {},
  delay = 0,
  testId,
  fetchPriority = 'auto'
}: BotanicalLayerProps) => {
  const { animationsEnabled } = useAnimationContext();

  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
    right,
    bottom,
    width,
    height,
    opacity,
    zIndex,
    pointerEvents: 'none',
    transform: `rotate(${rotate}deg)`,
    mixBlendMode: blend,
    willChange: variant !== 'static' ? 'transform' : 'auto',
    ...style
  };

  const hideClasses = hideBelow ? `hidden ${hideBelow}:block` : '';
  const combinedClassName = `${className} ${hideClasses}`;

  const getMotionVariants = () => {
    switch (variant) {
      case 'idleFloat':
        return animationsEnabled ? {
          initial: { y: 0, opacity: 0 },
          animate: { 
            y: [-3, 3, -3], 
            opacity: opacity,
            transition: {
              y: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: delay
              },
              opacity: { 
                duration: 0.8, 
                delay: delay
              }
            }
          }
        } : {
          initial: { opacity: 0 },
          animate: { opacity: opacity }
        };
      case 'parallax':
        return animationsEnabled ? {
          initial: { opacity: 0 },
          animate: { 
            opacity: opacity,
            transition: { duration: 0.8, delay: delay }
          }
        } : {
          initial: { opacity: 0 },
          animate: { opacity: opacity }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { 
            opacity: opacity,
            transition: { duration: 0.8, delay: delay }
          }
        };
    }
  };

  const variants = getMotionVariants();

  return (
    <motion.img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      className={combinedClassName}
      style={positionStyles}
      aria-hidden={ariaHidden}
      role={ariaHidden ? "presentation" : undefined}
      loading="lazy"
      decoding="async"
      draggable={false}
      fetchpriority={fetchPriority}
      initial={variants.initial}
      animate={variants.animate}
      data-testid={testId || `botanical-${alt.toLowerCase().replace(/\s+/g, '-')}`}
      {...motionProps}
    />
  );
};

export default BotanicalLayer;