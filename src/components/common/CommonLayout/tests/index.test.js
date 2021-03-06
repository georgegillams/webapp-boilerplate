import React from 'react';

import { render } from '@testing-library/react';

import Layout, { LAYOUT_STYLES } from '..';

describe('<Layout />', () => {
  const children = <div>some text</div>;

  it('Should render correctly', () => {
    const { container } = render(<Layout>{children}</Layout>);

    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with spread props', () => {
    const { container } = render(<Layout layout={LAYOUT_STYLES.prose}>{children}</Layout>);

    expect(container).toMatchSnapshot();
  });
});
