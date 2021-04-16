import React, { useState } from 'react';
import { Subsection } from 'gg-components/Subsection';
import TextLink from 'components/common/TextLink';
import PageTitle from 'components/common/PageTitle';
import { THEMES } from 'gg-components/Theming';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import STYLES from './card-demo.scss';
import { cssModules } from 'gg-components/helpers/cssModules';

const getClassName = cssModules(STYLES);

const dubaiImageUrl =
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
import ostritchImage from './os.jpeg';

const maxStages = 4;

const CardDemo = props => {
  const [stage, setStage] = useState(1);

  return (
    <PageTitle name={`Card demo - Slide ${stage}`} {...props}>
      <Button onClick={() => setStage(stage > 1 ? stage - 1 : maxStages)} className={getClassName('card-demo__button')}>
        Previous
      </Button>
      <Button onClick={() => setStage(stage < maxStages ? stage + 1 : 1)} className={getClassName('card-demo__button')}>
        Next
      </Button>
      {stage === 1 && (
        <Subsection name="Simple card (non-atomic) - ❌">
          <Card
            atomic={false}
            href="https://duckduckgo.com/"
            hrefExternal
            fillImageSrc={dubaiImageUrl}
            className={getClassName('card-demo__card', 'card-demo__card--1')}>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Dream big</p>
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.6rem' }}>Head to Dubai</p>
          </Card>
        </Subsection>
      )}
      {stage === 2 && (
        <Subsection name="Simple card (atomic) - ✅">
          <Card
            href="https://duckduckgo.com/"
            hrefExternal
            fillImageSrc={dubaiImageUrl}
            className={getClassName('card-demo__card', 'card-demo__card--1')}>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Dream big</p>
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.6rem' }}>Head to Dubai</p>
          </Card>
        </Subsection>
      )}
      {stage === 3 && (
        <Subsection name="Complex card (atomic) - ❌">
          <Card
            href="https://duckduckgo.com/"
            hrefExternal
            fillImageSrc={ostritchImage}
            className={getClassName('card-demo__card', 'card-demo__card--2')}>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.6rem' }}>Plan your escape with us</h2>
            <p style={{ color: 'white', fontSize: '1.2em' }}>
              We&#39;ve got deals on Flights to some of the most remote holiday destinations. We&#39;ve also got your
              Hotel covered, and car hire if you need it. Whether you&#39;re travelling solo, or bringing the whole
              family, we&#39;ve got deals for you!
            </p>
            <TextLink theme={THEMES.allWhite} href="https://duckduckgo.com/" hrefExternal>
              Plan your escape now
            </TextLink>
          </Card>
        </Subsection>
      )}
      {stage === 4 && (
        <Subsection name="Complex card (non-atomic) - ✅">
          <Card
            atomic={false}
            href="https://duckduckgo.com/"
            hrefExternal
            fillImageSrc={ostritchImage}
            className={getClassName('card-demo__card', 'card-demo__card--2')}>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.6rem' }}>Plan your escape with us</h2>
            <p style={{ color: 'white', fontSize: '1.2em' }}>
              We&#39;ve got deals on Flights to some of the most remote holiday destinations. We&#39;ve also got your
              Hotel covered, and car hire if you need it. Whether you&#39;re travelling solo, or bringing the whole
              family, we&#39;ve got deals for you!
            </p>
            <TextLink theme={THEMES.allWhite} href="https://duckduckgo.com/" hrefExternal>
              Plan your escape now
            </TextLink>
          </Card>
        </Subsection>
      )}

      <p>* don't write copy like this</p>
    </PageTitle>
  );
};

export default CardDemo;
