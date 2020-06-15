import React from 'react';

import styled from '@emotion/styled';

import Link from 'next/link';

const HeaderRoot = styled(`header`)`
  left: 0;
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const HeaderContainer = styled('div')`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const NavRoot = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  max-width: 1024px;
`;

const ListItem = styled('div')`
  display: flex;
`;

const ListActions = styled('div')`
  display: flex;
`;

const Space = styled('div')`
  flex: 1 1 auto;
`;

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <NavRoot>
          <ListItem>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
            <Space />
            <Link href={'/account'}>
              <a>Account</a>
            </Link>
          </ListItem>

          <Space />

          <ListActions></ListActions>
        </NavRoot>
      </HeaderContainer>
    </HeaderRoot>
  );
}

Header.propTypes = {};

export default Header;
