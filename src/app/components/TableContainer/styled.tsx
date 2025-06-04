import styled from 'styled-components/macro';

export const TableWrapper = styled.div`
  // width: 100%;
  // height: 100%;
  // .cell-packageType {
  //   border-radius: 4px;
  //   padding: 4px 8px;
  //   width: max-content;
  //   display: block;
  //   color: #fff;
  //   background: var(--color-dark-2);
  //   &.One-Time {
  //     background: var(--color-theme);
  //   }
  // }
  // .cell-couponCode {
  //   margin-right: 4px;
  //   & ~ i {
  //     opacity: 0.5;
  //   }
  // }
  // .cell-time {
  //   color: var(--color-smoke);
  // }
  // .cell-accountStatus {
  //   color: #fff;
  //   border-radius: 4px;
  //   padding: 4px 8px;
  //   &.Active {
  //     background: var(--color-green);
  //   }
  //   &.Inactive {
  //     background: var(--color-red);
  //   }
  // }
  // .ant-table-pagination {
  //   &.ant-pagination {
  //     .ant-pagination-total-text {
  //       color: rgba(255, 255, 255, 0.5);
  //     }
  //     .ant-pagination-prev {
  //       margin-right: 8px;
  //       .ant-pagination-item-link {
  //         color: rgba(255, 255, 255, 0.5);
  //         border-radius: 6px;
  //         background: var(--color-dark-2);
  //         border: none;
  //       }
  //     }
  //     .ant-pagination-next {
  //       margin-left: 8px;
  //       .ant-pagination-item-link {
  //         color: rgba(255, 255, 255, 0.5);
  //         border-radius: 6px;
  //         background: var(--color-dark-2);
  //         border: none;
  //       }
  //     }
  //     .ant-pagination-item {
  //       background-color: unset;
  //       border: none;
  //       a {
  //         color: rgba(255, 255, 255, 0.5);
  //       }
  //       &-active a {
  //         color: #d1005c;
  //       }
  //       &-ellipsis {
  //         color: rgba(255, 255, 255, 0.5);
  //       }
  //     }
  //     .ant-select-selector {
  //       background: var(--color-dark-2);
  //       border: none;
  //       border-radius: 6px;
  //       color: rgba(255, 255, 255, 0.5);
  //       transition: all 0.15s ease-out;
  //       &:hover {
  //         color: #fff;
  //       }
  //     }

  //     .anticon {
  //       color: #fff;
  //     }
  //   }
  // }

  // .ant-table {
  //   color: rgba(255, 255, 255, 0.8);
  //   box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 20%);
  //   border: none;
  //   background: unset;
  //   overflow: hidden;
  //   border-radius: 5px;
  //   .ant-table-footer {
  //     background: rgba(255, 255, 255, 0.09);
  //   }

  //   .ant-table-cell {
  //     font-weight: 400;
  //     &.ant-table-cell-with-append {
  //       display: flex;
  //       align-items: center;
  //       .name-after-collapse {
  //         margin: 0;
  //         margin-left: 8px;
  //       }
  //       .icon {
  //         transition: all 0.25s;
  //         cursor: pointer;
  //         color: rgba(0, 0, 0, 0.54);
  //       }
  //       .table-expand__icon {
  //         transform: translateY(3px) rotate(45deg);
  //       }
  //       .table-collapse__icon {
  //         transform: translateY(0) rotate(0);
  //       }
  //     }
  //   }

  //   td.ant-table-column-sort {
  //     background: inherit;
  //   }

  //   .ant-table-tbody {
  //     .ant-table-cell-fix-right,
  //     .ant-table-cell-fix-left {
  //       background: #3c3939;
  //     }
  //     > tr {
  //       > td {
  //         padding: 10px 8px;
  //         border-bottom: none;
  //       }
  //       &.ant-table-placeholder:hover > td {
  //         background: unset;
  //       }
  //       &.ant-table-row:hover {
  //         > td {
  //           background: unset;
  //         }
  //         .ant-table-cell-fix-right,
  //         .ant-table-cell-fix-left {
  //           background: #3c3939;
  //         }
  //       }
  //       &.ant-table-row-selected > td {
  //         background: unset;
  //         border-color: unset;
  //       }
  //     }
  //     background: rgba(255, 255, 255, 0.09);
  //     tr {
  //       &:nth-child(even) {
  //         background: rgba(255, 255, 255, 0.05);
  //       }
  //     }
  //     .ant-table-row.ant-table-row-selected > .ant-table-cell {
  //       background: inherit;
  //     }
  //   }

  //   .ant-table-thead {
  //     background: rgba(255, 255, 255, 0.05);
  //     > tr
  //       > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before,
  //     > tr
  //       > td:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  //       display: none;
  //     }
  //     .ant-table-cell-fix-right,
  //     .ant-table-cell-fix-left {
  //       background: #3c3939;
  //     }
  //     .ant-table-cell {
  //       font-weight: 500;
  //       color: rgba(255, 255, 255, 1);
  //     }

  //     > tr > th {
  //       /* padding: 12px 8px; */
  //       background: rgba(255, 255, 255, 0.05);
  //       border: none;
  //       color: unset;
  //       &:empty {
  //         padding: 0;
  //       }
  //     }
  //   }

  //   .ant-row-table {
  //     &:nth-child(odd) {
  //       background: #fafafb;
  //       box-shadow: 0.5px 0px 0px rgba(0, 0, 0, 0.25);
  //     }
  //   }

  //   .ant-table-cell-fix-left,
  //   .ant-table-cell-fix-right {
  //     background: unset;
  //   }

  //   .ant-empty-normal {
  //     .ant-empty-description {
  //       color: rgba(255, 255, 255, 0.75);
  //     }
  //   }

  //   /* table > thead > tr:first-child {
  //     th:first-child {
  //       border-top-left-radius: 12px;
  //     }
  //     th:last-child {
  //       border-top-right-radius: 12px;
  //     }
  //   } */
  // }

  // .virtual-table .ant-table-container:before,
  // .virtual-table .ant-table-container:after {
  //   display: none;
  // }
  // .virtual-table-cell {
  //   box-sizing: border-box;
  //   padding: 16px;
  //   border-bottom: 1px solid #e8e8e8;
  //   background: #fff;
  // }
  // [data-theme='dark'] .virtual-table-cell {
  //   box-sizing: border-box;
  //   padding: 16px;
  //   border-bottom: 1px solid #303030;
  //   background: #141414;
  // }
`;
