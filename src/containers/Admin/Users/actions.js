import { createRoutine } from 'redux-saga-routines';

import { LOAD, REMOVE, REQUEST_MAGIC_LINK } from './constants';

export const load = createRoutine(LOAD);
export const remove = createRoutine(REMOVE);
export const requestMagicLink = createRoutine(REQUEST_MAGIC_LINK);
