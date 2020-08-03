import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'gg-components/helpers/cssModules';
import { Subsection } from 'gg-components/Subsection';
import { Paragraph } from 'gg-components/Paragraph';
import PageTitle from 'components/common/PageTitle';

import STYLES from './status.scss';

import { getTimeDifference } from 'helpers/common/time';
import appConfig from 'helpers/appConfig';

const getClassName = cssModules(STYLES);

const Status = props => {
  const { builtAt, nodeEnv, ...rest } = props;

  return (
    <div {...rest}>
      <PageTitle anchor={false} name="Status">
        <img
          className={getClassName('status__badge')}
          alt="Build status"
          src={`${appConfig.githubRepoUrl}/workflows/CI/badge.svg`}
        />
        <br />
        <img
          className={getClassName('status__badge')}
          alt="Dependency status"
          src={`https://img.shields.io/david/${appConfig.githubRepo}`}
        />
        <Subsection anchor={false}>
          <Paragraph>Built {getTimeDifference(new Date(builtAt * 1000))}</Paragraph>
        </Subsection>
        <Subsection anchor={false}>
          <Paragraph>Environment {nodeEnv}</Paragraph>
        </Subsection>
      </PageTitle>
    </div>
  );
};

Status.propTypes = {
  builtAt: PropTypes.number.isRequired,
  nodeEnv: PropTypes.string.isRequired,
};

export default Status;
