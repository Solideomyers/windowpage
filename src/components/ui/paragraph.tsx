import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
  color = '',
  fontSize = '',
}) => {
  return (
    <p
      className={`text-center  text-sm px-4 ${className}`}
      style={{ color, fontSize }}
    >
      {children}
    </p>
  );
};
