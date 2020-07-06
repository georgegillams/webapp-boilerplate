import produce from 'immer';

import { loadAuth, setCookiesAllowed } from './actions';

export const initialState = {
  cookiesAllowed: false,
  loadingAuth: false,
  loadAuthError: null,
  user: null,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case setCookiesAllowed.TRIGGER:
        draft.cookiesAllowed = payload;
        break;

      case loadAuth.REQUEST:
        draft.loadingAuth = true;
        draft.loadAuthError = null;
        break;

      case loadAuth.SUCCESS:
        draft.loadingAuth = false;
        draft.user = payload.user;
        break;

      case loadAuth.FAILURE:
        draft.loadingAuth = false;
        draft.loadAuthError = payload;
        break;
    }
  });

export default reducer;
