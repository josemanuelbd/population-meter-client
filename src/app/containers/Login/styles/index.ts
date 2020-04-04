import styled from 'styled-components';
import { TABLET } from 'base/styles/media-queries';
import { TEXT_COLOR } from 'base/styles/skin';

export const Container = styled.div`
  padding: 1rem;

  ${ TABLET } {
    padding: 2rem;
  }
`;

export const Text = styled.span`
  color: ${ TEXT_COLOR };
  display: block;
  padding-bottom: 1rem;

  &:last-child {
    padding-bottom: 0;
  }
`;
