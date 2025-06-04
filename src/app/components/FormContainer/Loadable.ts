/**
 *
 * Asynchronously loads the component for FormContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FormContainer = lazyLoad(
  () => import('./index'),
  module => module.FormContainer,
);
