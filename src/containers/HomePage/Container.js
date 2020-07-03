import React from 'react';
import PropTypes from 'prop-types';
import { Subsection } from 'gg-components/Subsection';
import { Paragraph } from 'gg-components/Paragraph';
import PageTitle from 'components/PageTitle';
import TextLink from 'components/TextLink';
import { cssModules } from 'gg-components/helpers/cssModules';
import STYLES from './home-page.scss';

const getClassName = cssModules(STYLES);

const NotFound = props => {
  const { className, ...rest } = props;

  return (
    <div className={getClassName('home-page__container', className)} {...rest}>
      <PageTitle name="Home" {...rest}>
        <Subsection anchor={false}>
          <Paragraph>
            This is just a boilerplate page, but you can put any content you want in here.
            <br />
            This page is pretty boring, but the <TextLink href={'/sitemap'}>site map</TextLink> might be more inspiring.
          </Paragraph>
        </Subsection>
      </PageTitle>
    </div>
  );
};

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: null,
};

export default NotFound;
