/**
 *
 * LoadingContainer
 *
 */
import React, { memo, useMemo } from 'react';
import { LoadingContainerWrapper } from './styled';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface Props {
  loading?: boolean;
  description?: string;
  children?: React.ReactNode;
}

export const LoadingContainer = memo(
  ({ loading = false, description = '', children }: Props) => {
    const antIcon = useMemo(
      () => <LoadingOutlined style={{ fontSize: 24 }} spin />,
      [],
    );
    return (
      <LoadingContainerWrapper>
        <Spin indicator={antIcon} tip={description} spinning={loading}>
          {children}
        </Spin>
      </LoadingContainerWrapper>
    );
  },
);
