import { createSelector } from 'reselect';

import { KEY } from './constants';
import { initialState } from './reducer';

const selectShowcasesDomain = state => state[KEY] || initialState;

const selectShowcasesState = () => createSelector(selectShowcasesDomain, subState => subState);

export { selectShowcasesDomain, selectShowcasesState };
