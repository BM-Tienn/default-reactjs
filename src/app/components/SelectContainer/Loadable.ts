/**
 *
 * Asynchronously loads the component for SelectContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SelectContainer = lazyLoad(
  () => import('./index'),
  module => module.SelectContainer,
);
