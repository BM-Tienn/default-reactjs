/**
 *
 * Asynchronously loads the component for DialogContainer
 *
 */
import { lazyLoad } from 'utils/loadable';

export const DialogContainer = lazyLoad(
  () => import('./index'),
  module => module.DialogContainer,
);
