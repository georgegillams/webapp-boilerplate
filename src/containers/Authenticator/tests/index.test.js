import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initialState } from '../reducer';

import configureStore from 'utils/redux/configure-store';

import Authenticator from '../index';

describe('<Authenticator />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Authenticator
          loadAuth={spy}
          setCookiesAllowed={spy}
          authenticatorState={{
            ...initialState,
          }}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
