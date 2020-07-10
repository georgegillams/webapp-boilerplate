import React from 'react';
import PropTypes from 'prop-types';
import { Subsection } from 'gg-components/Subsection';
import { Paragraph } from 'gg-components/Paragraph';
import PageTitle from 'components/PageTitle';
import TextLink from 'components/TextLink';

const NotFound = props => {
  return (
    <PageTitle name="Home" {...props}>
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
