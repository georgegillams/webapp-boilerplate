import produce from 'immer';

import { loadShowcases } from './actions';

export const initialState = {
  loadingShowcases: false,
  loadShowcasesError: null,
  showcases: [],
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case loadShowcases.REQUEST:
        draft.loadingShowcases = true;
        draft.loadShowcasesError = null;
        break;

      case loadShowcases.SUCCESS:
        draft.loadingShowcases = false;
        draft.showcases = payload.data;
        break;

      case loadShowcases.FAILURE:
        draft.loadingShowcases = false;
        draft.loadShowcasesError = payload;
        break;
    }
  });

export default reducer;
