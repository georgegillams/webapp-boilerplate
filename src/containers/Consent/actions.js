import { createRoutine } from 'redux-saga-routines';

import { CONSENT, DEFER_CONSENT, RE_PROMPT_CONSENT, RESET_CONSENT } from './constants';

export const consent = createRoutine(CONSENT);
export const deferConsent = createRoutine(DEFER_CONSENT);
export const rePromptConsent = createRoutine(RE_PROMPT_CONSENT);
export const resetConsent = createRoutine(RESET_CONSENT);
