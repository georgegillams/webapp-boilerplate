import React from 'react';
import PageContainer from 'components/common/PageContainer';
import { cssModules } from '@george-gillams/components/helpers/cssModules';
import Subsection from '@george-gillams/components/subsection';
import Paragraph from '@george-gillams/components/paragraph';
import PageTitle from 'components/common/PageTitle';
import TextLink from 'components/common/TextLink';

import STYLES from './not-found.scss';

const getClassName = cssModules(STYLES);

const NotFound = props => {
  return (
    <PageContainer bottomPadding centred {...props}>
      <PageTitle className={getClassName('not-found__container')} name="Oops." pageTitle="404">
        <Subsection anchor={false}>
          <Paragraph>
            The page you&apos;re looking for doesn&apos;t exist, or you don&apos;t have permission to view it.
            <br />
            Maybe the <TextLink href={'/sitemap'}>site map</TextLink> can help
          </Paragraph>
        </Subsection>
      </PageTitle>
    </PageContainer>
  );
};

export default NotFound;
