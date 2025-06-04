/**
 *
 * Asynchronously loads the component for ContentEditable
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ContentEditable = lazyLoad(
  () => import('./index'),
  module => module.default,
);
