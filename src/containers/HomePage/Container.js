import React from 'react';
import PropTypes from 'prop-types';
import { Subsection } from 'gg-components/Subsection';
import { Paragraph } from 'gg-components/Paragraph';
import PageTitle from 'components/common/PageTitle';
import TextLink from 'components/common/TextLink';
import ActionsMenu from './ActionMenu';

const key = 'key';

const tableItems = [
  { id: '1', value: 'a' },
  { id: '2', value: 'a' },
];

const tableData = () => {
  return tableItems.map((item, index) => {
    const { id, value } = item;

    return (
      <div key={key} className="worklist-table-row">
        <div className="worklist-table-cell icon">
          <ActionsMenu
            items={[
              { id: '1', label: 'menu choice 1' },
              { id: '2', label: 'menu choice 2' },
            ]}
          />
        </div>
        ... other bits of code... ...
      </div>
    );
  });
};

const NotFound = props => {
  return (
    <PageTitle name="Home" {...props}>
      {tableData()}
      <Subsection anchor={false}>
        <Paragraph>
          This is just a boilerplate page, but you can put any content you want in here.
          <br />
          This page is pretty boring, but the <TextLink href={'/sitemap'}>site map</TextLink> might be more inspiring.
        </Paragraph>
      </Subsection>
    </PageTitle>
  );
};

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: null,
};

export default NotFound;
