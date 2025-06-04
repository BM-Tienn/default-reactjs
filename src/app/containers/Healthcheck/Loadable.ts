/**
 *
 * Asynchronously loads the component for Healthcheck
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Healthcheck = lazyLoad(
  () => import('./index'),
  module => module.Healthcheck,
);
