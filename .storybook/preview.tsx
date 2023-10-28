import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
