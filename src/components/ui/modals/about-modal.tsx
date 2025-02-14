'use client';

import { useState } from 'react';

import { Modal } from '@/components/ui/modals/modal';
import { useTranslations } from 'next-intl';

export const AboutUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations('Ui')

  const content = (
    <>
      <p>
        Somos más que una empresa, somos una gran familia que desde 1980 
        viene manteniendo las costumbres de nuestros antepasados que son 
        importantes para la empresa.
      </p>
      <p>
        Nuestros valores y costumbres familiares son el corazón de todo lo que
        hacemos, desde la gastronomía, el show, la selecciones de nuestros
        proveedores y materias primas, nos comprometemos también con nuestra
        comunidad cuidando el medioambiente y participando de acciones
        comunitarias.
      </p>
      <p>
        Esperemos que al visitarnos se sientan también parte de nuestra familia!
      </p>
      <p>
        Honestidad y transparencia: Comprometidos a ser transparentes en todas
        nuestras interacciones con los clientes y a actuar con honestidad en
        todo momento.
      </p>
      <p>
        Servicio al cliente personalizado: Valoramos a cada cliente como parte
        de nuestra familia y nos esforzamos por brindar un servicio
        personalizado y atento a sus necesidades individuales.
      </p>
      <p>
        Calidad y excelencia: Nos dedicamos a ofrecer productos/servicios de la
        más alta calidad y nos esforzamos por mejorar las experiencias día a
        día.
      </p>
      <p>
        Responsabilidad social: Nos comprometemos a ser buenos ciudadanos
        corporativos y a contribuir positivamente a nuestra comunidad a través
        de diversas iniciativas sociales.
      </p>
      <p>
        Trabajo en equipo y colaboración: Fomentamos un ambiente de trabajo
        colaborativo donde todos los miembros del equipo son valorados y se les
        anima a contribuir con sus ideas y habilidades únicas.
      </p>
      <p>
        Respeto y confianza mutua: Nos tratamos entre nosotros y a nuestros
        clientes con respeto y confianza, creando relaciones duraderas basadas
        en la integridad y el respeto mutuo.
      </p>
      <p>
        Tradición y compromiso: Nos enorgullecemos de nuestras raíces familiares
        y estamos comprometidos a mantener las tradiciones y valores que nos han
        guiado a lo largo de los años.
      </p>
    </>
  );

  return (
    <Modal
      triggerText={t('about_us.modal_aboutus')}
      content={content}
      title={t('about_us.modal_aboutus')}
      imageSrcTop={'/modal/familia_tango.png'}
      imageAltTop={'about us modal image'}
      imageSrcBottom={'/rse/tango-show-rse.png'}
      imageAltBottom={'flag argentine modal image'}
      bothImage={true}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
