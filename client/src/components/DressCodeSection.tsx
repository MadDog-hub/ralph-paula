import { motion } from 'framer-motion';

import attireGuideImage from "@assets/attire-guide_1758345921277.png";

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="bg-background py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Patternn */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-border rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-border rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-border/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-border/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-display italic text-primary mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <div className="bg-card/20 border border-border/30 rounded-xl p-6 max-w-2xl mx-auto relative">
            <p className="text-lg text-foreground mb-4">
              Please come to your formal and semi-formal attire. We encourage you to dress according to our color motif.
            </p>
          </div>
        </motion.div>

        {/* Attire Image */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.2 }}
        >
          <motion.img 
            src={attireGuideImage}
            alt="Wedding attire guide for men and women guests"
            className="w-full max-w-lg mx-auto object-contain rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 8.5 }}
          />
        </motion.div>

        {/* Color Palette */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-xl font-body font-medium text-foreground mb-6 text-center">
              Color Guide Palette
            </h3>
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center group">
                <div 
                  className="w-20 h-20 mx-auto rounded-full border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: '#eddae0' }}
                ></div>
                <p className="text-sm font-medium text-foreground mt-3 mb-1">
                  Soft Rose
                </p>
                <p className="text-xs text-foreground/80 font-mono">
                  #eddae0
                </p>
              </div>
              <div className="text-center group">
                <div 
                  className="w-20 h-20 mx-auto rounded-full border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: '#cfdbe9' }}
                ></div>
                <p className="text-sm font-medium text-foreground mt-3 mb-1">
                  Powder Blue
                </p>
                <p className="text-xs text-foreground/80 font-mono">
                  #cfdbe9
                </p>
              </div>
              <div className="text-center group">
                <div 
                  className="w-20 h-20 mx-auto rounded-full border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: '#db969b' }}
                ></div>
                <p className="text-sm font-medium text-foreground mt-3 mb-1">
                  Dusty Pink
                </p>
                <p className="text-xs text-foreground/80 font-mono">
                  #db969b
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rules and Details */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="space-y-6">
            <motion.div 
              className="bg-card/20 rounded-xl p-6 border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 9.1 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Gentlemen: White long-sleeve and black pants</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-card/20 rounded-xl p-6 border border-border/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 9.3 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Ladies: Cocktail or long dress</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-card/20 rounded-xl p-6 border border-border/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 9.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Strictly no denim pants, t-shirts and rubber shoes</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;