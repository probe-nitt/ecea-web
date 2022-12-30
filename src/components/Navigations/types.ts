import { ReactNode } from 'react';

export type NavindicatorProps = {
  isActive: boolean
  bg: string
};

export type NavitemProps = {
  label: string,
  path: string,
  element: ReactNode,
  bgColor?: string,
  isHref?: boolean | false
};
