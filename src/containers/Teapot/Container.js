import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';
import { Paragraph, SubSection } from 'gg-components/Typography';
import PageTitle from 'components/PageTitle';

import STYLES from './teapot.scss';

const getClassName = cssModules(STYLES);

const Teapot = props => {
  const { className } = props;
  const classNameFinal = [getClassName('not-found__container')];
  if (className) {
    classNameFinal.push(className);
  }

  return (
    <main className={classNameFinal.join(' ')}>
      <PageTitle className={getClassName('not-found__container')} name="Error 418 - I'm a teapot." pageTitle="418">
        <SubSection anchor={false}>
          <Paragraph>
            Coffee cannot be brewed inside a teapot context. The resulting entity body MAY be short and stout.
          </Paragraph>
        </SubSection>
      </PageTitle>
    </main>
  );
};

Teapot.propTypes = {
  className: PropTypes.string,
};

Teapot.defaultProps = {
  className: null,
};

export default Teapot;
