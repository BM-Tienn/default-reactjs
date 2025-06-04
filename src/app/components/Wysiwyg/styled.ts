import { FlexRowBetween } from './../../../styles/global-styles';
/**
 *
 * styled Wysiwyg
 *
 */
import styled, { css } from 'styled-components/macro';

export const WysiwygWrapper = styled.div<{
  minHeight?: number | string;
  maxHeight?: number | string;
  border?: boolean;
}>`
  width: 100%;
  min-width: 400px;
  background-color: #fff;
  ${props =>
    props.border &&
    css`
      border: 1px solid var(--color-light);
      border-radius: 4px;
    `};
  min-height: ${props => props.minHeight && props.minHeight};
  .codex-editor {
    max-height: ${props => props.maxHeight && props.maxHeight};
    ${props =>
      props.maxHeight &&
      css`
        overflow: auto;
        overflow-x: hidden;
        padding-left: 10px;
      `};
    .icon {
      width: 0.75em;
      height: 0.75em;
    }
    .ce-settings__button {
      width: 17px;
      height: 17px;
    }
    .ce-settings__default-zone:not(:empty) {
      ${FlexRowBetween};
      justify-content: space-around;
    }
  }
`;

export const FroalaWrapper = styled.div`
  margin-bottom: 24px;
  height: 100%;
  .fr-box {
    height: 100%;
  }
  .fr-wrapper {
    height: calc(100% - 140px);
    min-height: 250px;
  }
`;

export const SunEditorWrapper = styled.div`
  .sun-editor {
    height: 100%;
  }
`;
