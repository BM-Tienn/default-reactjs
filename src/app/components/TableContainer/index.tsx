/**
 *
 * TableContainer
 *
 */
import React, { memo } from 'react';
import { TableWrapper } from './styled';
import { Table, TablePaginationConfig } from 'antd';
import { objectType } from 'types';

interface LocaleConfig {
  filterConfirm?: string;
  filterReset?: string;
  emptyText?: string;
}

interface I_Table {
  tableLayout?: 'auto' | 'fixed';
  bordered?: boolean;
  loading?: boolean;
  footer?: (currentPage: any) => any;
  locale?: LocaleConfig;
  rowKey: ((record: any) => any) | string;
  pagination?: TablePaginationConfig;
  showHeader?: boolean;
  size?: 'middle' | 'small';
  scroll?: {
    x?: number | string | true;
    y?: number | string;
    scrollToFirstRowOnChange?: boolean;
  };
  rowClassName?: (record: objectType, index?: number) => string;
  onRow?: (record: any, index?: number) => any;
  rowExpandable?: (record: any) => React.ReactNode;
  rowSelection?: any;
  onChange?: (
    pagination?: TablePaginationConfig,
    filters?: any,
    sorter?: any,
    extra?: any,
  ) => any;
}

interface Props extends I_Table {
  style?: React.CSSProperties;
  data: objectType[] | [];
  columns: any;
}

export const TableContainer = memo((props: Props) => {
  const { data, style, pagination, ...tableProps } = props;
  return (
    <TableWrapper>
      <Table
        {...tableProps}
        pagination={{ ...{ hideOnSinglePage: false }, ...(pagination || {}) }}
        style={style}
        dataSource={data}
      />
    </TableWrapper>
  );
});
