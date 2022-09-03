import { css } from 'styled-components';
import { spacingLg } from '@george-gillams/components/constants/layout';

export const cardContainer = css`
  display: flex;
  width: 100%;
  margin-top: ${spacingLg};
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const centred = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
