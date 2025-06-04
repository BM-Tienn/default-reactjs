import styled, { createGlobalStyle, css } from 'styled-components/macro';

export const Flex = css`
  display: flex;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

export const FlexRowCenter = css`
  ${Flex};
  justify-content: center;
  align-items: center;
`;

export const FlexRowStart = css`
  ${Flex};
  justify-content: flex-start;
  align-items: center;
`;

export const FlexRowEnd = css`
  ${Flex};
  justify-content: flex-end;
  align-items: center;
`;

export const FlexRowBetween = css`
  ${Flex}
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowAround = css`
  ${Flex}
  justify-content: space-around;
  align-items: center;
`;

export const FlexColCenter = css`
  ${FlexCol};
  ${FlexRowCenter}
`;

export const FlexColStart = css`
  ${FlexCol};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FlexColEnd = css`
  ${FlexCol};
  justify-content: flex-end;
  align-items: flex-end;
`;

export const FlexColBetween = css`
  ${FlexCol};
  justify-content: space-between;
  align-items: baseline;
`;

export const BackgroundCover = css<{ bgUrl: string | null | undefined }>`
  background-image: url(${props => props.bgUrl && props.bgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackgroundContain = css`
  ${BackgroundCover};
  background-size: contain;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexRowCenter};
`;

export const GlobalStyle = createGlobalStyle`${css`
  body {
    background-color: var(--color-dark);
  }
`}`;
