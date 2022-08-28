import React from 'react';
import PageContainer from 'components/common/PageContainer';
import Subsection from '@george-gillams/components/subsection';
import Paragraph from '@george-gillams/components/paragraph';
import PageTitle from 'components/common/PageTitle';
import TextLink from 'components/common/TextLink';

const NotFound = props => {
  return (
    <PageContainer centred bottomPadding {...props}>
      <PageTitle name="Home">
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

export default NotFound;
