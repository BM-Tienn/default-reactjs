import React from 'react';
import { ConfigProvider, Modal } from 'antd';
import WarningOutlined from '@ant-design/icons/WarningOutlined';
import { TYPE_COOKIE } from './constants';
import { getCookie } from './cookies';
import { nanoid } from '@reduxjs/toolkit';
import { notify, Status, Position } from 'reapop';
import { store } from 'store/configureStore';

// const { confirm } = Modal;
const AVATAR_COLORS = [
  '232, 105, 156',
  '255, 198, 115',
  '128, 128, 255',
  '105, 232, 194',
  '234, 255, 128',
];
const AVATAR_OPACITY = 0.4;

export const openNotificationWithIcon = (
  type: Status,
  message: string,
  description?: string,
  duration?: number,
  position?: Position,
) => {
  store.dispatch(
    notify(description || '', type, {
      title: message || 'Notification',
      dismissAfter: (duration || 3) * 1000,
      position,
    }),
  );
};

export const openMessageWithIcon = (
  type: Status,
  content: any,
  duration?: number,
) => {
  store.dispatch(
    notify(content || '', type, {
      dismissAfter: (duration || 3) * 1000,
    }),
  );
  // key && message.config({ key });
};

export const openConfirmModal = (
  onOk: () => void,
  title: string = 'Notification',
  description: string = 'Are you sure?',
  onCancel: () => void = () => {},
  okButtonText: string = 'Submit',
  cancelButtonText: string = 'Cancel',
) => {
  const darkTheme = {
    components: {
      Modal: {
        colorBgElevated: '#000',
        colorText: '#fff',
        borderRadiusLG: 16,
        boxShadow:
          '0 8px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.5)',
      },
      Button: {
        colorPrimary: '#1890ff',
        colorPrimaryHover: '#40a9ff',
      },
    },
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 16,
    },
  };

  ConfigProvider.config({
    theme: darkTheme,
  });

  Modal.confirm({
    title: <span style={{ color: '#fff' }}>{title}</span>,
    icon: <WarningOutlined />,
    content: description,
    okText: okButtonText,
    cancelText: cancelButtonText,
    onOk: () => onOk(),
    onCancel: () => onCancel(),
    maskTransitionName: '',
    transitionName: '',
  });
};
/**
 *
 * @param object
 * @returns new object with no property undefined or null
 */
export const cleanObject = <T extends Object>(object: T) => {
  const newObj: T = Object.assign({}, object);
  Object.keys(newObj).forEach((key: string) => {
    if (!key || newObj[key] === null || newObj[key] === undefined)
      delete newObj[key];
  });
  return newObj;
};

/**
 *
 * @param {s} input
 * @returns exp: (Mr Default => MD)
 */
export const getInitialLetterName = (s: string) => {
  let strs = s.split(' ');
  let result: string[] = [];
  strs.reverse().forEach(item => {
    result.length < 2 && result.push(item.substr(0, 1).toUpperCase());
  });
  return result.join('');
};
/**
 *
 * @param {initials}
 * @returns color based on string input
 */
export function getAvatarColor(initials?: string) {
  let colorIndex = 0;
  if (initials) {
    let nameHash = 0;
    for (const s of initials) {
      nameHash += s.codePointAt(0) || 0;
    }
    colorIndex = nameHash % AVATAR_COLORS.length;
  }
  return `rgba(${AVATAR_COLORS[colorIndex]}, ${AVATAR_OPACITY})`;
}

export const auth = () => !!getCookie(TYPE_COOKIE.TOKEN);

/**
 * @param {number} input: number
 * @return number formatted, 100000 => 100,000
 */
export const formatNumber = (number: number) => {
  const value = number + '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

/**
 * @param func function debounced
 * @param waitFor time debounce
 */
export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number,
) => {
  let timeout: number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

/**
 * @return id random
 */
export const generateRandomID = () => nanoid();

/**
 *
 * @param length
 * @returns: string random has length
 */
export function generateStringRandom(length: number): string {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const addScriptDynamic = (src, onload?: () => void) => {
  let script = document.createElement('script');
  script.setAttribute('src', src);
  if (onload) script.onload = onload;
  document.head.appendChild(script);
};

export const toggleItemArrs = <T extends string | number>(
  arrs: T[],
  item: T,
) => {
  const listXor: T[] = arrs.some(el => el === item)
    ? arrs.filter(el => el !== item)
    : [...arrs, item];
  return listXor;
};

/**
 *
 * @param {*} arr1: []
 * @param {*} arr2" []
 * @param {*} field: indicated whether array of object or array of item
 * @returns list item difference arr1 compared to arr2
 */
export const differenceArrays = (arr1, arr2, field = 'id') =>
  arr1.filter(
    current =>
      !arr2.some(el => (field ? el[field] === current[field] : el === current)),
  );

export const onDisabledReactDevtoolOnProduction = () => {
  if (process.env.NODE_ENV === 'production') {
    // Ensure the React Developer Tools global hook exists
    const _window = window as any;
    if (typeof _window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'object') return;

    // Replace all global hook properties with a no-op function or a null value
    Object.keys(_window.__REACT_DEVTOOLS_GLOBAL_HOOK__).forEach(prop => {
      if (prop === 'renderers') {
        // prevents console error when dev tools try to iterate of renderers
        _window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
      } else {
        _window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] =
          typeof _window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] === 'function'
            ? Function.prototype
            : null;
      }
    });
  }
};

export const onCopyText = (text: string) => {
  let TempText = document.createElement('input');
  TempText.value = text;
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand('copy');
  document.body.removeChild(TempText);

  openMessageWithIcon('success', 'Copy to clipboard success.');
};

export const onConvertFileToBase64: (item: File) => Promise<string> = (
  file: File,
) => {
  return new Promise(resolve => {
    let readerOriginal = new FileReader();
    readerOriginal.onload = function (e: any) {
      resolve(e.target.result);
    };
    readerOriginal.readAsDataURL(file);
  });
};
