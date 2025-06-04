/* eslint-disable no-useless-escape */
import { useMemo, useCallback } from 'react';

export const useMobileDetect = () => {
  const checkDevice = useCallback(() => {
    const flagIsMobile =
      typeof window === 'undefined'
        ? 0
        : window.matchMedia('only screen and (max-width: 100px)').matches;

    const isMobile = () => flagIsMobile;

    return {
      isMobile,
    };
  }, []);

  return useMemo(
    () => ({
      checkDevice,
    }),
    [checkDevice],
  );
};
