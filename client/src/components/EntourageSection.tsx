import { motion } from 'framer-motion';
import entourage1Image from "@assets/entourage1_1758345926557.jpg";
import entourage2Image from "@assets/entourage2_1758345926556.jpg";

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#333333] rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#333333] rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
          >
            <img 
              src={entourage1Image}
              alt="Consuegra - Arro Wedding Entourage - Parents and Sponsors"
              className="w-full max-w-2xl mx-auto object-contain rounded-lg shadow-lg"
              data-testid="img-entourage-1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
          >
            <img 
              src={entourage2Image}
              alt="Consuegra - Arro Wedding Entourage - Wedding Party"
              className="w-full max-w-2xl mx-auto object-contain rounded-lg shadow-lg"
              data-testid="img-entourage-2"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;