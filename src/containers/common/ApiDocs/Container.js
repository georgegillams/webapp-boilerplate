import React from 'react';
import PageContainer from 'components/common/PageContainer';
import Paragraph from '@george-gillams/components/paragraph';
import PageTitle from 'components/common/PageTitle';
import TextLink from 'components/common/TextLink';
import { cssModules } from '@george-gillams/components/helpers/cssModules';
import { Table, Head, Body, Row, Cell } from '@george-gillams/components/table';
import { VerticalScrollContainer } from './container.styles';

import STYLES from './api-docs.scss';
import apiStructure from 'helpers/common/apiStructureWithDescriptions';

const getClassName = cssModules(STYLES);

const Container = () => (
  <PageContainer bottomPadding>
    <PageTitle name="API docs">
      <VerticalScrollContainer>
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
      </VerticalScrollContainer>
    </PageTitle>
  </PageContainer>
);

export default Container;
