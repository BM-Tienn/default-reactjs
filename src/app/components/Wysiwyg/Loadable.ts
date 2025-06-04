/**
 *
 * Asynchronously loads the component for Wysiwyg
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Wysiwyg = lazyLoad(
  () => import('./index'),
  module => module.Wysiwyg,
);

export { SunEditor } from './SunEditor';
