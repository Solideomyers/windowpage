import { useSiteConfig } from "@/config/useSiteConfig";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLinksProps {
  variant?: 'mobile' | 'desktop' | 'tablet';
  onLinkClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ 
  variant = 'desktop', 
  onLinkClick 
}) => {

const {navItems} = useSiteConfig()
  // console.log(navItems)
  const t = useTranslations('Navigation')
  
  const getStylesByVariant = () => {
    const styles = {
      mobile: 'flex flex-col',
      tablet: 'grid grid-flow-col',
      desktop: 'flex items-center'
    };
    return styles[variant];
  };

  const { handleSmoothScroll } = useSmoothScroll();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    handleSmoothScroll(id);
  };

  return (
    <ul className={getStylesByVariant()}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link 
            href={item.href}
            prefetch
            onClick={(e) => { handleClick(e, `${item.label}`); onLinkClick && onLinkClick(); }}
            className={`
              ${variant === 'mobile' ? 'block' : 'inline-block'}
              hover:bg-pallete-gold
            `}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};