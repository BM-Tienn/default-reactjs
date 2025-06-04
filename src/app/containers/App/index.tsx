import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { GlobalStyle } from 'styles/global-styles';
import { CustomStyle } from 'styles/custom-styles';
import CheckNewVersion from './components/CheckNewVersion';
import Router from './components/Router';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, actions, sliceKey } from './slice';
import { appSaga } from './saga';
import { AppWrapper } from './styled';
// import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotifications } from './selectors';
import NotificationsSystem, {
  atalhoTheme,
  setUpNotifications,
  dismissNotification,
} from 'reapop';
// import { OverlayThumb } from 'app/components/OverlayThumb/Loadable';

// run this function when your application starts before creating any notifications
setUpNotifications({
  defaultProps: {
    // image: Logo,
    allowHTML: true,
    dismissible: true,
    dismissAfter: 2000,
    transition: 'slide',
    position: 'bottom-right',
    showDismissButton: true,
  },
});

interface Props {}

const GlobalStyleComponent = GlobalStyle as any;
const CustomStyleComponent = CustomStyle as any;

export const App = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: appSaga });

  const dispatch = useDispatch();

  const notifications = useSelector(selectNotifications);

  useEffect(() => {
    return () => {
      dispatch(actions.resetState());
    };
  }, [dispatch]);

  return (
    <>
      <Helmet titleTemplate={`%s - Default`} defaultTitle={`Default`}>
        <title>Default</title>
        <meta name="description" content={`Default`} />
        <link rel="canonical" href={window.location.origin} />
        <link rel="icon" href={'/images/favicon.png'} />
        <meta property="og:title" content={'Default'} />
        <meta property="og:description" content={'Default'} />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:site_name" content={'Default'} />
        <meta property="og:image" content={'/images/favicon.png'} />
        <meta property="og:image:alt" content={'Default'} />
        <meta name="twitter:title" content={'Default'} />
        <meta name="twitter:description" content={'Default'} />
        <meta name="twitter:image" content={'/images/favicon.png'} />
        <meta name="twitter:data1" content={'Default'} />
        <meta name="apple-mobile-web-app-status-bar-style" content={'#fff'} />
        <meta name="theme-color" content={'#fff'} />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      <CheckNewVersion>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          // if (loading)
          //   return (
          //     <OverlayThumb icon={<LoadingOutlined />} label="Loading..." />
          //   );
          // if (!loading && !isLatestVersion) refreshCacheAndReload();
          return (
            <AppWrapper
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: 'var(--color-dark)',
              }}
            >
              <Router />
              <CustomStyleComponent primaryColor={'#fff'} />
            </AppWrapper>
          );
        }}
      </CheckNewVersion>
      <GlobalStyleComponent />
      <NotificationsSystem
        theme={atalhoTheme}
        notifications={notifications}
        dismissNotification={id => dispatch(dismissNotification(id))}
      />
    </>
  );
});
