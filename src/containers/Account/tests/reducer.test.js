import showcasesReducer from '../reducer';
import { loadShowcases } from '../actions';

describe('showcasesReducer', () => {
  let state;

  const showcases = {
    loadingShowcases: false,
    loadShowcasesError: null,
    showcases: [],
  };

  beforeEach(() => {
    state = {
      ...showcases,
    };
  });

  it('should return the initial state', () => {
    expect(showcasesReducer(undefined, {})).toEqual(state);
  });

  describe('loadShowcases actions', () => {
    it('should handle the action loadShowcases.REQUEST correctly', () => {
      const expectResult = {
        ...state,
        loadingShowcases: true,
      };

      expect(showcasesReducer(state, loadShowcases.request())).toEqual(expectResult);
    });

    it('should return the action loadShowcases.SUCCESS correctly', () => {
      const expectResult = {
        ...state,
        showcases: [],
      };

      expect(showcasesReducer(state, loadShowcases.success({ data: [] }))).toEqual(expectResult);
    });

    it('should return the action loadShowcases.FAILURE', () => {
      const expectResult = {
        ...state,
        loadShowcasesError: 'some error',
      };

      expect(showcasesReducer(state, loadShowcases.failure('some error'))).toEqual(expectResult);
    });
  });
});
