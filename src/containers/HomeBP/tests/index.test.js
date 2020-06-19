import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from 'utils/redux/configure-store';

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

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Home loadShowcases={spy} showcasesState={state} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
