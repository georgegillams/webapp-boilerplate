import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from 'utils/redux/configure-store';

import NavigationBarWrapper from '../index';

describe('<Authenticator />', () => {
  let store;
  const state = {
    cookiesAllowed: false,
    loadingAuth: false,
    loadAuthError: null,
    user: undefined,
  };

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <NavigationBarWrapper authenticatorState={state} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
