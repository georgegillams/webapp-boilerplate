import React from 'react';

import { render } from '@testing-library/react';

import NavigationItem from '..';

describe('<NavigationItem />', () => {
  it('Should render correctly', () => {
    const { container } = render(<NavigationItem name="name" linkUrl="/test"></NavigationItem>);

    expect(container).toMatchSnapshot();
  });
  it('Should render correctly with custom className', () => {
    const { container } = render(
      <NavigationItem name="name" linkUrl="/test" className={'test-custom-classname'}></NavigationItem>
    );

    expect(container).toMatchSnapshot();
  });
  it('Should render correctly hrefExternal', () => {
    const { container } = render(<NavigationItem name="name" linkUrl="/test" hrefExternal></NavigationItem>);

    expect(container).toMatchSnapshot();
  });
});
