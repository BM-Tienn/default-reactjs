import styled from 'styled-components';

export const ContentEditableWrapper = styled.div`
  .EditTableContent {
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 1px solid transparent;
    transition: var(--transition-smooth);
    border-radius: 8px;
    line-height: 1;
    overflow: hidden;
    max-width: 250px;
    .edit {
      line-height: normal;
      padding: 8px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-wrap: nowrap;
      width: 100%;
      &:focus,
      &:focus-visible {
        outline: none;
        border: none;
      }
    }

    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      padding: 0 16px;
      border: 1px solid var(--color-gray-2);
    }
  }
`;
