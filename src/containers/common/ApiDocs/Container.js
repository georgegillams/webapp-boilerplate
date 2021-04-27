import React from 'react';
import { Paragraph } from '@george-gillams/components/Paragraph';
import PageTitle from '@george-gillams/webapp/components/PageTitle';
import TextLink from '@george-gillams/webapp/components/TextLink';
import { cssModules } from '@george-gillams/components/helpers/cssModules';
import { Table, Head, Body, Row, Cell } from '@george-gillams/components/Table';

import STYLES from './api-docs.scss';
import apiStructure from 'helpers/common/apiStructureWithDescriptions';

const getClassName = cssModules(STYLES);

const Container = () => (
  <PageTitle name="API docs">
    <Table className={getClassName('api-docs__table')}>
      <Head>
        <Row>
          <Cell className={getClassName('api-docs__cell')}>
            <Paragraph padding={false}>Path</Paragraph>
          </Cell>
          <Cell className={getClassName('api-docs__cell')}>
            <Paragraph padding={false}>Method</Paragraph>
          </Cell>
          <Cell className={getClassName('api-docs__cell')}>
            <Paragraph padding={false}>Arguments</Paragraph>
          </Cell>
          <Cell className={getClassName('api-docs__cell')}>
            <Paragraph padding={false}>Authorisation</Paragraph>
          </Cell>
          <Cell className={getClassName('api-docs__cell')}>
            <Paragraph padding={false}>Description</Paragraph>
          </Cell>
        </Row>
      </Head>
      <Body>
        {Object.keys(apiStructure).map(key => {
          const apiCapability = apiStructure[key];
          return (
            <Row key={key}>
              <Cell className={getClassName('api-docs__cell')}>
                <TextLink href={apiCapability.fullPath} hrefExternal>
                  {apiCapability.path}
                </TextLink>
              </Cell>
              <Cell className={getClassName('api-docs__cell')}>
                <Paragraph padding={false} className={getClassName('api-docs__method')}>
                  {apiCapability.method}
                </Paragraph>
              </Cell>
              <Cell className={getClassName('api-docs__cell')}>
                <Paragraph padding={false}>{apiCapability.arguments}</Paragraph>
              </Cell>
              <Cell className={getClassName('api-docs__cell')}>
                <Paragraph padding={false}>{apiCapability.authorisation}</Paragraph>
              </Cell>
              <Cell className={getClassName('api-docs__cell')}>
                <Paragraph padding={false} className={getClassName('api-docs__description')}>
                  {apiCapability.description}
                </Paragraph>
              </Cell>
            </Row>
          );
        })}
      </Body>
    </Table>
  </PageTitle>
);

export default Container;
