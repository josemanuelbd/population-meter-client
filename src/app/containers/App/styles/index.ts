import styled, { createGlobalStyle } from 'styled-components';

import { TABLET } from 'base/styles/media-queries';
import { HEADER_SIZE, HEADER_SIZE_TABLET } from 'base/styles/sizes';
import { PRIMARY_BACKGROUND } from 'base/styles/skin';
import getLayerPosition from 'base/styles/z-index';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    overflow: hidden;
  }

  a:link,
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
`;

export const AppWrapper = styled.main`
  background-color: ${ PRIMARY_BACKGROUND };
  height: calc(100vh - ${ HEADER_SIZE }rem);
  overflow-x: auto;
  z-index: ${ getLayerPosition('CONTENT') };

  ${ TABLET } {
    height: calc(100vh - ${ HEADER_SIZE_TABLET }rem);
  }
`;
