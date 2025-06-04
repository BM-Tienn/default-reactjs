import styled from 'styled-components/macro';
import { FlexRowCenter, BackgroundCover } from 'styles/global-styles';

interface AvatarProps {
  size?: number | string;
  bgUrl: string | null | undefined;
  bgColor?: string;
}

export const AvatarWrapper = styled.div<AvatarProps>`
  ${BackgroundCover};
  width: ${props => (props.size ? props.size + 'px' : '32px')};
  height: ${props => (props.size ? props.size + 'px' : '32px')};
  border-radius: 50%;
  flex: 0 0 auto;
  ${FlexRowCenter};
  background-color: ${props => (!props.bgUrl ? props.bgColor : 'unset')};
  border: 1px solid var(--color-light);
`;
