import { VideoSrc } from '@/components/vimeo/video-src';

export const VimeoVideo = () => {
  const videoConfig = {
    videoId: '386224073',
    autoplay: true,
    loop: true,
    muted: true,
    fallbackImage: '/preload.png',
  };

  return (
    <section
      id='video'
      className='bg-black relative'
      aria-label='Video promocional'
    >
      <div className='aspect-video w-full'>
        <VideoSrc {...videoConfig} />
      </div>
    </section>
  );
};
