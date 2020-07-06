import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initialState as initialConsentState } from '../../Consent/reducer';

import configureStore from 'utils/redux/configure-store';

import CookiesRequiredIndex from '../index';
import CookiesRequired from '../Container';

describe('<CookiesRequired />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render correctly - index', () => {
    const { container } = render(
      <Provider store={store}>
        <CookiesRequiredIndex reason="some reason" />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with default state', () => {
    const { container } = render(
      <Provider store={store}>
        <CookiesRequired
          reason="some reason"
          rePromptConsent={spy}
          consentState={{
            ...initialConsentState,
          }}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
