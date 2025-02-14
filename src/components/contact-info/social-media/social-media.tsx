import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  VimeoIcon,
} from '@/components/icons';
import {
  SocialLink,
  SocialMediaButton,
} from '@/components/contact-info/social-media/social-media-btn';

export const SocialMedia: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/laventanatango.ba',
      Icon: InstagramIcon,
      ariaLabel: 'Seguir en Instagram',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/laventana.barriodetango/',
      Icon: FacebookIcon,
      ariaLabel: 'Seguir en Facebook',
    },
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/watch?v=7WcclFLFX1g',
      Icon: YoutubeIcon,
      ariaLabel: 'Seguir en YouTube',
    },
    {
      platform: 'Vimeo',
      url: 'https://vimeo.com/386224073',
      Icon: VimeoIcon,
      ariaLabel: 'Seguir en Vimeo',
    },
    {
      platform: 'TikTok',
      url: 'https://www.tiktok.com/@laventana.ba',
      Icon: TiktokIcon,
      ariaLabel: 'Seguir en TikTok',
    },
  ];

  const pathname = usePathname();
  return (
    <section
      aria-labelledby='social-media-heading'
      className={`
        flex 
        flex-col 
        items-center
        font-montserrat
      `}
    >
      {!pathname?.includes('/menu') && (
        <h2
          id='social-media-heading'
          className={`
          uppercase 
          text-white 
          w-full
          my-2 
          text-responsive-base
          text-center 
          font-bold
          lg:text-left
        `}
        >
          Seguinos en
        </h2>
      )}

      <div
        className={`
          p-2 
          grid 
          grid-flow-col
          auto-cols-auto 
          gap-2 
          mb-6
        `}
        role='group'
        aria-label='Redes Sociales'
      >
        {socialLinks.map(({ platform, url, Icon, ariaLabel }) => (
          <SocialMediaButton
            key={platform}
            platform={platform}
            url={url}
            Icon={Icon}
            ariaLabel={ariaLabel}
          />
        ))}
      </div>
      {!pathname?.includes('menu') && (
        <figure
          className='
          flex 
          justify-center 
          max-w-[250px] 
          w-full
        '
          aria-label='Bandera Argentina y Logo'
        >
          <Image
            src='/info/tango-show-argentina-flag.png'
            width={235}
            height={200}
            style={{ width: 'auto' }}
            loading='lazy'
            alt='Logo de Show de Tango con Bandera Argentina'
            className={`
            object-contain 
            hover:scale-105
            transition-transform 
            duration-300
          `}
          />
        </figure>
      )}
    </section>
  );
};
