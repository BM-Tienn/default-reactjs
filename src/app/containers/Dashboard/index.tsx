/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { dashboardSaga } from './saga';
import { DashboardContainer } from './styled';

interface Props {}

export const Dashboard = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dashboardSaga });

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>

      <DashboardContainer className="w-full h-full flex flex-col">
        <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>
          🎉 Dashboard đã hiển thị thành công!
        </h1>
        <div>
          <h2>Thông tin cơ bản:</h2>
          <p>Đây là trang Dashboard của ứng dụng</p>
          <p>Current URL: {window.location.pathname}</p>
          <p>Timestamp: {new Date().toLocaleString()}</p>
        </div>
        <div>
          <h2>Test Content:</h2>
          <p>111111111111111</p>
          <p>
            Nếu bạn thấy được nội dung này, có nghĩa là component đã hoạt động
            bình thường.
          </p>
        </div>
      </DashboardContainer>
    </>
  );
});
