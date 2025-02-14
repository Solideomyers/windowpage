import { ServiceSchema } from '@/components/services/schemas/services-schema';
import { StaticImageData } from 'next/image';
import { SVGProps } from 'react';
import { z } from 'zod';

export type Service = z.infer<typeof ServiceSchema>;
export interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  extend?: string;
}

export interface ResponsiveComponentProps {
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  desktop?: React.ReactNode;
}

export interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  fill?: string;
};

export interface ImageOptimizationProps {
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}
