import { ServiceSchema } from '@/components/services/schemas/services-schema';
import { z } from 'zod';

export const mockService: z.infer<typeof ServiceSchema>[] = [
  {
    id: 'aljibe',
    name: 'aljibeImg',
    alt: 'Aljibe Tango',
    src: '/footer/aljibetango.png',
    href: 'https://aljibetango.com/es',
    mobile: true,
    desktop:true
  },
  {
    id: 'tango',
    name: 'gala tango',
    alt: 'Aljibe Tango',
    src: '/footer/galatango.png',
    href: 'https://galatango.com/es',
    mobile: true,
    desktop:true
  },
  {
    id: 'angelo',
    name: 'michel angelo',
    alt: 'Aljibe Tango',
    src: '/footer/michelangelo.png',
    href: 'https://michelangeloweb.com/',
    mobile: true,
    desktop:true
  },
  {
    id: 'escuela',
    name: 'escuela de tango',
    alt: 'Aljibe Tango',
    src: '/footer/escuela-de-tango.png',
    href: 'https://player.vimeo.com/video/386222955?autoplay=1&loop=1&autopause=0',
    mobile: true,
    desktop:true
  },
  {
    id: 'cava',
    name: 'cava vino',
    alt: 'Aljibe Tango',
    src: '/footer/cava.png',
    href: 'https://player.vimeo.com/video/851764714?autoplay=1&loop=1&autopause=0',
    mobile: true,
    desktop:true
  },
  {
    id: 'roof',
    name: 'roof top',
    alt: 'Aljibe Tango',
    src: '/footer/rooftop.png',
    href: 'https://player.vimeo.com/video/386224584?autoplay=1&loop=1&autopause=0',
    mobile: false,
    desktop: true
  },
  {
    id: 'dante',
    name: 'dante bar',
    alt: 'Aljibe Tango',
    src: '/footer/dante-bar.png',
    href: 'https://player.vimeo.com/video/851778001?autoplay=1&loop=1&autopause=0',
    mobile: true,
    desktop:true
  },
];
