import loop1Image from '@assets/loop1_1758344789616.jpg';
import loop2Image from '@assets/loop2_1758344789618.jpg';
import loop3Image from '@assets/loop3_1758344789619.jpg';
import loop4Image from '@assets/loop4_1758344789615.jpg';
import loop5Image from '@assets/loop5_1758344789612.png';
import loop6Image from '@assets/loop6_1758344789614.jpg';
import cover1Image from '@assets/cover1_1758344789618.jpg';
import cover2Image from '@assets/cover2_1758344789613.png';
import cover3Image from '@assets/cover3_1758344789617.jpg';
import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    loop1Image,
    loop2Image,
    loop3Image,
    loop4Image,
    loop5Image,
    loop6Image,
    cover1Image,
    cover2Image,
    cover3Image
  ];

  return (
    <section id="slideshow" className="image-loop-section w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Andrei & Sam moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Andrei & Sam moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;