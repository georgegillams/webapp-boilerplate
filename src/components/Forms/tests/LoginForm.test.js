import React from 'react';
import { render } from '@testing-library/react';

import { LoginForm } from '..';

describe('<LoginForm />', () => {
  it('Should render correctly', () => {
    const { container } = render(<LoginForm test credentials={{}} onDataChanged={() => null} onSubmit={() => null} />);

    expect(container).toMatchSnapshot();
  });
});
