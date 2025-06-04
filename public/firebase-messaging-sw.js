/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts(
  'https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js',
);

// const firebaseConfig = {
//   apiKey: 'AIzaSyC4Jh4CpPkdJAF24PdmAzb4tQhcv-XVv4w',
//   authDomain: 'test-notification-217dd.firebaseapp.com',
//   projectId: 'test-notification-217dd',
//   storageBucket: 'test-notification-217dd.appspot.com',
//   messagingSenderId: '678362344599',
//   appId: '1:678362344599:web:8c951055a92c4fb97fcdd2',
//   measurementId: 'G-3X408WMMET',
// };

const firebaseConfigProduction = {
  apiKey: 'AIzaSyA0947EoWYk3AUsjrLlFkfwwyzavBKb17A',
  authDomain: 'panoee-2ef66.firebaseapp.com',
  projectId: 'panoee-2ef66',
  storageBucket: 'panoee-2ef66.appspot.com',
  messagingSenderId: '38257334372',
  appId: '1:38257334372:web:4be05438862461767ca771',
  measurementId: 'G-6998P7Y6WZ',
};

firebase.initializeApp(firebaseConfigProduction);

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(
    ({ data = undefined, notification = undefined }) => {
      self.registration.showNotification(data.title || notification.title, {
        body: data.body || notification.body,
        icon: data?.image || notification?.image || './images/favicon.png',
      });
      function handleClick(event) {
        event.notification.close();
        // Open the url you set on notification.data
        clients.openWindow(data.url);
      }
      self.addEventListener('notificationclick', handleClick);
    },
  );
}
