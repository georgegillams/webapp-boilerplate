import React from 'react';
import { render } from '@testing-library/react';

import Status from '../Container';

describe('<Status />', () => {
  it('should render correctly', () => {
    const { container } = render(<Status builtAt={12355123} nodeEnv="test-node-env" />);

    expect(container).toMatchSnapshot();
  });
});
