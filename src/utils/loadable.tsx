import React, { Suspense, lazy } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface Opts {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>,
>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = {
    fallback: (
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 18 }} spin />}
        spinning
      />
    ),
  },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then(module => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return function AsyncComponent(props: React.ComponentProps<U>): JSX.Element {
    return (
      <Suspense fallback={opts.fallback!}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};
