/**
 *
 * Asynchronously loads the component for Avatar
 *
 */

import { lazyLoad } from 'utils/loadable';
import * as React from 'react';
import { Space, Skeleton } from 'antd';

export const Avatar = lazyLoad(
  () => import('./index'),
  module => module.Avatar,
  {
    fallback: (
      <Space>
        <Skeleton.Avatar active size={'large'} shape={'circle'} />
      </Space>
    ),
  },
);
