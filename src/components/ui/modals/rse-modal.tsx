'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/modals/modal';

export const RseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const content = (
    <div className='flex flex-col gap-2 font-montserrat'>
      <p className='transition-opacity duration-300 ease-in-out'>
        <span className='font-bold mr-2'>Familia Tango Show:</span>
        Más de 40 años promoviendo cultura y compromiso social
      </p>
      <p className='transition-all duration-300 ease-in-out text-balance'>
        En Familia Tango Show, llevamos más de cuatro décadas conservando
        nuestro paseo para el mundo. Como embajadores permanentes de la
        identidad cultural argentina. Nuestra responsabilidad trasciende el
        arte: trabajamos con convicción y pasión para generar impacto
        positivamente en la sociedad y preservar nuestra auténtica cultura.
      </p>

      <div className='transition-all duration-300 ease-in-out'>
        <h4 className='font-bold'>Programas Educativos</h4>
        <p>
          Con el objetivo de acercar la riqueza de nuestra cultura a las nuevas
          generaciones, invitamos a las escuelas de todo el país a vivir una
          experiencia que consiste en:
        </p>
        <ul className='list-disc pl-6 mt-2 space-y-1'>
          <li>Palabras de bienvenida y enseñansa cultural.</li>
          <li>Visitas de nuestros salones.</li>
          <li>Clase Tango con nuestros bailarines profesionales</li>
          <li>Entrega de diploma</li>
          <li>Snack</li>
        </ul>{' '}
      </div>
      <div>
        <h4 className='font-bold'>Iniciativa Solidaria Gratuita</h4>
        <p className='transition-all duration-300 ease-in-out'>
          En Familia Tango Show creemos en la responsabilidad de proyectar mas
          allá de lo alto ofrecemos en nuestras tablas un flujo de energía para
          el alma.
        </p>
      </div>
      <div>
        <h4 className='font-bold'>Nuestro Compromiso</h4>
        <p className='transition-all duration-300 ease-in-out'>
          Nos enorgullece ser un puente de ayuda para quienes lo necesitan,
          impulsados por la convicción que juntos podemos marcar la diferencia.
          En Familia Tango Show, nuestra misión es preservar nuestra cultura
          mientras construimos un futuro solidario para todos los argentinos.
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      triggerText='rse'
      content={content}
      title={'responsabilidad social empresarial'}
      imageSrcTop={'/rse/tango-show-rse.png'}
      imageAltTop={'RSE modal image'}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
