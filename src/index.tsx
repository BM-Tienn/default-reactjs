/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import * as serviceWorker from 'serviceWorker';

import { ConfigProvider } from 'antd';
import { THEME_CONFIG } from 'styles/StyleConstants';

import 'sanitize.css/sanitize.css';

import { App } from 'app/containers/App';

import { HelmetProvider } from 'react-helmet-async';

import { store } from 'store/configureStore';

import './styles/normalize.css';
import './styles/global.css';

// axios request
import 'utils/axios';
// import { onDisabledReactDevtoolOnProduction } from 'utils/helper';

import 'trickling/lib/style.css';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// onDisabledReactDevtoolOnProduction();

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const ProviderComponent = Provider as any;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const AppBlock = (
  <ProviderComponent store={store}>
    <HelmetProvider>
      <ConfigProvider theme={THEME_CONFIG}>
        <App />
      </ConfigProvider>
    </HelmetProvider>
  </ProviderComponent>
);

root.render(AppBlock);

if (import.meta.hot) {
  import.meta.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
