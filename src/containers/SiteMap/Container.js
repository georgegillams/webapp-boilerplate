import React from 'react';
import PageContainer from 'components/common/PageContainer';
import TextLink from 'components/common/TextLink';
import PageTitle from 'components/common/PageTitle';
import Paragraph from '@george-gillams/components/paragraph';
import redirects from 'helpers/redirects';
import { StyledSubsection } from './site-map.styles';

const SiteMap = props => (
  <PageContainer bottomPadding {...props}>
    <PageTitle name="Site map">
      <StyledSubsection anchor={false} name="Design 🎨">
        <Paragraph>
          <TextLink href="/privacy-policy">Privacy Policy</TextLink>
        </Paragraph>
      </StyledSubsection>
      <StyledSubsection anchor={false} name="Other stuff 🤷‍♂️">
        <Paragraph>
          <TextLink href="/debug">Debug tools</TextLink>
          <br />
          <TextLink href="/status">Status</TextLink>
        </Paragraph>
      </StyledSubsection>
      <StyledSubsection anchor={false} name="Random 🐉">
        <Paragraph>
          <TextLink hrefExternal href="/robots.txt">
            Robots.txt
          </TextLink>
          <br />
          <TextLink hrefExternal href="/sitemap.xml">
            SiteMap.xml
          </TextLink>
          <br />
          <TextLink href="/404">404 error page - not found</TextLink>
          <br />
          <TextLink href="/teapot">418 error page - I&apos;m a teapot</TextLink>
        </Paragraph>
      </StyledSubsection>
      <StyledSubsection anchor={false} name="API">
        <Paragraph>
          <TextLink href="/api-docs">API docs</TextLink>
        </Paragraph>
      </StyledSubsection>
      <StyledSubsection anchor={false} name="Accounts 🔑">
        <Paragraph>
          <TextLink href="/account">Account</TextLink>
          <br />
          <TextLink href="/sign-up">Sign up</TextLink>
          <br />
          <TextLink href="/login">Log in</TextLink>
          <br />
          <TextLink href="/email-verification">Email verification</TextLink>
          <br />
          <TextLink href="/magic-login">Magic login</TextLink>
        </Paragraph>
      </StyledSubsection>
      <StyledSubsection anchor={false} name="Admin 👮‍♂️">
        <Paragraph>
          <TextLink href="/admin">Admin navigation</TextLink>
          <br />
          <TextLink href="/admin/analytics">Analytics</TextLink>
          <br />
          <TextLink href="/admin/emails">Emails</TextLink>
          <br />
          <TextLink href="/admin/notifications">Notifications</TextLink>
          <br />
          <TextLink href="/admin/users">Users</TextLink>
        </Paragraph>
      </StyledSubsection>
      <StyledSubsection anchor={false} name="Redirects">
        <Paragraph>
          {redirects.map(redirect => (
            <div key={redirect.from}>
              <TextLink href={`${redirect.from}`}>{`${redirect.from} ⇒ ${redirect.to}`}</TextLink>
              <br />
            </div>
          ))}
        </Paragraph>
      </StyledSubsection>
    </PageTitle>
  </PageContainer>
);

export default SiteMap;
