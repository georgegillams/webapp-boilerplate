import produce from 'immer';
import cookie from 'react-cookies';

import { setUser, loadAuth } from './actions';

export const initialState = {
  loadingAuth: false,
  loadAuthError: null,
  user: undefined,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case setUser.TRIGGER:
        draft.user = payload;
        if (payload && payload.session) {
          cookie.save('session', payload.session, {
            path: '/',
            expires: new Date(Date.now() + 24 * 60 * 60 * 100 * 1000),
          });
        }
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
