/**
 *
 * Asynchronously loads the component for SvgContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SvgContainer = lazyLoad(
  () => import('./index'),
  module => module.SvgContainer,
);
