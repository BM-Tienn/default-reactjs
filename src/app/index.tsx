/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import { useGlobalSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from './slice/selector';
export function App() {
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { actions } = useGlobalSlice();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isLoged = useSelector(isLogged);
  const corepulseRoot = process.env.REACT_APP_SUB_DIR;

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Corepluse application"
        defaultTitle="Corepluse"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Corepluse application" />
      </Helmet>

      <Routes>
        <Route path={`${corepulseRoot}/`} element={<></>}>
          <Route path={`${corepulseRoot}/`} element={<></>}></Route>
        </Route>
        <Route path={`${corepulseRoot}/login`} element={<></>} />
        <Route path="*" element={<></>} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
