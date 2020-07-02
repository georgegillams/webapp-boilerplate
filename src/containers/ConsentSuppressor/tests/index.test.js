import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initialState as initialConsentState } from '../../Consent/reducer';

import configureStore from 'utils/redux/configure-store';

import ConsentSuppressorIndex from '../index';
import ConsentSuppressor from '../Container';

describe('<ConsentSuppressor />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render correctly - index', () => {
    const { container } = render(
      <Provider store={store}>
        <ConsentSuppressorIndex setConsentSuppression={spy} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with default state', () => {
    const { container } = render(
      <Provider store={store}>
        <ConsentSuppressor
          setConsentSuppression={spy}
          consentState={{
            ...initialConsentState,
          }}
        />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
