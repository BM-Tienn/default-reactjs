/**
 *
 * styled PrivacyPolicies
 *
 */
import styled from 'styled-components/macro';

export const PrivacyPoliciesWrapper = styled.div`
  padding: 48px;
  width: 100%;
  height: 100%;
  overflow: auto;
  max-width: 920px;
  margin: 0 auto;
  * {
    color: #fff;
    text-align: justify;
  }
  ul,
  li {
    list-style: unset;
  }
  .text-center {
    text-align: center;
  }
  .mt-0 {
    margin-top: 0 !important;
  }
  .block {
    padding: 48px;
    border-bottom: 1px solid #ffffff50;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    &-item {
      padding: 24px 0;
      margin: 24px;
      border-bottom: 1px solid #ffffff50;
      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
    }
  }
`;
