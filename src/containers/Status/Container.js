import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';
import { Paragraph, SubSection } from 'gg-components/Typography';
import PageTitle from 'components/PageTitle';

import STYLES from './style.scss';

import { getTimeDifference } from 'helpers/time';
import appConfig from 'helpers/appConfig';

const getClassName = cssModules(STYLES);

const Status = props => {
  const { builtAt, nodeEnv, ...rest } = props;

  return (
    <div {...rest}>
      <PageTitle anchor={false} name="Status">
        <img
          className={getClassName('style__component')}
          alt="Build status"
          src={`${appConfig.githubRepoUrl}/workflows/CI/badge.svg`}
        />
        <br />
        <img
          className={getClassName('style__component')}
          alt="Dependency status"
          src={`https://img.shields.io/david/${appConfig.githubRepo}`}
        />
        <SubSection className={getClassName('pages__component')} anchor={false}>
          <Paragraph>Built {getTimeDifference(new Date(builtAt * 1000))}</Paragraph>
        </SubSection>
        <SubSection className={getClassName('pages__component')} anchor={false}>
          <Paragraph>Environment {nodeEnv}</Paragraph>
        </SubSection>
      </PageTitle>
    </div>
  );
};

Status.propTypes = {
  builtAt: PropTypes.number.isRequired,
  nodeEnv: PropTypes.string.isRequired,
};

export default Status;
