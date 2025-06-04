/**
 *
 * Asynchronously loads the component for TableContainer
 *
 */
import { lazyLoad } from 'utils/loadable';

export const TableContainer = lazyLoad(
  () => import('./index'),
  module => module.TableContainer,
);
