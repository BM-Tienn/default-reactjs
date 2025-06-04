/**
 *
 * Pricing
 *
 */

import React, { memo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { history } from 'utils/history';
import { NotfoundWrapper } from './styled';

interface Props {}

export const Notfound = memo((props: Props) => {
  const onGoBackDashboard = useCallback(() => history.push('/'), []);

  return (
    <>
      <Helmet>
        <title>Notfound</title>
        <meta name="description" content="Description of Profile" />
      </Helmet>
      <NotfoundWrapper>
        <div className="topLogo" onClick={onGoBackDashboard}>
          <img src={'/images/logo.png'} alt="" />
        </div>

        <div className="mainBlock">
          <div className="bgBox">
            <img src="/images/taxi-family.png" alt="" />
          </div>
          <h3>Oop!</h3>
          <p>Page not found</p>
          <p></p>
          <button onClick={onGoBackDashboard}>Back to home page</button>
        </div>
      </NotfoundWrapper>
    </>
  );
});
