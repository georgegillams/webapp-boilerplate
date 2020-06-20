import React from 'react';
import PropTypes from 'prop-types';
import { PageTitle as GGPageTitle } from 'gg-components/Typography';
import TextLink from 'components/TextLink';
import Head from 'next/head';
import appConfig from 'helpers/appConfig';

const PageTitle = props => {
  const { link, name, pageTitle, ...rest } = props;

  let result = null;
  if (!link) {
    result = <GGPageTitle name={name} {...rest} />;
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
        {...rest}
      />
    );
  }

  return (
    <>
      <Head>
        <title>{`${pageTitle || name} - ${appConfig.projectTitle}`}</title>
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

export default PageTitle;
