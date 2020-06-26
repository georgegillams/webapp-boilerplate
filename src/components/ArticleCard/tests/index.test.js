import React from 'react';

import { render } from '@testing-library/react';

import ArticleCard from '..';

describe('<NavigationItem />', () => {
  it('Should render correctly', () => {
    const { container } = render(<ArticleCard linkUrl="/test" />);

    expect(container).toMatchSnapshot();
  });
  it('Should render correctly with custom className', () => {
    const { container } = render(<ArticleCard linkUrl="/test" className={'test-custom-classname'} />);

    expect(container).toMatchSnapshot();
  });
  it('Should render correctly hrefExternal', () => {
    const { container } = render(<ArticleCard linkUrl="https://duckduckgo.com/" />);

    expect(container).toMatchSnapshot();
  });
});
