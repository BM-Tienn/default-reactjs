/**
 *
 * Asynchronously loads the component for UploadDropzone
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UploadDropzone = lazyLoad(
  () => import('./index'),
  module => module.UploadDropzone,
);
