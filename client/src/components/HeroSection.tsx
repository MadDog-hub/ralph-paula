import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import heroBackgroundImage from '@assets/new-hero-background.jpg';
import { useAnimationContext } from '@/contexts/AnimationContext';
import BotanicalLayer from '@/components/BotanicalLayer';
import botanicalLeaf from '@assets/1_1758357477982.png';
import whiteMagnolia from '@assets/2_1758357477983.png';
import birdOfParadise from '@assets/3_1758357477983.png';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        filter: 'brightness(0.7)'
      }}
    >
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
      
      {/* Botanical Elements */}
      <BotanicalLayer
        src={botanicalLeaf}
        alt=""
        testId="hero-leaf-cluster-top-left"
        top="10%"
        left="5%"
        width="120px"
        height="auto"
        opacity={0.35}
        zIndex={2}
        variant="idleFloat"
        delay={0.5}
        hideBelow="md"
        className="filter drop-shadow-lg"
      />
      
      <BotanicalLayer
        src={botanicalLeaf}
        alt=""
        testId="hero-leaf-cluster-bottom-right"
        bottom="15%"
        right="8%"
        width="100px"
        height="auto"
        opacity={0.3}
        zIndex={2}
        rotate={45}
        variant="idleFloat"
        delay={1.2}
        hideBelow="md"
        className="filter drop-shadow-lg"
      />
      
      <BotanicalLayer
        src={whiteMagnolia}
        alt=""
        testId="hero-magnolia-flourish"
        bottom="40%"
        left="50%"
        width="80px"
        height="auto"
        opacity={0.4}
        zIndex={2}
        variant="idleFloat"
        delay={2.0}
        hideBelow="lg"
        className="filter drop-shadow-lg transform -translate-x-1/2"
      />
      
      <BotanicalLayer
        src={birdOfParadise}
        alt=""
        testId="hero-bird-of-paradise"
        top="25%"
        right="12%"
        width="90px"
        height="auto"
        opacity={0.25}
        zIndex={1}
        rotate={-15}
        variant="idleFloat"
        delay={1.8}
        hideBelow="lg"
        className="filter drop-shadow-lg"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white font-bold tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 700 }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'PAULA\n&\nRAFAEL',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                PAULA
                <br />
                &
                <br />
                RAFAEL
              </span>
            )}
          </h1>
        </div>

        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div className="bg-card/20 backdrop-blur-md border border-border/30 rounded-2xl p-8 mb-10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white font-semibold tracking-wide font-times" data-testid="text-date">December 27, 2025 | 2:00 PM</p>
              </div>
              <div className="text-center">
                <p className="text-lg sm:text-xl text-white font-semibold tracking-wide font-times" data-testid="text-venue">
                  St. James the Great Parish Alabang
                </p>
              </div>
            </div>
          </div>

          {/* RSVP Button */}
          <div className={`transition-all duration-700 opacity-100 mt-[10px] mb-[10px] ${animationsEnabled ? 'animate-fade-scale' : ''}`}>
            <a href="#rsvp">
              <button
                className="animated-rsvp-btn"
                aria-label="RSVP to Wedding"
                data-testid="button-rsvp-hero"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>RSVP</span>
              </button>
            </a>
          </div>
        </div>

      </div>
      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          .hero-section .bg-white\\/10 {
            padding: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
        }


        /* Animated RSVP Button */
        .animated-rsvp-btn {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          color: hsl(var(--gold));
          background-color: hsl(var(--dark-green));
          padding: 1em 2em;
          border: none;
          border-radius: .6rem;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .animated-rsvp-btn span:not(:nth-child(6)) {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 30px;
          width: 30px;
          background-color: hsl(var(--primary));
          border-radius: 50%;
          transition: .6s ease;
        }

        .animated-rsvp-btn span:nth-child(6) {
          position: relative;
        }

        .animated-rsvp-btn span:nth-child(1) {
          transform: translate(-3.3em, -4em);
        }

        .animated-rsvp-btn span:nth-child(2) {
          transform: translate(-6em, 1.3em);
        }

        .animated-rsvp-btn span:nth-child(3) {
          transform: translate(-.2em, 1.8em);
        }

        .animated-rsvp-btn span:nth-child(4) {
          transform: translate(3.5em, 1.4em);
        }

        .animated-rsvp-btn span:nth-child(5) {
          transform: translate(3.5em, -3.8em);
        }

        .animated-rsvp-btn:hover span:not(:nth-child(6)) {
          transform: translate(-50%, -50%) scale(4);
          transition: 1.5s ease;
        }

        .animated-rsvp-btn:hover,
        .animated-rsvp-btn:active {
          background-color: hsl(var(--gold));
          color: hsl(var(--dark-green));
          transition: all 0.3s ease;
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: hsl(var(--foreground));
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;