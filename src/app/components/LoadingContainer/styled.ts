/**
 *
 * styled LoadingContainer
 *
 */
import styled from 'styled-components/macro';

export const LoadingContainerWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  .ant-spin {
    color: #d1005c;
    &-container {
      width: 100%;
      height: 100%;
    }
    &-blur {
      &:after {
        display: none;
      }
    }
    &-nested-loading {
      width: 100%;
      height: 100%;
      > div > .ant-spin {
        width: 100%;
        height: 100%;
        max-height: 100%;
      }
    }
  }
`;
