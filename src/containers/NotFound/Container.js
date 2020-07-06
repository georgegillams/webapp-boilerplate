import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';
import { Paragraph, SubSection } from 'gg-components/Typography';
import PageTitle from 'components/PageTitle';
import TextLink from 'components/TextLink';

import STYLES from './not-found.scss';

const getClassName = cssModules(STYLES);

const NotFound = props => {
  const { className } = props;
  const classNameFinal = [getClassName('not-found__container')];
  if (className) {
    classNameFinal.push(className);
  }

  return (
    <main className={classNameFinal.join(' ')}>
      <PageTitle className={getClassName('not-found__container')} name="Oops." pageTitle="404">
        <SubSection anchor={false}>
          <Paragraph>
            The page you&apos;re looking for doesn&apos;t exist, or you don&apos;t have permission to view it.
            <br />
            Maybe the <TextLink href={'/site-map'}>sitemap</TextLink> can help
          </Paragraph>
        </SubSection>
      </PageTitle>
    </main>
  );
};

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: null,
};

export default NotFound;
