import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card';
import { fontMontserrat } from '@/fonts/fonts';
import { cn } from '@/lib/utils';

interface ShowdetailsProps {
  className?: string;
  show: string;
}

export const ShowDetails = ({ className, show }: ShowdetailsProps) => {
  return (
    <Card
      className={cn(
        'animate-fade-in border-none rounded-none bg-gradient-to-r from-[#F5E286] via-[#F5E286] to-[#E8BE6C] pb-10',
        className,
        fontMontserrat.className
      )}
    >
      <CardHeader>
        <CardTitle className='text-xl sm:text-2xl font-extrabold uppercase text-center'>
          detalle del show
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4 sm:space-y-6 text-sm sm:text-base'>
        <div>
          <h3 className='font-bold mb-2 uppercase'>{show}</h3>
          <p className='text-xs font-bold text-balance sm:text-sm italic'>
            Beneficio: Un vino espumante y ubicación preferencial gratis.
          </p>
        </div>
        <div className='text-balance'>
          <div>
            <h3 className='font-bold text-sm uppercase'>
              degustación de 19:00 a 20:00hs
            </h3>
            <h4 className='font-semibold uppercase'>menú de 3 pasos</h4>
            <p className='text-sm'>
              Cocina internacional. Gran variedad de Entradas, Platos
              Principales, exclusiva parrilla al carbón, Pastas y Panadería
              caseras, variedad de Postres. Bebidas incluidas:
              varietales,jugos,cerveza, gaseosa, agua mineral.
            </p>
          </div>

          <div className='flex flex-col '>
            <h3 className='font-bold uppercase'>traslado</h3>
            <span>
              Centro: Ida y vuelta.
            </span>
            <span>
              Zona Palermo: Solo drop-off después del show.

            </span>
          </div>
        </div>

        <div>
          <h3 className='font-bold uppercase'>
            tradicional show de tango y folclore
          </h3>
          <p className='text-balance'>
            Dos Orquestas típicas: La Gran Orquesta de Juan D&aposArienzo y un
            quinteto. Acompañan dos cantantes de tango, cinco parejas de baile.
            Música del Altiplano y un ballet Folclórico con show de boleadoras.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
