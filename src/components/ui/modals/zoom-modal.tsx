import { GalleryItem } from '@/types/interfaces/shows/shows.interface';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonHover,
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';
import {
  ChevronRightCircleIcon as ChevronRight,
  ChevronLeftCircleIcon as ChevronLeft,
  CircleXIcon,
  CirclePlay as Play,
  CirclePause as Pause,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useResponsive } from '@/hooks/useResponsive';

interface ModalImageProps {
  images: GalleryItem[];
  initialSlide?: number;

  onClose: () => void;
}

/**
 * ZoomModal component displays a modal with an image carousel that allows users to view images in a larger format.
 * 
 * @component
 * @param {ModalImageProps} props - The properties for the ZoomModal component.
 * @param {Array<{ src: string, alt: string }>} props.images - An array of image objects to be displayed in the modal.
 * @param {function} props.onClose - A function to be called when the modal is closed.
 * @param {number} [props.initialSlide=0] - The index of the initial slide to be displayed.
 * 
 * @returns {JSX.Element} The rendered ZoomModal component.
 * 
 * @example
 * <ZoomModal
 *   images={[
 *     { src: 'image1.jpg', alt: 'Image 1' },
 *     { src: 'image2.jpg', alt: 'Image 2' },
 *   ]}
 *   onClose={() => console.log('Modal closed')}
 *   initialSlide={0}
 * />
 * 
 * @remarks
 * - The modal can be navigated using next and previous buttons.
 * - The modal supports autoplay functionality which can be toggled using the play/pause button.
 * - The modal can be closed by pressing the Escape key.
 * - The images can be swiped left or right to navigate between them.
 */
export const ZoomModal: React.FC<ModalImageProps> = ({
  images,
  onClose,
  initialSlide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide ?? 0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const { currentBreakpoint } = useResponsive();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, images.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='imagen ampliada'
      className='fixed inset-0 bg-black sm:backdrop-blur-lg sm:bg-opacity-80 flex justify-center items-center z-50'
    >
      <Button
        variant={ButtonVariant.Icon}
        size='icon'
        radius={ButtonRadius.Full}
        hover={ButtonHover.Icon}
        onClick={onClose}
        aria-label='cerrar modal'
        className='absolute top-4 right-4 p-0 [&_svg]:size-8'
      >
        <CircleXIcon className='stroke-[1px]' />
      </Button>

      <Button
        variant={ButtonVariant.Icon}
        size={'icon'}
        radius={ButtonRadius.Full}
        hover={ButtonHover.Icon}
        onClick={handlePrev}
        className={`absolute ${
          ['xs', 'sm', 'md'].includes(currentBreakpoint) ? 'bottom-4' : ''
        } left-4 [&_svg]:size-8`}
        aria-label='prev image'
      >
        <ChevronLeft className='stroke-[1px]' />
      </Button>
      <Button
        variant={ButtonVariant.Icon}
        size={'icon'}
        radius={ButtonRadius.Full}
        hover={ButtonHover.Icon}
        onClick={handleNext}
        className={`absolute ${
          ['xs', 'sm', 'md'].includes(currentBreakpoint) ? 'bottom-4' : ''
        } right-4 [&_svg]:size-8`}
        aria-label='next image'
      >
        <ChevronRight className='stroke-[1px]' />
      </Button>

      <Button
        variant={ButtonVariant.Icon}
        radius={ButtonRadius.Full}
        hover={ButtonHover.Icon}
        size={'icon'}
        onClick={handlePlayPause}
        className='absolute bottom-4 [&_svg]:size-8'
        aria-label='reproducir/pausar'
      >
        {isPlaying ? (
          <Pause className='stroke-[1px]' />
        ) : (
          <Play className='stroke-[1px]' />
        )}
      </Button>

      <div className='aspect-[16/9] w-auto cursor-pointer overflow-hidden'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className='h-full w-full object-cover'
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'tween', duration: 0.9, ease: 'anticipate' },
              opacity: { duration: 0.8 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
