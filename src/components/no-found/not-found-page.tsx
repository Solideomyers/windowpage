'use client';

import { useEffect } from 'react';
import Error from 'next/error';
import { useRouter } from '@/i18n/routing';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // window.location.reload();
      router.refresh();
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='bg-black w-full h-full flex items-center justify-center'>
      <Error statusCode={404} />
    </div>
  );
}
