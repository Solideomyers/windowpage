import React from 'react';
import Link from 'next/link';
import { Button } from "@heroui/react";

export interface SocialLink {
  platform: string;
  url: string;
  Icon: React.ComponentType<{ className?: string; width?: number }>;
  ariaLabel: string;
}

export const SocialMediaButton: React.FC<
  Omit<SocialLink, 'ariaLabel'> & { ariaLabel?: string }
> = ({ platform, url, Icon, ariaLabel }) => (
  <Link
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={ariaLabel || `Seguir en ${platform}`}
  >
    <Button
      isIconOnly
      radius='full'
      variant='bordered'
      className={`
        hover:bg-white/20 
        ease-linear 
        transition-colors 
        group
      `}
    >
      <Icon
        className={`
          fill-white 
          group-hover:fill-pallete-gold 
          transition-colors 
          duration-300
        `}
        width={24}
      />
    </Button>
  </Link>
);
