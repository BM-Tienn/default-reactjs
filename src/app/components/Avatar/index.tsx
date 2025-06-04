/**
 *
 * Avatar
 *
 */
import React, { memo } from 'react';
import { AvatarWrapper } from './styled';

interface Props {
  icon?: React.ReactNode;
  size: number;
  bgUrl: string | null | undefined;
  bgColor?: string;
  className?: string;
}

export const Avatar = memo((props: Props) => {
  return (
    <AvatarWrapper
      className={props.className}
      size={props.size}
      bgUrl={props.bgUrl}
      bgColor={props.bgColor}
    >
      {props.icon}
    </AvatarWrapper>
  );
});
