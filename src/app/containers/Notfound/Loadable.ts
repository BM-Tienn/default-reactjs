/**
 *
 * Asynchronously loads the component for Pricing
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Notfound = lazyLoad(
  () => import('./index'),
  module => module.Notfound,
);
