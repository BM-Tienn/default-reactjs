import { BaseXHR } from 'utils/axios';

export const callApiLogin = payload => BaseXHR.$post('auth/login', payload);
