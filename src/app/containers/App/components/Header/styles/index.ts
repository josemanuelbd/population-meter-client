import styled, { css } from 'styled-components';

import { HEADER_SIZE, HEADER_SIZE_TABLET } from 'base/styles/sizes';
import { HEADER_BORDER_COLOR, HEADER_BACKGROUND } from 'base/styles/skin';
import { TABLET } from 'base/styles/media-queries';
import getLayerPosition from 'base/styles/z-index';

export const Wrapper = styled.header``;
Wrapper.displayName = 'Wrapper';

const HeaderStyles = css`
  height: ${ HEADER_SIZE }rem;
  width: 100%;
  z-index: ${ getLayerPosition('HEADER') };

  ${ TABLET } {
    height: ${ HEADER_SIZE_TABLET }rem;
  }
`;

export const HeaderBar = styled.div`
  ${ HeaderStyles }
  align-items: center;
  background-color: ${ HEADER_BACKGROUND };
  border-bottom: 1px solid ${ HEADER_BORDER_COLOR };
  display: flex;
  padding: 1rem;
  position: fixed;
  top: 0;
`;
HeaderBar.displayName = 'HeaderBar';

export const HeaderSpacer = styled.div`
  ${ HeaderStyles }
`;
HeaderSpacer.displayName = 'HeaderSpacer';
