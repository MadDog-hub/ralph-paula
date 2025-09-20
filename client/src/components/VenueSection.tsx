import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import BotanicalLayer from '@/components/BotanicalLayer';
import ceremonyImage from '@assets/ceremony_1758345942861.jpg';
import receptionImage from '@assets/reception_1758345962490.jpg';
import birdOfParadise from '@assets/3_1758357477983.png';
import coralTulips from '@assets/5_1758357477984.png';
import yellowDaisy from '@assets/6_1758357477985.png';
import delicateBranch from '@assets/4_1758357477984.png';

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'St. James the Great Parish Alabang',
      address: 'Alabang, Philippines',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/DxgAM3AbcdwKkEM57',
      description: 'We will exchange vows at the beautiful St. James the Great Parish Alabang.',
      details: 'Please arrive early to ensure you are seated before the ceremony begins.',
      additionalInfo: 'UNPLUGGED CEREMONY - We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment.',
      startTime: '2:15 PM',
      locationGuide: 'Location Guide →'
    },
    {
      title: 'Reception',
      name: 'Amistosa Clubhouse, Tierra Nueva Village Alabang',
      address: 'Alabang, Philippines',
      image: receptionImage,
      mapUrl: 'https://maps.app.goo.gl/RR3gMVR1QxDxS5ut6',
      description: 'Please join us for dinner, cocktails and dancing!',
      details: 'After the ceremony, we will move to the reception venue for the celebration.',
      website: '',
      startTime: '4:00 PM',
      locationGuide: 'Location Guide →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-hard-blue py-20 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-5xl font-display italic text-primary-foreground mb-8" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div 
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-script italic text-primary-foreground mb-4 text-[35px]" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-primary-foreground mb-4 text-lg" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-lg mx-auto text-center space-y-6">
                {/* Venue Image */}
                <div className="mb-8 relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                  
                  {/* Botanical Corner Decorations */}
                  {index === 0 && ( // Ceremony
                    <>
                      <BotanicalLayer
                        src={birdOfParadise}
                        alt=""
                        testId={`venue-ceremony-bird-of-paradise`}
                        top="-8px"
                        right="-8px"
                        width="40px"
                        height="auto"
                        opacity={0.6}
                        zIndex={5}
                        rotate={-15}
                        variant="idleFloat"
                        delay={1.5}
                        className="filter drop-shadow-lg"
                        ariaHidden={true}
                      />
                      <BotanicalLayer
                        src={delicateBranch}
                        alt=""
                        testId={`venue-ceremony-branch`}
                        bottom="-6px"
                        left="-6px"
                        width="35px"
                        height="auto"
                        opacity={0.5}
                        zIndex={5}
                        rotate={25}
                        variant="idleFloat"
                        delay={2.0}
                        className="filter drop-shadow-lg"
                        ariaHidden={true}
                      />
                    </>
                  )}
                  
                  {index === 1 && ( // Reception
                    <>
                      <BotanicalLayer
                        src={coralTulips}
                        alt=""
                        testId={`venue-reception-tulips`}
                        top="-10px"
                        left="-8px"
                        width="45px"
                        height="auto"
                        opacity={0.55}
                        zIndex={5}
                        rotate={10}
                        variant="idleFloat"
                        delay={1.8}
                        className="filter drop-shadow-lg"
                        ariaHidden={true}
                      />
                      <BotanicalLayer
                        src={yellowDaisy}
                        alt=""
                        testId={`venue-reception-daisy`}
                        bottom="-8px"
                        right="-6px"
                        width="38px"
                        height="auto"
                        opacity={0.6}
                        zIndex={5}
                        rotate={-20}
                        variant="idleFloat"
                        delay={1.2}
                        className="filter drop-shadow-lg"
                        ariaHidden={true}
                      />
                    </>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  {venue.description.split('\n').map((line, i) => (
                    <p key={i} className="text-base font-body text-primary-foreground/90 leading-relaxed" data-testid={`text-${venue.title.toLowerCase()}-description-${i + 1}`}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Details */}
                <p className="text-base font-body text-primary-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                

                {venue.website && (
                  <p className="text-base font-body text-primary-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-website`}>
                    {venue.website}
                  </p>
                )}

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary-foreground/20">
                  <div className="text-left">
                    <p className="text-sm font-body text-primary-foreground/80 italic" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <button
                      className="location-guide-btn"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                      onClick={() => window.open(venue.mapUrl, '_blank')}
                    >
                      {venue.locationGuide}
                    </button>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center bg-card/30 border border-border rounded-xl p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-2xl font-display text-primary-foreground mb-4 font-medium">Unplugged Ceremony</h3>
          <p className="text-base font-body text-primary-foreground/90 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;