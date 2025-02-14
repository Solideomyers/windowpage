export const Review: React.FC<{ text: string }> = ({ text }) => (
  <article className='h-[170px] flex items-center text-left py-4 mx-2 text-ellipsis animate-fade-right animate-duration-900 animate-delay-200'>
    <p>{text}</p>
  </article>
);