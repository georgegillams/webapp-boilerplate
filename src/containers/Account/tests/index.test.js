import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { loadShowcases } from '../actions';
import configureStore from 'utils/redux/configure-store';

import { mapDispatchToProps } from '..';
import Home from '../Container';

describe('<Home />', () => {
  let store;
  const spy = jest.fn();
  const state = {
    loadingShowcases: false,
    loadShowcasesError: null,
    showcases: [],
  };

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render and match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Home loadShowcases={spy} showcasesState={state} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.loadShowcases).toBeDefined();
    });

    it('should dispatch loadShowcases when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.loadShowcases();
      expect(dispatch).toHaveBeenCalledWith(loadShowcases());
    });
  });
});
