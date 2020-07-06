import { createRoutine } from 'redux-saga-routines';

import { LOAD_SHOWCASES } from './constants';

export const loadShowcases = createRoutine(LOAD_SHOWCASES);
