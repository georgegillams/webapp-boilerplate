import React from 'react';
import PageContainer from 'components/common/PageContainer';
import { cssModules } from '@george-gillams/components/helpers/cssModules';
import Subsection from '@george-gillams/components/subsection';
import Paragraph from '@george-gillams/components/paragraph';
import PageTitle from 'components/common/PageTitle';

import STYLES from './teapot.scss';

const getClassName = cssModules(STYLES);

const Teapot = props => {
  return (
    <PageContainer bottomPadding centred {...props}>
      <PageTitle className={getClassName('not-found__container')} name="Error 418 - I'm a teapot." pageTitle="418">
        <Subsection anchor={false}>
          <Paragraph>
            Coffee cannot be brewed inside a teapot context. The resulting entity body MAY be short and stout.
          </Paragraph>
        </Subsection>
      </PageTitle>
    </PageContainer>
  );
};

export default Teapot;
