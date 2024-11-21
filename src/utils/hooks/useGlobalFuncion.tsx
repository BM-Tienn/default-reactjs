import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
// import { setCookie } from 'utils/cookies';
import { globalActions } from 'app/slice';

export const useGlobalFunctions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = useCallback(
    data => {
      dispatch(globalActions.loginSuccesses());
      navigate('/');
    },
    [dispatch, navigate],
  );

  return useMemo(() => ({ onLogin }), [onLogin]);
};
