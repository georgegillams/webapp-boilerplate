import React from 'react';
import PropTypes from 'prop-types';
import Subsection from '@george-gillams/components/subsection';
import Paragraph from '@george-gillams/components/paragraph';
import PageContainer from '@george-gillams/components/page-container';
import PageTitle from 'components/common/PageTitle';
import TextLink from 'components/common/TextLink';

const NotFound = props => {
  return (
    <PageContainer centred>
      <PageTitle name="Home" {...props}>
        <Subsection anchor={false}>
          <Paragraph>
            This is just a boilerplate page, but you can put any content you want in here.
            <br />
            This page is pretty boring, but the <TextLink href={'/sitemap'}>site map</TextLink> might be more inspiring.
          </Paragraph>
        </Subsection>
      </PageTitle>
    </PageContainer>
  );
};

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: null,
};

export default NotFound;
