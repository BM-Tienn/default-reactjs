/**
 *
 * Healthcheck
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import packageJson from '../../../../package.json';

const appVersion = packageJson.version;

const jsonData = {
  env: process.env.NODE_ENV,
  version: appVersion,
  app: 'default',
};

interface Props {}

export const Healthcheck = memo((props: Props) => {
  return (
    <>
      <Helmet>
        <title>Healthcheck</title>
        <meta name="description" content="Description of Healthcheck" />
      </Helmet>
      <div style={{ color: '#000000' }}>{JSON.stringify(jsonData)}</div>
    </>
  );
});
