import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import BotanicalLayer from '@/components/BotanicalLayer';
import whitePeonies from '@assets/1_1758357477982.png';
import whiteFlower from '@assets/2_1758357477983.png';
import delicateBranch from '@assets/4_1758357477984.png';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-primary text-primary-foreground py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      {/* Magnolia Garland */}
      <div className="absolute top-0 left-0 w-full h-20 z-5">
        <BotanicalLayer
          src={whitePeonies}
          alt=""
          testId="footer-magnolia-left"
          top="10px"
          left="10%"
          width="50px"
          height="auto"
          opacity={0.3}
          zIndex={2}
          rotate={15}
          variant="idleFloat"
          delay={4.0}
          className="filter drop-shadow-lg"
          ariaHidden={true}
        />
        
        <BotanicalLayer
          src={whiteFlower}
          alt=""
          testId="footer-magnolia-center-left"
          top="5px"
          left="30%"
          width="40px"
          height="auto"
          opacity={0.25}
          zIndex={2}
          rotate={-10}
          variant="idleFloat"
          delay={4.5}
          className="filter drop-shadow-lg"
          ariaHidden={true}
        />
        
        <BotanicalLayer
          src={delicateBranch}
          alt=""
          testId="footer-magnolia-center"
          top="0px"
          left="50%"
          width="45px"
          height="auto"
          opacity={0.3}
          zIndex={2}
          rotate={0}
          variant="idleFloat"
          delay={4.2}
          className="filter drop-shadow-lg transform -translate-x-1/2"
          ariaHidden={true}
        />
        
        <BotanicalLayer
          src={whiteFlower}
          alt=""
          testId="footer-magnolia-center-right"
          top="5px"
          right="30%"
          width="40px"
          height="auto"
          opacity={0.25}
          zIndex={2}
          rotate={10}
          variant="idleFloat"
          delay={4.7}
          className="filter drop-shadow-lg"
          ariaHidden={true}
        />
        
        <BotanicalLayer
          src={whitePeonies}
          alt=""
          testId="footer-magnolia-right"
          top="10px"
          right="10%"
          width="50px"
          height="auto"
          opacity={0.3}
          zIndex={2}
          rotate={-15}
          variant="idleFloat"
          delay={4.3}
          className="filter drop-shadow-lg"
          ariaHidden={true}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Paula
              <span className="text-primary-foreground mx-3">&</span>
              Rafael
            </h2>
            <p className="text-primary-foreground text-lg">
              December 27, 2025 • St. James the Great Parish Alabang
            </p>
          </div>

          {/* Botanical Decorative Elements */}
          <div className="flex justify-center items-center space-x-6 py-6">
            <div className="w-16 h-px bg-primary-foreground/30"></div>
            
            <div className="flex items-center space-x-3">
              <BotanicalLayer
                src={delicateBranch}
                alt=""
                testId="footer-decorative-branch-left"
                width="20px"
                height="auto"
                opacity={0.4}
                zIndex={1}
                rotate={-15}
                variant="idleFloat"
                delay={5.0}
                className="filter drop-shadow-lg relative"
                ariaHidden={true}
              />
              
              <Heart className="w-6 h-6 text-primary-foreground animate-float" />
              
              <BotanicalLayer
                src={delicateBranch}
                alt=""
                testId="footer-decorative-branch-right"
                width="20px"
                height="auto"
                opacity={0.4}
                zIndex={1}
                rotate={15}
                variant="idleFloat"
                delay={5.2}
                className="filter drop-shadow-lg relative"
                ariaHidden={true}
              />
            </div>
            
            <div className="w-16 h-px bg-primary-foreground/30"></div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-primary-foreground leading-relaxed italic">
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground text-sm">
              With love and gratitude,
            </p>
            <p className="text-primary-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Paula & Rafael
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;