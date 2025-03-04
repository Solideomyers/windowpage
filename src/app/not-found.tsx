import BaseLayout from '@/components/modules/layouts/base-layout';
import NotFoundPage from '@/components/no-found/not-found-page';
import { routing } from '@/i18n/routing';


export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
