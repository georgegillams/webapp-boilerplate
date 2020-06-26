import produce from 'immer';

import { load, remove, requestMagicLink } from './actions';

export const initialState = {
  users: null,
  loading: false,
  loadError: null,

  userToRemove: null,
  removing: false,
  removeError: null,

  userToLogIn: null,
  requesting: false,
  requestError: null,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case load.REQUEST:
        draft.loading = true;
        draft.loadError = null;
        break;

      case load.SUCCESS:
        draft.loading = false;
        draft.users = payload;
        break;

      case load.FAILURE:
        draft.loading = false;
        draft.loadError = payload;
        break;

      case remove.TRIGGER:
        draft.userToRemove = payload;
        break;

      case remove.REQUEST:
        draft.removing = true;
        draft.removeError = null;
        break;

      case remove.SUCCESS:
        draft.removing = false;
        break;

      case remove.FAILURE:
        draft.removing = false;
        draft.removeError = payload;
        break;

      case requestMagicLink.TRIGGER:
        draft.userToLogIn = payload;
        break;

      case requestMagicLink.REQUEST:
        draft.requesting = true;
        draft.requestError = null;
        break;

      case requestMagicLink.SUCCESS:
        draft.requesting = false;
        break;

      case requestMagicLink.FAILURE:
        draft.requesting = false;
        draft.requestError = payload;
        break;
    }
  });

export default reducer;
