import { createRoutine } from 'redux-saga-routines';

import { LOAD_AUTH, SET_COOKIES_ALLOWED, SET_USER } from './constants';

export const loadAuth = createRoutine(LOAD_AUTH);
export const setCookiesAllowed = createRoutine(SET_COOKIES_ALLOWED);
export const setUser = createRoutine(SET_USER);
