import React from 'react';
import { cssModules } from 'gg-components/helpers/cssModules';
import { SubSection } from 'gg-components/Typography';
import TextLink from 'components/TextLink';
import PageTitle from 'components/PageTitle';

import redirects from 'helpers/redirects';
import STYLES from './site-map.scss';

const getClassName = cssModules(STYLES);

const SiteMap = props => (
  <PageTitle name="Site map" {...props}>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="Design 🎨">
      <TextLink href="/design/privacy-policy">Privacy Policy</TextLink>
    </SubSection>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="Other stuff 🤷‍♂️">
      <TextLink href="/status">Status</TextLink>
    </SubSection>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="Random 🐉">
      <TextLink hrefExternal href="/robots.txt">
        Robots.txt
      </TextLink>
      <br />
      <TextLink hrefExternal href="/sitemap.xml">
        SiteMap.xml
      </TextLink>
      <br />
      <TextLink href="/page-not-found">404 error page - not found</TextLink>
      <br />
      <TextLink href="/teapot">418 error page - I&apos;m a teapot</TextLink>
    </SubSection>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="API">
      <TextLink href="/api-docs">API docs</TextLink>
    </SubSection>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="Accounts 🔑">
      <TextLink href="/sign-up">Sign up</TextLink>
      <br />
      <TextLink href="/account">Account</TextLink>
    </SubSection>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="Admin 👮‍♂️">
      <TextLink href="/admin/users">Users</TextLink>
      <br />
      <TextLink href="/admin/analytics">Analytics</TextLink>
      <br />
      <TextLink href="/admin/notifications">Notifications</TextLink>
    </SubSection>
    <SubSection anchor={false} className={getClassName('pages__site-map-item')} name="Redirects 👉">
      {redirects.map(redirect => (
        <>
          <TextLink href={`${redirect.from}`}>{`${redirect.from} ⇒ ${redirect.to}`}</TextLink>
          <br />
        </>
      ))}
    </SubSection>
  </PageTitle>
);

export default SiteMap;
