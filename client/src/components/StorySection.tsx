import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Star, Compass, Globe, Heart } from 'lucide-react';
import firstImage from '@assets/OURStory1ST-IMAGE_1758344796892.png';
import proposalImage from '@assets/OurStory2ND-IMAGE_1758344796891.jpg';
import midImage from '@assets/OurStory3RD-IMAGE_1758344796893.jpg';
import loopImage from '@assets/ourstory-new.jpg';
import newDistanceImage from '@assets/ourStorys_1758352683598.jpg';
import botanicalLeaf from '@assets/1_1758357477982.png';
import pinkFlowers from '@assets/7_1758357477985.png';
import delicateBranch from '@assets/4_1758357477984.png';
import yellowDaisy from '@assets/6_1758357477985.png';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const botanicalRefs = useRef<HTMLImageElement[]>([]);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getStoryIcon = (cardId: number) => {
    switch (cardId) {
      case 1: return <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />;
      case 2: return <Compass className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />;
      case 3: return <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />;
      case 4: return <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />;
      default: return <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />;
    }
  };

  const storyCards = [
    {
      id: 1,
      title: "Their Beginnings",
      text: "Paula, born in 1991, grew up surrounded by family, values, and determination. She focused on her career, not searching for love. Rafael, born in 1989, was the youngest of four, raised with independence and the belief in working hard for his dreams.",
      images: [proposalImage, firstImage]
    },
    {
      id: 2, 
      title: "Paths Crossed",
      text: "In 2019, their paths crossed at a training center—Paula, serious and focused, and Rafael, confident with a smile that refused to fade. What began as annoyance slowly grew into something meaningful.",
      image: midImage
    },
    {
      id: 3,
      title: "Distance & Connection",
      text: "Then the pandemic struck. Separated by sea and distance, Rafael reached out with a simple message. That small connection turned into daily conversations, sharing hopes and lives despite challenges and long distance.",
      image: newDistanceImage
    },
    {
      id: 4,
      title: "Choosing Each Other",
      text: "Through misunderstandings and missed moments, they always found their way back. Rafael's steady presence and Paula's unstoppable drive showed them that love is not about ease—it's about choosing each other. Now, four years later, they stand together, hand in hand, proving that their story is one of patience, faith, and love chosen again and again.",
      image: loopImage
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    let scrollTriggerInstance: gsap.plugins.ScrollTriggerInstance | null = null;
    let horizontalScrollTween: gsap.core.Tween | null = null;

    // Only create horizontal scroll animations when animations are enabled AND not mobile
    const shouldHorizontal = animationsEnabled && !isMobile;
    if (shouldHorizontal) {
      // Create horizontal scrolling animation with dynamic width calculation
      horizontalScrollTween = gsap.to(horizontal, {
        x: () => -(horizontal.scrollWidth - container.offsetWidth),
        ease: "none",
      });

      // Create ScrollTrigger with dynamic end calculation  
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${horizontal.scrollWidth - container.offsetWidth}`,
        pin: true,
        scrub: 1,
        animation: horizontalScrollTween,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });

      // Refresh ScrollTrigger after images and fonts load
      const handleRefresh = () => {
        ScrollTrigger.refresh();
      };

      // Add load listener for window to refresh after fonts and lazy images
      window.addEventListener('load', handleRefresh);

      // Add load listeners to all images to refresh after each image loads
      const images = horizontal.querySelectorAll('img');
      images.forEach(img => {
        if (!img.complete) {
          img.addEventListener('load', handleRefresh, { once: true });
        }
      });

      // Initial refresh to handle any already loaded content
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      // Add botanical parallax animations with correct math
      if (botanicalRefs.current.length > 0) {
        botanicalRefs.current.forEach((element, index) => {
          if (element) {
            const parallaxFactors = [0.6, 0.75, 0.85, 0.95]; // Slower than main content
            const factor = parallaxFactors[index] || 0.8;
            gsap.to(element, {
              x: () => -(horizontal.scrollWidth - container.offsetWidth) * (factor - 1), // Live dimensions for refresh behavior
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${horizontal.scrollWidth - container.offsetWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
              }
            });
          }
        });
      }

      // Only animate story cards on load if animations are enabled
      gsap.fromTo(".story-card", {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".story-card",
          start: "top 80%",
        }
      });

      // Cleanup function for animations enabled
      return () => {
        window.removeEventListener('load', handleRefresh);
        const images = horizontal.querySelectorAll('img');
        images.forEach(img => {
          img.removeEventListener('load', handleRefresh);
        });
        // Clean up specific instances to prevent leaks
        if (scrollTriggerInstance) scrollTriggerInstance.kill();
        if (horizontalScrollTween) horizontalScrollTween.kill();
        // Only kill ScrollTriggers that belong to this container to avoid affecting other sections
        ScrollTrigger.getAll().filter(st => st.trigger === container).forEach(st => st.kill());
      };
    } else {
      // When animations are disabled, provide static layout
      // No horizontal scroll, no parallax, just static content
      return () => {
        // Minimal cleanup for static mode
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    }
  }, [animationsEnabled, isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue relative"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* Header */}
      <div className="text-center py-16 sm:py-20 px-4 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black text-primary-foreground mb-6 sm:mb-8" data-testid="text-story-title">
            Our Story
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground max-w-2xl mx-auto mb-4">
            {animationsEnabled 
              ? "Scroll vertically to journey through our love story horizontally"
              : "Our journey together"
            }
          </p>
          
          {/* SVG Arrow Indicator - Only show for horizontal scroll */}
          {animationsEnabled && (
            <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-bounce" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
              </svg>
              <span className="text-xs sm:text-sm text-primary-foreground">Scroll down</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
              </svg>
            </div>
          )}
        </motion.div>
      </div>
      {/* Story Content Container */}
      {animationsEnabled && !isMobile ? (
        /* Horizontal Scrolling Container */
        <div 
          ref={containerRef} 
          className="relative overflow-x-hidden overflow-y-visible"
          style={{ height: '100vh' }}
        >
          <div 
            ref={horizontalRef}
            className="flex h-full items-center relative"
            style={{ width: `${storyCards.length * 100 + 100}vw` }}
          >
          {/* Botanical Background Layer */}
          <div className="absolute inset-0 z-0">
            <img
              ref={el => el && (botanicalRefs.current[0] = el)}
              src={botanicalLeaf}
              alt=""
              className="absolute top-[10%] left-[5%] w-24 md:w-32 opacity-25 pointer-events-none"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))', willChange: 'transform' }}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              data-testid="story-botanical-leaf-1"
            />
            <img
              ref={el => el && (botanicalRefs.current[1] = el)}
              src={pinkFlowers}
              alt=""
              className="absolute bottom-[15%] right-[10%] w-20 md:w-28 opacity-20 pointer-events-none"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))', willChange: 'transform' }}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              data-testid="story-botanical-pink-flowers"
            />
            <img
              ref={el => el && (botanicalRefs.current[2] = el)}
              src={delicateBranch}
              alt=""
              className="absolute top-[60%] left-[15%] w-32 md:w-40 opacity-30 pointer-events-none"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))', willChange: 'transform' }}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              data-testid="story-botanical-branch"
            />
            <img
              ref={el => el && (botanicalRefs.current[3] = el)}
              src={yellowDaisy}
              alt=""
              className="absolute top-[20%] right-[20%] w-16 md:w-20 opacity-25 pointer-events-none"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))', willChange: 'transform' }}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              data-testid="story-botanical-daisy"
            />
          </div>

          {/* Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 relative z-10"
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  background: mousePosition[card.id] 
                    ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 40%), rgba(0, 0, 0, 0.05)`
                    : 'rgba(0, 0, 0, 0.05)'
                }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 text-primary bg-[#024b30]">
                    {getStoryIcon(card.id)}
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic text-primary-foreground mb-4 sm:mb-6" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-primary-foreground leading-relaxed" data-testid={`text-story-card-${card.id}-text`}>
                    {card.text}
                  </p>

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/5] sm:aspect-square max-w-[85vw] sm:max-w-sm md:max-w-md mx-auto relative">
                    {/* Handle multiple images for "Their Beginnings" or single image for others */}
                    {card.images ? (
                      // Multiple images side by side for "Their Beginnings"
                      (<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full">
                        {card.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`Story moment ${index + 1} - ${imgIndex + 1}`}
                            className="w-full h-full object-cover object-[50%_20%] rounded-2xl shadow-lg aspect-[4/5] sm:aspect-square"
                            data-testid={`img-story-card-${card.id}-${imgIndex + 1}`}
                          />
                        ))}
                      </div>)
                    ) : (
                      // Single image for other cards
                      (<img
                        src={card.image}
                        alt={`Story moment ${index + 1}`}
                        className="w-full h-full object-cover object-[50%_20%] rounded-2xl shadow-lg"
                        data-testid={`img-story-card-${card.id}`}
                      />)
                    )}

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final "The Vow" Section */}
          <div className="story-card flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Background SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
                <defs>
                  <radialGradient id="vowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="400" cy="300" r="250" fill="url(#vowGradient)"/>
                
                {/* Decorative hearts */}
                <g className="animate-pulse">
                  <path d="M200,150 C200,140 185,130 175,140 C165,130 155,140 155,150 C155,160 175,180 200,200 C225,180 245,160 245,150 C245,140 235,130 225,140 C215,130 200,140 200,150 Z" 
                        fill="hsl(var(--primary-foreground))" opacity="0.2"/>
                  <path d="M600,450 C600,440 585,430 575,440 C565,430 555,440 555,450 C555,460 575,480 600,500 C625,480 645,460 645,450 C645,440 635,430 625,440 C615,430 600,440 600,450 Z" 
                        fill="hsl(var(--primary-foreground))" opacity="0.2"/>
                </g>
              </svg>

              <div className="relative z-10 space-y-6 sm:space-y-8">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic font-black text-primary-foreground mb-6 sm:mb-8" data-testid="text-story-vow-title">
                  The Vow
                </h3>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl text-primary-foreground leading-relaxed italic">
                    "To love, to cherish, and to build a beautiful life together—this is our promise, today and always."
                  </p>
                </div>
                
                {/* SVG Hearts decoration */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-primary-foreground/60"></div>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-primary-foreground/60"></div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Close horizontal scroll containers */}
          </div>
        </div>
      ) : (
        /* Static vertical layout - duplicate the story cards without horizontal scroll */
        <>
          {/* Static Botanical Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={botanicalLeaf}
              alt=""
              className="absolute top-[10%] left-[5%] w-24 md:w-32 opacity-25"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              data-testid="story-botanical-leaf-static"
            />
            <img
              src={pinkFlowers}
              alt=""
              className="absolute bottom-[15%] right-[10%] w-20 md:w-28 opacity-20"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              data-testid="story-botanical-flowers-static"
            />
          </div>
          
          {/* Static Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card py-12 px-4 relative z-10"
            >
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative overflow-hidden rounded-3xl p-8 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm">
                {/* Same content structure as horizontal cards */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 text-primary bg-[#024b30]">
                    {getStoryIcon(card.id)}
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic text-primary-foreground mb-4 sm:mb-6" data-testid={`text-story-card-static-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-primary-foreground leading-relaxed" data-testid={`text-story-card-static-${card.id}-text`}>
                    {card.text}
                  </p>

                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="max-w-sm mx-auto relative">
                    {card.images ? (
                      <div className="grid grid-cols-1 gap-4 w-full">
                        {card.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`Story moment ${index + 1} - ${imgIndex + 1}`}
                            className="w-full h-auto rounded-2xl shadow-lg"
                            data-testid={`img-story-card-static-${card.id}-${imgIndex + 1}`}
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={card.image}
                        alt={`Story moment ${index + 1}`}
                        className="w-full h-auto rounded-2xl shadow-lg"
                        data-testid={`img-story-card-static-${card.id}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Static "The Vow" Section */}
          <div className="py-12 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center relative">
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic font-black text-primary-foreground mb-6 sm:mb-8" data-testid="text-story-vow-static-title">
                  The Vow
                </h3>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl text-primary-foreground leading-relaxed italic">
                    "To love, to cherish, and to build a beautiful life together—this is our promise, today and always."
                  </p>
                </div>
                
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-primary-foreground/60"></div>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-primary-foreground/60"></div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      
    </motion.section>
  );
};

export default StorySection;