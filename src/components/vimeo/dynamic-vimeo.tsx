import dynamic from 'next/dynamic';

const Loading = () => <div>cargando...</div>;

export const DynamicVimeoHome = dynamic(
  () => import('./video-home').then((mod) => mod.VimeoVideo),
  {
    loading: Loading,
    ssr: true,
    loadableGenerated: {
      webpack: () => [require.resolve('./video-home')],
    },
  }
);