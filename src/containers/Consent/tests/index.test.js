import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initialState } from '../reducer';

import configureStore from 'utils/redux/configure-store';

import ConsentIndex from '../index';
import Consent from '../Container';

describe('<Consent />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render correctly - index', () => {
    const { container } = render(
      <Provider store={store}>
        <ConsentIndex />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Consent
          consent={spy}
          resetConsent={spy}
          deferConsent={spy}
          consentState={{
            ...initialState,
          }}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
