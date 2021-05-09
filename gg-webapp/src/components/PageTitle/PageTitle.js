import React from 'react';
import PropTypes from 'prop-types';
import { PageTitle as GGPageTitle } from '@george-gillams/components/PageTitle';
import TextLink from '../TextLink';
import { withConfig } from '../Config';
import Head from 'next/head';
import STYLES from './page-title.scss';
import { cssModules } from '@george-gillams/components/helpers/cssModules';

const getClassName = cssModules(STYLES);

const PageTitle = props => {
  const { appConfig, link, name, pageTitle, className, ...rest } = props;

  let result = null;

  const classNames = [getClassName('page-title__heading')];
  if (appConfig.app.style.centerPageTitle) {
    classNames.push(getClassName('page-title__heading--centred'));
  }
  if (appConfig.app.style.underlinePageTitle) {
    classNames.push(getClassName('page-title__heading--underlined'));
  }
  if (className) {
    classNames.push(className);
  }

  if (!link) {
    result = <GGPageTitle className={classNames.join(' ')} name={name} {...rest} />;
  } else {
    result = (
      <GGPageTitle
        name={name}
        link={link}
        renderLink={(linkHref, linkName, linkClassName) => {
          return (
            <TextLink href={linkHref} className={linkClassName}>
              {linkName}
            </TextLink>
          );
        }}
        className={classNames.join(' ')}
        {...rest}
      />
    );
  }

  const pageTitleFinal = `${pageTitle || name} - ${appConfig.projectTitle}`;

  return (
    <>
      <Head>
        <title>{pageTitleFinal}</title>
        <meta key="og:title" name="og:title" content={pageTitleFinal} />
      </Head>
      {result}
    </>
  );
};

PageTitle.propTypes = {
  link: PropTypes.object,
  name: PropTypes.string.isRequired,
  pageTitle: PropTypes.string,
};

PageTitle.defaultProps = {
  link: null,
  pageTitle: null,
};

export default withConfig(PageTitle);
