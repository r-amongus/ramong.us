/**
 * Copyright (c) /r/AmongUs
 */

declare module 'gatsby-plugin-google-analytics' {
  declare module.exports: {
    trackCustomEvent: (...params: any) => void,
  };
}
