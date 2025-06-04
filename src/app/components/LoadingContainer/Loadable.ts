/**
 *
 * Asynchronously loads the component for LoadingContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoadingContainer = lazyLoad(
  () => import('./index'),
  module => module.LoadingContainer,
);
