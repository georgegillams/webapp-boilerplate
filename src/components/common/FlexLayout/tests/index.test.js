import React from 'react';

import { render } from '@testing-library/react';

import Layout from '..';

describe('<Layout />', () => {
  const children = <div>some text</div>;

  it('Should render correctly', () => {
    global.Date.getMonth = jest.fn(() => 2);
    const { container } = render(<Layout>{children}</Layout>);

    expect(container).toMatchSnapshot();
  });
});
