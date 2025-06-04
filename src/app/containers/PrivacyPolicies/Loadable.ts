/**
 *
 * Asynchronously loads the component for PrivacyPolicies
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PrivacyPolicies = lazyLoad(
  () => import('./index'),
  module => module.PrivacyPolicies,
);
