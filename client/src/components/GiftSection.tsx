import { Heart, Gift, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import gcashQrImage from '@assets/gcashQr_1758345913818.jpg';
import bpiQrImage from '@assets/BpiQr_1758345913820.jpg';
import metroBankQrImage from '@assets/metroBankQr_1758345913818.jpg';

const GiftSection = () => {
  return (
    <motion.section 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 9.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#333333] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#333333] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-[#333333] rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <h2 className="text-5xl font-display italic text-primary-foreground mb-8" data-testid="text-gifts-title">
            Wedding Gifts
          </h2>
        </motion.div>

        {/* Main Gift Message */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.1 }}
        >
          <div className="bg-card/30 border border-border rounded-xl p-12 shadow-soft hover-elegant">
            {/* Icon */}
            <div className="w-20 h-20 bg-[#333333]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#ffffff]" />
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <p className="text-xl font-body text-primary-foreground leading-relaxed">
                With all that we have, we are truly blessed, your presence and prayer are that we request. But if you desire to give nonetheless, monetary gifts are what we suggest.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center items-center space-x-4">
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
              <div className="w-3 h-3 bg-[#ffffff] rounded-full animate-float"></div>
              <div className="w-12 h-px bg-[#ffffff]/30"></div>
            </div>
          </div>
        </motion.div>

        {/* Payment Options */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          {/* GCash Payment */}
          <div>
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant">
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-4 text-center">GCash</h3>
              <div className="text-center mb-4">
                <img 
                  src={gcashQrImage}
                  alt="GCash QR Code"
                  className="w-64 h-64 sm:w-72 sm:h-72 mx-auto object-contain"
                  data-testid="img-gcash-qr"
                />
              </div>
              <p className="text-primary-foreground leading-relaxed text-center">
                Scan the QR code to send your gift via GCash
              </p>
            </div>
          </div>

          {/* BPI Payment */}
          <div>
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant">
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-4 text-center">BPI</h3>
              <div className="text-center mb-4">
                <img 
                  src={bpiQrImage}
                  alt="BPI QR Code"
                  className="w-64 h-64 sm:w-72 sm:h-72 mx-auto object-contain"
                  data-testid="img-bpi-qr"
                />
              </div>
              <p className="text-primary-foreground leading-relaxed text-center">
                Scan the QR code to send your gift via BPI
              </p>
            </div>
          </div>

          {/* Metro Bank Payment */}
          <div>
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant">
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-4 text-center">Metro Bank</h3>
              <div className="text-center mb-4">
                <img 
                  src={metroBankQrImage}
                  alt="Metro Bank QR Code"
                  className="w-64 h-64 sm:w-72 sm:h-72 mx-auto object-contain"
                  data-testid="img-metrobank-qr"
                />
              </div>
              <p className="text-primary-foreground leading-relaxed text-center">
                Scan the QR code to send your gift via Metro Bank
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;