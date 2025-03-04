import { CustomAvatar } from '@/components/custom/custom-avatar';
import { Schedule } from '@/components/icons';
import { MobileMenu } from '@/components/navbar/mobile/mobile-menu';
import { SwitchLanguage } from '@/components/ui/language/btn-language';

const NavMobile = () => {
  return (
    <div
      className={`
        grid
    grid-cols-4
    w-full
    grid-flow-col-dense
    place-content-center
    place-items-center
    gap-0
    sm:hidden
    `}
    >
      <div
        className={`
        grid
        place-items-center
        col-span-1
        col-start-1
        min-h-24
        min-w-20
        bg-pallete-gold
        group
        `}
      >
        <Schedule
          color='pallete-title'
          className={`
            group-hover:fill-white
            h-full
            transition-colors
            delay-300
            `}
        />
      </div>
      <div
        className={`
        col-span-1
        `}
      >
        <SwitchLanguage />
      </div>
      <div
        className={`
        grid
        place-items-center
        place-content-center
        h-full
        w-full
        col-span-1
        col-start-3
        p-4
        max-w-[80px]
        border-l-1 
        border-pallete-anexo/60
        `}
      >
        <CustomAvatar
          src={'/btn_whatsapp.png'}
          alt='icon whatsapp'
          width={300}
          height={300}
          extend='border-l-1 border-pallete-anexo/60'
        />
      </div>
      <MobileMenu />
    </div>
  );
};
export default NavMobile;
