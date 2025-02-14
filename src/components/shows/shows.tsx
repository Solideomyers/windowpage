'use client'

import { GalleryItem } from '@/types/interfaces/shows/shows.interface';
import { ShowsClient } from '@/components/shows/shows-client';
import { TextHeading } from '@/components/ui/textheading';
import { useResponsive } from '@/hooks/useResponsive';
import { useTranslations } from 'next-intl';

export const Shows: React.FC = () => {
  const {currentBreakpoint} = useResponsive()
    const levelText = currentBreakpoint === 'xs' ? 4 : 5;
  
  const galleryItems: GalleryItem[] = [
    {
      name: 'imagen_76002',
      alt: 'Show Image 1',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_76002.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_76002.jpg',
    },
    {
      name: 'imagen_69633',
      alt: 'Show Image 2',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_69633.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_69633.jpg',
    },
    {
      name: 'imagen_82668',
      alt: 'Show Image 3',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_82668.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_82668.jpg',
    },
    {
      name: 'imagen_73512',
      alt: 'Show Image 4',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_73512.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_73512.jpg',
    },
    {
      name: 'imagen_44760',
      alt: 'Show Image 5',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_44760.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_44760.jpg',
    },
    {
      name: 'imagen_65336',
      alt: 'Show Image 6',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_65336.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_65336.jpg',
    },
    {
      name: 'imagen_57759',
      alt: 'Show Image 7',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_57759.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_57759.jpg',
    },
    {
      name: 'imagen_94023',
      alt: 'Show Image 8',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_94023.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_94023.jpg',
    },
    {
      name: 'imagen_31121',
      alt: 'Show Image 9',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_31121.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_31121.jpg',
    },
    {
      name: 'imagen_42496',
      alt: 'Show Image 10',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_42496.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_42496.jpg',
    },
    {
      name: 'imagen_95763',
      alt: 'Show Image 11',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_95763.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_95763.jpg',
    },
    {
      name: 'imagen_19109',
      alt: 'Show Image 12',
      href: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_19109.jpg',
      src: 'https://www.laventanaweb.com/pics/imgsHome/large/imagen_19109.jpg',
    },
  ];

const t = useTranslations('Show')

  return (
    <section id='shows' className='bg-black flex flex-wrap uppercase'>
      <TextHeading
        color='white'
        level={levelText}
        className=' text-white text-base sm:text-3xl md:p-14 py-9 px-2 text-center tracking-wide w-full'
      >{t('title')}
      </TextHeading>
      <div
        className={`
        grid
        grid-cols-2
        sm:grid-cols-4
        place-content-stretch
        `}
      >
        <ShowsClient images={galleryItems} />
      </div>
    </section>
  );
};
