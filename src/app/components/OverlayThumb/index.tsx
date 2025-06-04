/**
 *
 * OverlayThumb
 *
 */
import React, { memo } from 'react';
import { OverlayThumbWrapper } from './styled';

interface Props {
  icon?: React.ReactNode;
  label?: string;
  children?: React.ReactNode;
}

export const OverlayThumb = memo(({ icon, label, children }: Props) => {
  return (
    <OverlayThumbWrapper className="absolute backdrop-blur-sm rounded-[12px] bg-black/75 top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-[8px] z-10">
      <div className="text-[2rem] text-[var(--color-yellow)]">{icon}</div>
      {label && <div className="text-center">{label}</div>}
      {children}
    </OverlayThumbWrapper>
  );
});
