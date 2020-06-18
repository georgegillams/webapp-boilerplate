import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';
import { Paragraph, SubSection, TextLink, PageTitle } from 'gg-components/Typography';
import Link from 'next/link';

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
      <PageTitle className={getClassName('not-found__container')} name="Oops.">
        <SubSection anchor={false}>
          <Paragraph>
            The page you&apos;re looking for doesn&apos;t exist, or you don&apos;t have permission to view it.
            <br />
            Maybe the{' '}
            <Link href={'/site-map'}>
              <TextLink hrefDumb href="/site-map">
                sitemap
              </TextLink>
            </Link>{' '}
            can help
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
