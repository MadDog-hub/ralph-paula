import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
}

const MusicConsentPopup = ({ onConsent }: MusicConsentPopupProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleConsent = (consent: boolean) => {
    setIsVisible(false);
    onConsent(consent);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-border">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-gold/20 p-4 rounded-full">
              <Volume2 className="h-8 w-8 text-gold-foreground" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground font-display">
              Enhanced Experience
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              We'd love to play some beautiful background music to enhance your experience while exploring our wedding invitation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => handleConsent(true)}
              className="flex-1 bg-gold hover:bg-gold/90 text-gold-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              data-testid="button-allow-music"
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Play Music
            </Button>
            <Button
              onClick={() => handleConsent(false)}
              variant="outline"
              className="flex-1 border-2 border-destructive/40 hover:border-destructive/60 text-destructive bg-destructive/10 hover:bg-destructive/20 font-medium py-3 px-6 rounded-lg transition-all duration-300"
              data-testid="button-skip-music"
            >
              <VolumeX className="h-4 w-4 mr-2" />
              Continue Silently
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicConsentPopup;