"use client";

import { useEffect } from "react";
import {Button} from "@/components/ui/shadcn/button";
import { useTranslations } from "next-intl";
import { MenuBackground } from "@/components/menu-page/menu-background";
import { ButtonRadius, ButtonVariant } from "@/components/ui/enums/button-variants.enum";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error({error});
  }, [error]);

  return (
    <div className='absolute bg-black w-full h-full flex items-center justify-center'>
      <MenuBackground />
      <div className='z-50 max-w-[400px] flex-grow mx-4 p-8 font-montserrat rounded-lg border bg-white border-gray-300 shadow'>
        <h2 className='font-bold text-xl mb-4'>{t('title')}</h2>
        <p className='mb-6'>{t('help')}</p>
        <Button
          variant={ButtonVariant.Default}
          radius={ButtonRadius.Md}
          className="font-rubik tracking-wide"
          onClick={() => reset()}>{t('actions.reload')}
        </Button>
      </div>
    </div>
  );
}