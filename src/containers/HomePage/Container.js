import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, SubSection } from 'gg-components/Typography';
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
        <SubSection anchor={false}>
          <Paragraph>
            This is just a boilerplate page, but you can put any content you want in here.
            <br />
            This page is pretty boring, but the <TextLink href={'/sitemap'}>site map</TextLink> might be more inspiring.
          </Paragraph>
        </SubSection>
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
