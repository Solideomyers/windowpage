import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: string;
  fontName?: string;
}

export const TextHeading: React.FC<HeadingProps> = ({
  level = 6,
  children,
  className = '',
  color = 'inherit',
  fontSize = '',
  fontName = 'font-rubik',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const defaultSizes = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  return (
    <Tag
      className={`
        ${defaultSizes[level]} 
        text-center 
        ${fontName} 
        ${className}
      `}
      style={{
        color,
        ...(fontSize ? { fontSize } : {}),
      }}
    >
      {children}
    </Tag>
  );
};
