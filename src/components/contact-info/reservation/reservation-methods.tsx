
import Link from 'next/link';

import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons';

import { IconSvgProps } from '@/types';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface ContactMethod {
  type: 'phone' | 'whatsapp' | 'email';
  href: string;
  label: string;
  Icon: React.FC<IconSvgProps>;
}

export const contactMethods: ContactMethod[] = [
  {
    type: 'phone',
    href: 'tel:541132203300',
    label: '(+5411) 3220-3300',
    Icon: PhoneIcon,
  },
  {
    type: 'whatsapp',
    href: 'https://api.whatsapp.com/send?phone=5491168759015',
    label: '(+549) 11-6875-9015',
    Icon: WhatsAppIcon,
  },
  {
    type: 'email',
    href: 'mailto:info@familiatangoshow.com',
    label: 'info@laventanaweb.com',
    Icon: MailIcon,
  },
];

export const ContactMethodLink: React.FC<ContactMethod> = ({
  href,
  label,
  Icon,
  type,
}) => {
  const iconClasses = {
    phone: 'fill-white',
    whatsapp: 'stroke-white fill-none font-bold',
    email: 'fill-white font-bold stroke-black',
  };

const pathname = usePathname()

  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Contactar por ${type}`}
      className={cn(
        `flex 
        gap-2 
        w-full 
        justify-center 
        items-center
        lg:justify-start
        font-montserrat
        text-responsive-base
        hover:text-gray-300
        transition-colors
        duration-300`,
        pathname?.includes('/menu') && 'lg:justify-center',
      )}
    >
      <Icon width={20} className={iconClasses[type]} />
      {label}
    </Link>
  );
};
