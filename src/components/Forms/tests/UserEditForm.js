import React from 'react';
import { render } from '@testing-library/react';

import { UserEditForm } from '..';

describe('<UserEditForm />', () => {
  it('Should render correctly', () => {
    const { container } = render(<UserEditForm test user={{}} onDataChanged={() => null} onSubmit={() => null} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with admin controls shown', () => {
    const { container } = render(
      <UserEditForm test showAdminControls user={{}} onDataChanged={() => null} onSubmit={() => null} />
    );

    expect(container).toMatchSnapshot();
  });
});
