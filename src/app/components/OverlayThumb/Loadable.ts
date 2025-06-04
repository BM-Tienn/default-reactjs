/**
 *
 * Asynchronously loads the component for OverlayThumb
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OverlayThumb = lazyLoad(
  () => import('./index'),
  module => module.OverlayThumb,
);
