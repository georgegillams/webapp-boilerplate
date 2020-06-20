import { createRoutine } from 'redux-saga-routines';

import { LOAD_AUTH, SET_COOKIES_ALLOWED } from './constants';

export const loadAuth = createRoutine(LOAD_AUTH);
export const setCookiesAllowed = createRoutine(SET_COOKIES_ALLOWED);
